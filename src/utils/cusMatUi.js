import { createMuiTheme } from "@material-ui/core";

import PR_RED_COLOR from "constants/colors";

// overrides container, button
const Theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        paddingLeft: "75px !important",
        paddingRight: "75px !important",
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
