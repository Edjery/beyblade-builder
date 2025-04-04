import { Box } from "@mui/material";
import { Fragment } from "react";
import { transparency, velvetPetals } from "../../../values/colors";
import SampleBuilder from "./SampleBuilder";
import Title from "./Title";

export const Home = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          bgcolor: velvetPetals.darkBlue + transparency[10],
          pb: "100px",
        }}
      >
        <Title />

        <SampleBuilder />
      </Box>
    </Fragment>
  );
};
