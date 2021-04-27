import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  };
});

export { useStyles };
