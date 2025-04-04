import { createTheme } from "@mui/material";
import { flowersLikeEyes, pensiveMood } from "./values/colors";

export default createTheme({
    palette: {
        primary: {
            main: pensiveMood.pewter,
        },
        secondary: {
            main: flowersLikeEyes.charcoal,
        }
    },
    typography: {
        fontFamily: '"Roboto", "Arial", sans-serif',
    },
});
