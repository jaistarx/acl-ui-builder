import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

type StorageObject = Storage | null;

type UseStorageReturnType<T> = [
  T | undefined,
  Dispatch<SetStateAction<T | undefined>>,
  () => void
];

export function useLocalStorage<T>(
  key: string,
  defaultValue: T | (() => T) | undefined = undefined
): UseStorageReturnType<T> {
  return useStorage<T>(key, window.localStorage, defaultValue);
}

export function useSessionStorage<T>(
  key: string,
  defaultValue: T | (() => T) | undefined = undefined
): UseStorageReturnType<T> {
  return useStorage<T>(key, window.sessionStorage, defaultValue);
}

function useStorage<T>(
  key: string,
  storageObject: StorageObject,
  defaultValue: T | (() => T) | undefined
): UseStorageReturnType<T> {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = storageObject?.getItem(key);
    if (jsonValue != null) {
      try {
        return JSON.parse(jsonValue);
      } catch {
        return jsonValue;
      }
    }

    if (typeof defaultValue === "function") {
      return (defaultValue as () => T)();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined && storageObject) {
      storageObject.removeItem(key);
    } else if (storageObject) {
      storageObject.setItem(key, JSON.stringify(value));
    }
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
