import { createTheme } from "@mui/material";
import { pensiveMood, velvetPetals } from "./values/colors";

export default createTheme({
    palette: {
        primary: {
            main: pensiveMood.white,
        },
        secondary: {
            main: velvetPetals.darkBlue,
        },
        text:{
            primary:pensiveMood.white,
            secondary: velvetPetals.darkBlue,
        }
    },
    typography: {
        fontFamily: '"Roboto", "Arial", sans-serif',
    },
});
