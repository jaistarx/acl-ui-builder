import { ThemeProvider, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import {
  IToggleButtonOptions,
  IToggleButtonProps,
} from "../../types/aclToggleButtonEntity";

const getExposedProps = (props: IToggleButtonProps) => {
  return {
    ...props,
  };
};

const getPassedProps = (props: IToggleButtonProps) => {
  const { options, onChange, defaultValue, ...restOfProps } = props;
  return restOfProps;
};

const AclToggleButton = ({ children, ...props }: IToggleButtonProps) => {
  const optionLabelRef = useRef<any>(null);
  const [value, setValue] = useState<IToggleButtonOptions>({
    id: "",
    label: "",
  });
  const [optionLabelWidth, setOptionLabelWidth] = useState<number>();
  const exposedProps = getExposedProps(props);
  const passedProps = getPassedProps(props);

  const handleValueChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: IToggleButtonOptions
  ) => {
    if (newValue) {
      setValue(newValue);
      if (exposedProps.onChange) {
        exposedProps.onChange(newValue);
      }
    }
  };

  useEffect(() => {
    if (exposedProps.defaultValue) {
      setValue(exposedProps.defaultValue);
    }
  }, [exposedProps.defaultValue]);

  useEffect(() => {
    if (optionLabelRef?.current) {
      const width = optionLabelRef.current.clientWidth;
      setOptionLabelWidth(width + 25);
    }
  }, [optionLabelRef]);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <ToggleButtonGroup
          value={value}
          exclusive
          onChange={handleValueChange}
          aria-label="text alignment"
          {...passedProps}
        >
          {exposedProps.options?.map(
            (option: IToggleButtonOptions, key: number) => (
              <ToggleButton
                key={option.id}
                value={option}
                aria-label={`${key}-toggle-value`}
              >
                <div
                  ref={optionLabelRef}
                  style={{
                    width: `${optionLabelWidth}px`,
                  }}
                  title={option.label}
                >
                  {option.label}
                </div>
              </ToggleButton>
            )
          )}
        </ToggleButtonGroup>
      </ThemeProvider>
    </>
  );
};

export default AclToggleButton;
