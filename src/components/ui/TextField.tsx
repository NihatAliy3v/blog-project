import { TextField as Input } from "@mui/material";
import React from "react";

type TextFieldType = {
  label?: string;
  size?: "small" | "medium";
  type?:string
};
export const TextField = React.forwardRef<HTMLInputElement, TextFieldType>(
  ({ label, size = "small", type = "text", ...props }, ref) => {
    return (
      <>
        <Input
          className="w-full"
          size={size}
          label={label}
          {...props}
          ref={ref}
          type={type}
        />
      </>
    );
  }
);
