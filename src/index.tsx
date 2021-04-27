import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppTheme from "./components/AppTheme";

ReactDOM.render(
  <React.StrictMode>
    <AppTheme>
      {/* CssBaseline configura o tema global */}
      <CssBaseline />
      <App />
    </AppTheme>
  </React.StrictMode>,
  document.getElementById("root")
);
