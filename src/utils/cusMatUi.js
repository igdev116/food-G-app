import { createMuiTheme } from "@material-ui/core";

import PR_RED_COLOR from "constants/colors";

// overrides container, button
const Theme = createMuiTheme({
  palette: {
    primary: {
      main: PR_RED_COLOR,
    },
  },
});

export default Theme;
