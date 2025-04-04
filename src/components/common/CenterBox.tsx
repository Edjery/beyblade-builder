import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  sx?: SxProps;
  children?: ReactNode;
}

const CenterBox = ({ children, sx }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "inherit",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CenterBox;
