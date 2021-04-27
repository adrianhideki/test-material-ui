import React, { useEffect } from "react";
import { Menu as MenuIcon } from "@material-ui/icons/";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Switch,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useThemeStyle, ThemeStyle } from "../AppTheme/index";

const App = () => {
  const { themeValue, setThemeStyle } = useThemeStyle();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Material UI
        </Typography>
        <Switch
          onChange={(e) => {
            setThemeStyle(e.target.checked ? ThemeStyle.dark : ThemeStyle.light);
          }}
          checked={(themeValue === ThemeStyle.dark)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default App;
