import { TextField as Input } from "@mui/material";
import React from "react";

type TextFieldType = {
  label: string;
  size?: "small" | "medium";
};
export const TextField = React.forwardRef<HTMLInputElement, TextFieldType>(
  ({ label, size = "small", ...props }, ref) => {
    return (
      <>
        <Input
          className="w-full"
          size={size}
          label={label}
          {...props}
          ref={ref}
        />
      </>
    );
  }
);
