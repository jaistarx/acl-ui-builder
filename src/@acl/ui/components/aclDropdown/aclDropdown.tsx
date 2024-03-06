import styled from "@emotion/styled";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Box,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import {
  BOX_CSS_CONFIG,
  FORMCONTROL_CSS_CONFIG,
  INPUTLABEL_CSS_CONFIG,
} from "../../constants/aclDropdownConstant";
import { IColor, IDictionary } from "../../types/aclCore";
import {
  IDropdownExposedProps,
  IDropdownOptions,
} from "../../types/aclDropdownEntity";

export declare type AclDropdownProps = {
  label: string;
  options: Array<IDropdownOptions>;
  selectedOption: (option: string) => void;
};

const StyledFormControl = styled(FormControl)(() => ({
  ...FORMCONTROL_CSS_CONFIG,
}));

const StyledInputLabel = styled(InputLabel)(() => ({
  ...INPUTLABEL_CSS_CONFIG,
}));

const StyledBox = styled(Box)(
  ({ maxHeight, maxWidth, height, width }: IDictionary<any>) => ({
    ...(BOX_CSS_CONFIG as IDictionary<string | number>),
    maxHeight,
    maxWidth,
    height,
    width,
  })
);

const getExposedProps = (
  props: IDropdownExposedProps
): IDropdownExposedProps => {
  return {
    ...props,
    label: props.label ?? "",
    onChange: props.onChange ?? "",
    options: props.options ?? [],
    triggerReset: props.triggerReset ?? undefined,
    autoWidth: props.autoWidth ?? false,
    children: props.children ?? undefined,
    defaultOpen: props.defaultOpen ?? false,
    defaultValue: props.defaultValue ?? undefined,
    displayEmpty: props.displayEmpty ?? false,
    id: props.id ?? undefined,
    input: props.input ?? undefined,
    inputProps: props.inputProps ?? {},
    labelId: props.labelId ?? undefined,
    MenuProps: props.MenuProps ?? {},
    multiple: props.multiple ?? false,
    onClose: props.onClose || undefined,
    onOpen: props.onOpen || undefined,
    open: props.open ?? undefined,
    className: props.className ?? undefined,
    style: props.style ?? {},
    showCheckbox: props.showCheckbox ?? false,
    fullWidth: props.fullWidth ?? false,
    height: props.height ?? undefined,
    maxHeight: props.maxHeight ?? undefined,
    width: props.width ?? undefined,
    maxWidth: props.maxWidth ?? undefined,
    color: (props.color ?? "primary") as IColor,
    error: props.error ?? false,
  };
};

const getDefaultValues = (
  defaultValue: string | Array<IDictionary<any>> | undefined,
  multipleSelect: boolean | undefined
): string | Array<string> => {
  if (defaultValue) {
    return Array.isArray(defaultValue)
      ? defaultValue.map((element: IDictionary<any>) => JSON.stringify(element))
      : JSON.stringify(defaultValue);
  } else {
    return multipleSelect ? [] : "";
  }
};

const getPassedPropsFromExposedProps = (
  exposedProps: IDropdownExposedProps
): IDictionary<any> => {
  const {
    onChange,
    maxHeight,
    maxWidth,
    showCheckbox,
    triggerReset,
    ...props
  } = exposedProps;
  return props;
};

const AclDropdown = (props: IDropdownExposedProps) => {
  const exposedProps = getExposedProps(props);
  const passedProps = getPassedPropsFromExposedProps(exposedProps);

  const defaultValue = getDefaultValues(
    exposedProps.defaultValue,
    exposedProps.multiple
  );

  const [selectedOptions, setSelectedOptions] = useState<
    string | Array<string> | null
  >(defaultValue);

  const handleSetSelectedOption = (options: string | Array<string>): void => {
    setSelectedOptions(options);

    let parsedOptions: Array<IDictionary<string | number>> = [];
    Array.isArray(options)
      ? options.map((element: string) =>
          parsedOptions.push(JSON.parse(element))
        )
      : (parsedOptions = JSON.parse(options));

    exposedProps.onChange(parsedOptions);
  };

  const getColorForText = (id: any) => {
    return id ? 'black' : 'grey';
  };
  

  useEffect(() => {
    setSelectedOptions(JSON.stringify(props.defaultValue));
    // if(exposedProps.triggerReset) {
    //   exposedProps.triggerReset = false;
    // }
  }, [exposedProps.triggerReset]);

  useEffect(() => {
    setSelectedOptions(getDefaultValues(props.defaultValue, props.multiple));
  }, [props.multiple]);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <StyledFormControl
          variant="standard"
          className={exposedProps.className}
          style={exposedProps.style}
          fullWidth={exposedProps.fullWidth}
        >
          <StyledInputLabel>{exposedProps.label}</StyledInputLabel>
          <Select
            value={selectedOptions}
            onChange={(event: IDictionary<any>) =>
              handleSetSelectedOption(event.target.value)
            }
            IconComponent={KeyboardArrowDownIcon}
            renderValue={(selectedItems: any) => (
              <>
                {Array.isArray(selectedItems) && (
                  <StyledBox
                    maxHeight={exposedProps.maxHeight}
                    maxWidth={exposedProps.maxWidth}
                    height={exposedProps.height}
                    width={exposedProps.width}
                  >
                    {selectedItems?.map((value: string) => (
                      <Chip
                        key={JSON.parse(value).id}
                        label={JSON.parse(value).label}
                      />
                    ))}
                  </StyledBox>
                )}
                {/* TODO: Needs to rewrite the logic */}
                {/* {!Array.isArray(selectedItems) &&
                  JSON.parse(selectedItems).label} */}
                {!Array.isArray(selectedItems) && (
                  <span style={{ color: getColorForText(JSON.parse(selectedItems).id) }}>
                    {JSON.parse(selectedItems).label}
                  </span>
                )}
              </>
            )}
            {...passedProps}
          >
            {exposedProps.options.map((option: IDictionary<string>) => (
              <MenuItem key={option.id} value={JSON.stringify(option)}>
                {exposedProps.multiple && exposedProps.showCheckbox && (
                  <Checkbox
                    checked={
                      (selectedOptions as Array<string>)?.indexOf(
                        JSON.stringify(option)
                      ) > -1
                    }
                  />
                )}
                <ListItemText primary={option.label} />
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
      </ThemeProvider>
    </>
  );
};

export default AclDropdown;
