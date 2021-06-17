import { createMuiTheme } from "@material-ui/core";

import PR_RED_COLOR from "constants/colors";

// overrides container, button
const Theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        padding: "0 75px !important",
      },
    },
    MuiCheckbox: {
      root: {
        padding: "3px !important",
      },
    },
  },
  palette: {
    primary: {
      main: PR_RED_COLOR,
    },
  },
});

export default Theme;
