import { TextField as Input } from "@mui/material";
import React from "react";
import { FieldError } from "react-hook-form";

type TextFieldType = {
  label?: string;
  size?: "small" | "medium";
  type?: string;
  disabled?: boolean;
  helperText?: string;
  error?: FieldError|undefined;
  // onChange?:
};
export const TextField = React.forwardRef<HTMLInputElement, TextFieldType>(
  (
    { label, size = "small", type = "text", disabled = false,
      // onChange,
       error, ...props },
    ref
  ) => {
    return (
      <>
        <Input
          className="w-full"
          
          size={size}
          label={label}
          {...props}
          ref={ref}
          type={type}
          disabled={disabled}
          error={error ? true : false}
          // onChange={onChange}
        />
      </>
    );
  }
);
