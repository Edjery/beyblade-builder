import { Box, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { flowersLikeEyes, transparency, white } from "../../values/colors";
import { betterBoxStyle } from "../../values/stylingValues";

interface Props {
  children?: ReactNode;
  sx?: SxProps;
}

const CenterContainer = ({ children, sx }: Props) => {
  return (
    <Box
      sx={{
        ...betterBoxStyle,
        display: "flex",
        textAlign: "center",
        bgcolor: flowersLikeEyes.charcoal + transparency[10],
        m: "auto",
        p: { xs: "10px", sm: "20px" },
        minHeight: "450px",
        width: { xs: "300px", sm: "500px", lg: "800px" },
        maxWidth: "100%",
        color: white,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default CenterContainer;
