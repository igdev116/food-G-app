import { createMuiTheme } from "@material-ui/core";

import PRIMARY_RED_COLOR from "constants/colors";

// overrides button
const Theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_RED_COLOR,
    },
  },
});

export default Theme;
