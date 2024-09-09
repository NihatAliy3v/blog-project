import { Button as PrimaryButton } from "@mui/material";

type ButtonType = {
  variant?: "contained" | "text" | "outlined";
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  size?: "large" | "medium" | "small";
  // bgColor: string;
  // hoverColor: string;
  text?: string;
  handleClick?: () => void;
};

export const Button: React.FC<ButtonType> = ({
  variant = "contained",
  color = "primary",
  size = "medium",
  // bgColor,
  // hoverColor,
  text = "submit",
  handleClick,
}) => {
  return (
    <PrimaryButton
      variant={variant}
      // sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "purple" } }}
      type="submit"
      sx={{ color: "#fff", borderColor: "#fff", outlineColor: "#fff" }}
      size={size}
      color={color}
      onClick={handleClick}
    >
      {text}
    </PrimaryButton>
  );
};
