import { DependencyList, useEffect, useRef } from "react";

export default function useUpdateEffect(
  callback: () => void,
  dependencies: DependencyList
): void {
  const firstRenderRef = useRef(true);
  const isDevEnvRef = useRef(process.env.NODE_ENV === "development");

  useEffect(() => {
    if (isDevEnvRef.current) {
      isDevEnvRef.current = false;

      return;
    }
    if (firstRenderRef.current) {
      firstRenderRef.current = false;

      return;
    }

    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
