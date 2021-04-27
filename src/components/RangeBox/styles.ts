import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    margin: "5px",
    display: "flex",
  },
  label: {
    marginRight: theme.spacing(1),
  }
}));

export { useStyles };
