import { DependencyList, useCallback, useEffect, useState } from "react";

type useAsyncReturnType<T> = {
  loading: boolean;
  error?: Error;
  value?: T;
};

export default function useAsync<T>(
  callback: () => Promise<T>,
  dependencies: DependencyList = []
): useAsyncReturnType<T> {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | undefined>();
  const [value, setValue] = useState<T | undefined>();

  const callbackMemoized = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);
    try {
      const result = await callback();
      setValue(result);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}
