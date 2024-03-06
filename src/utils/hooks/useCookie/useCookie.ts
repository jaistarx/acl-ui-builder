import Cookies from "js-cookie";
import { useCallback, useState } from "react";

type UseCookieReturnType<T> = [
  T | undefined,
  (newValue: T, options?: Cookies.CookieAttributes) => void,
  () => void
];

export default function useCookie<T>(
  name: string,
  defaultValue: T | undefined = undefined
): UseCookieReturnType<T> {
  const [value, setValue] = useState<T | undefined>(() => {
    const cookie = Cookies.get(name);
    if (cookie)
      try {
        return JSON.parse(cookie);
      } catch {
        return cookie;
      }
    Cookies.set(name, JSON.stringify(defaultValue));

    return defaultValue;
  });

  const updateCookie = useCallback(
    (newValue: T, options?: Cookies.CookieAttributes) => {
      Cookies.set(name, JSON.stringify(newValue), options);
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(undefined);
  }, [name]);

  return [value, updateCookie, deleteCookie];
}
