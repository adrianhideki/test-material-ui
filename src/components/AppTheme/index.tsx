import React, {
  PropsWithChildren,
  useState,
  createContext,
  useContext,
} from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { DarkTheme } from "../../themes/DarkTheme";
import { LightTheme } from "../../themes/LightTheme";

function getTheme(style: ThemeStyle) {
  const theme = style === ThemeStyle.dark ? DarkTheme : LightTheme;
  return createMuiTheme(theme);
}

export enum ThemeStyle {
  dark,
  light,
}

type ThemeContextData = {
  themeValue: ThemeStyle;
  setThemeStyle: (theme: ThemeStyle) => void;
};

export const ThemeContext = createContext({} as ThemeContextData);

const AppTheme = ({ children }: PropsWithChildren<any>) => {
  const [themeStyle, setThemeStyle] = useState({} as ThemeStyle);

  return (
    <ThemeContext.Provider
      value={{ themeValue: themeStyle, setThemeStyle: setThemeStyle }}
    >
      <ThemeProvider theme={getTheme(themeStyle)}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppTheme;
export const useThemeStyle = () => useContext(ThemeContext);
