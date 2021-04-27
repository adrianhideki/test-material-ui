import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0px",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "start",
  },
  input: {
    display: "flex",
    minWidth: "300px",
  },
}));

export { useStyles };
