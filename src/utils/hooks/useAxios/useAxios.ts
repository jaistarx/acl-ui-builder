import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

type UseAxiosOptions<D> = AxiosRequestConfig<D> & {
  useCancelToken?: boolean;
};

type UseAxiosReturnType<T, D> = {
  response?: AxiosResponse<T, D>;
  error?: Error;
  loading: boolean;
  execute: (url: string, options?: UseAxiosOptions<D>) => void;
};

const DEFAULT_OPTIONS: AxiosRequestConfig = {
  method: "get",
  headers: { "Content-Type": "application/json" },
};

export default function useAxios<T = any, D = any>(): UseAxiosReturnType<T, D> {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | undefined>();
  const [response, setResponse] = useState<AxiosResponse<T, D> | undefined>();
  const cancelTokenSourceRef = useRef<CancelTokenSource | undefined>();

  const execute = useCallback(
    async (url: string, options: UseAxiosOptions<D> = {}) => {
      setLoading(true);
      setError(undefined);
      setResponse(undefined);
      cancelTokenSourceRef.current?.cancel();

      const { useCancelToken = true, ...axiosOptions } = options;
      const cancelTokenSource: CancelTokenSource | undefined = useCancelToken
        ? axios.CancelToken.source()
        : undefined;

      cancelTokenSourceRef.current = cancelTokenSource;

      try {
        const response: AxiosResponse<T, D> = await axios({
          url,
          ...DEFAULT_OPTIONS,
          ...axiosOptions,
          cancelToken: cancelTokenSource?.token,
        });
        if (cancelTokenSource?.token.reason) {
          return; // Request canceled, do not update response
        }
        setResponse(response);
        setError(undefined);
      } catch (error) {
        if (axios.isCancel(error)) {
          (error as Error).message =
            "Request cancelled due to re-exection or component unmount";
        }
        setError(error as Error);
      } finally {
        if (!cancelTokenSource?.token.reason) {
          setLoading(false);
        }
      }
    },
    []
  );

  useEffect(() => {
    return () => {
      cancelTokenSourceRef.current?.cancel();
    };
  }, []);

  return { response, error, loading, execute };
}
