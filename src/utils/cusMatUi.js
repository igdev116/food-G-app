import React from "react";

import { createMuiTheme, withStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

// primary checkbox
const PrCheckbox = withStyles({
  root: {
    "&$checked": {
      color: "#cc3333",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default PrCheckbox;

// overrides container, button
const Theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        padding: "0 75px !important",
      },
    },
    MuiIconButton: {
      root: {
        padding: "3px !important",
      },
    },
  },
});

export { Theme };
