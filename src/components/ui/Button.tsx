import React from "react";
import { Button as PrimaryButton } from "@mui/material";
export const Button = () => {
  return (
    <PrimaryButton
      variant="contained"
      sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "purple" } }}
      type="submit"
    >
      Submit
    </PrimaryButton>
  );
};
