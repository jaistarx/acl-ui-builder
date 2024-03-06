import { useState } from "react";

type UseToggleReturnType = [boolean, (value?: any) => void];

export default function useToggle(defaultValue = false): UseToggleReturnType {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value?: boolean) {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
}
