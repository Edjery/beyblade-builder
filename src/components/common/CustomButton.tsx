import {
  Button,
  ButtonPropsColorOverrides,
  CircularProgress,
  Typography,
} from "@mui/material";
import { OverridableStringUnion } from "@mui/types";

interface Props {
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  buttonLabel?: string;
  color?: OverridableStringUnion<
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning",
    ButtonPropsColorOverrides
  >;
}

const CustomButton = ({
  isLoading,
  onClick,
  buttonLabel = "Button",
  color = "secondary",
  isDisabled = false,
}: Props) => {
  return (
    <Button
      variant="contained"
      disabled={isLoading || isDisabled}
      color={color}
      onClick={onClick}
      sx={{ width: "200px", height: "50px" }}
    >
      {isLoading ? (
        <CircularProgress color={color} />
      ) : (
        <Typography sx={{ letterSpacing: "5px" }}>{buttonLabel}</Typography>
      )}
    </Button>
  );
};

export default CustomButton;
