import { Box, Typography } from "@mui/material";
import { pensiveMood } from "../../../values/colors";
import Builder from "./Builder";

const SampleBuilder = () => {
  return (
    <Box sx={{ color: pensiveMood.white }}>
      <Typography
        variant="h5"
        sx={{
          p: "20px",
          textAlign: "center",
        }}
      >
        Try our sample builder down here 👇👇👇
      </Typography>
      <Box sx={{ my: "50px" }} />
      <Builder />
    </Box>
  );
};

export default SampleBuilder;
