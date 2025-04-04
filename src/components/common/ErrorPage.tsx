import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
import ErrorProps from "../../values/interface/ErrorProps";
import { homePath } from "../../values/paths";
import { homeLabel } from "../../values/string";
import { centerItem } from "../../values/stylingValues";
import CenterBox from "./CenterBox";
import CenterContainer from "./CenterContainer";

interface Props {
  error: ErrorProps;
}

const ErrorPage = ({ error }: Props) => {
  return (
    <Box sx={{ ...centerItem }}>
      <CenterContainer>
        <CenterBox>
          <Box>
            <Typography variant="h4" mb="20px">
              {error.title}
            </Typography>
            <Typography variant="h6" mb="20px">
              {error.description}
            </Typography>
            <Link to={homePath} style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                {homeLabel}
              </Button>
            </Link>
          </Box>
        </CenterBox>
      </CenterContainer>
    </Box>
  );
};

export default ErrorPage;
