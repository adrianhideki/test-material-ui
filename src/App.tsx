import AppBar from "./components/AppBar";
import React from "react";
import RangeBox from "./components/RangeBox";
import { useStyles } from "./styles";

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar />
      <div className={classes.grid}>
        <RangeBox label="Faixa:" width="400px" className={classes.input} />
        <RangeBox label="Faixa:" width="400px" className={classes.input} />
        <RangeBox label="Faixa:" width="400px" className={classes.input} />
      </div>
    </div>
  );
}

export default App;
