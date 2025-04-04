import { Box, Typography } from "@mui/material";
import { useState } from "react";
import {
  flowersLikeEyes,
  pensiveMood,
  transparency,
} from "../../../values/colors";
import { homePageTitle } from "../../../values/string";
import CustomButton from "../../common/CustomButton";
import { popupError } from "../../common/Popups";

const Title = () => {
  const [isLogging, setIsLogging] = useState<boolean>(false);
  const [isSigning, setIsSigning] = useState<boolean>(false);

  const handleLoginClick = () => {
    setIsLogging(true);
    popupError("Error: Not implemented yet");

    setTimeout(() => {
      setIsLogging(false);
    }, 500);
  };

  const handleSignupClick = () => {
    setIsSigning(true);
    popupError("Error: Not implemented yet");

    setTimeout(() => {
      setIsSigning(false);
    }, 500);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",

        minHeight: "90vh",
        px: "80px",
        pt: "-20px",
        color: pensiveMood.white,
      }}
    >
      <Typography
        sx={{
          p: "10px",
          mb: "20px",
          fontSize: "30px",
          letterSpacing: "5px",
          textShadow: `1px 2px 4px ${
            flowersLikeEyes.charcoal + transparency[30]
          }`,
        }}
      >
        {homePageTitle}
      </Typography>
      <CustomButton
        onClick={handleLoginClick}
        buttonLabel="Log in"
        isLoading={isLogging}
      />
      <Box sx={{ my: "10px" }} />
      <CustomButton
        onClick={handleSignupClick}
        buttonLabel="Sign up"
        isLoading={isSigning}
      />
    </Box>
  );
};

export default Title;
