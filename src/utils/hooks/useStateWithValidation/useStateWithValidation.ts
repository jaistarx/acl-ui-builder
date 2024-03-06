import { Dispatch, SetStateAction, useCallback, useState } from "react";

type ValidationFunction<T> = (value: T) => boolean;

type UseStateWithValidationReturnType<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  boolean
];

export default function useStateWithValidation<T>(
  validationFunc: ValidationFunction<T>,
  initialValue: T
): UseStateWithValidationReturnType<T> {
  const [state, setState] = useState<T>(initialValue);
  const [isValid, setIsValid] = useState(() => validationFunc(state));

  const onChange = useCallback(
    (nextState: T | ((prevState: T) => T)) => {
      const value =
        typeof nextState === "function"
          ? (nextState as (prevState: T) => T)(state)
          : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [state, validationFunc]
  );

  return [state, onChange, isValid];
}
