import AppBar from "./components/AppBar";
import React from "react";
import RangeBox from "./components/RangeBox";
import { useStyles } from "./styles";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <RangeBox label="Faixa:" />
    </div>
  );
}

export default App;
