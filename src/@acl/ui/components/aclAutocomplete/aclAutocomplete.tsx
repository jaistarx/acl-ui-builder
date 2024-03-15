import { Autocomplete, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { AclAutocompleteProps } from "../../types/aclAutocompleteEntity";
import AclBox from "../aclBox";

const getExposedProps = <T,>(props: AclAutocompleteProps<T>) => {
  const { onChange, ...restOfProps } = props;
  return {
    ...restOfProps,
  };
};

const AclAutocomplete = <T,>({ ...props }: AclAutocompleteProps<T>) => {
  const exposedProps = getExposedProps(props);
  const [value, setValue] = useState<
    string | T | NonNullable<T> | (string | T)[] | null | undefined
  >("");
  const [openListbox, setOpenListbox] = useState<boolean>(false);

  const handleValueChange = (value: any) => {
    if (props.onChange) {
      props.onChange(value);
    }
    setValue(value);
    setOpenListbox(() => (!!value ? false : true));
  };

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <AclBox sx={{ border: "solid black 1px", borderRadius: "16px" }}>
          <Autocomplete
            freeSolo
            open={openListbox}
            value={value}
            onFocus={(e: any) => handleValueChange(e.target.value)}
            onBlur={() => setOpenListbox(false)}
            onInputChange={(_, value) => handleValueChange(value)}
            getOptionLabel={(option: any) => `${option}`}
            {...exposedProps}
          ></Autocomplete>
        </AclBox>
      </ThemeProvider>
    </>
  );
};

export default AclAutocomplete;
