import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";

const darkThemeOptions: ThemeOptions = {
  palette: {
    background: {
      default: "#212121",
      paper: "#3a3a3a",
    },
    text: {
      primary: "#bbbbbb",
      secondary: "#eeeeee",
    },
    primary: {
      main: "#6ca9f9",
    },
    secondary: {
      main: "#253175",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
          backgroundColor: "#212121",
        },
        body: {
          height: "100%",
          backgroundColor: "#212121",
          margin: "0px;",
        },
        "#root": {
          height: "100%",
          backgroundColor: "#212121",
        },
      },
    },
  },
};

export const DarkTheme = darkThemeOptions;
