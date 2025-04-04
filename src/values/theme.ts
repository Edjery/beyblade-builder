import { createTheme } from "@mui/material";
import { pensiveMood, velvetPetals } from "./colors";

export default createTheme({
    palette: {
        primary: {
            main: velvetPetals.darkBlue,
        },
        secondary : {
            main: pensiveMood.white,
        },
    },
    typography: {
        fontFamily: '"Roboto", "Arial", sans-serif',
    },
});
