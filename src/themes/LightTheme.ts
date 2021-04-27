import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const lightThemeOptions: ThemeOptions = {
  palette: {
    background: {
      default: "#bbbbbb",
      paper: "#eeeeee",
    },
    text: {
      primary: "#212121",
      secondary: "#3a3a3a",
    },
    primary: {
      main: "#2e3f76",
    },
    secondary: {
      main: "#6ca9f9",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
          backgroundColor: "#bbbbbb",
        },
        body: {
          height: "100%",
          backgroundColor: "#bbbbbb",
          margin: "0px;",
        },
        "#root": {
          height: "100%",
          backgroundColor: "#bbbbbb",
        },
      },
    },
  },
};

export const LightTheme = lightThemeOptions;
