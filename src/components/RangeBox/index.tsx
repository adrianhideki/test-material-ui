import Box, { BoxProps } from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useStyles } from "./styles";
import { withStyles } from "@material-ui/core/styles";

export type RangeBoxProps = {
  label: string;
} & BoxProps;

const RangeBox = ({ label, ...props }: RangeBoxProps) => {
  const classes = useStyles();
  const ValidationTextField = withStyles({
    root: {
      "& input": {
        borderWidth: 1,
        padding: "5px",
      },
      margin: "2px",
    },
  })(TextField);

  return (
    <Box className={classes.root} {...props}>
      <Typography className={classes.label}>{label}</Typography>

      <ValidationTextField
        className={classes.input}
        variant="outlined"
        fullWidth
      />
      <ValidationTextField
        className={classes.input}
        variant="outlined"
        fullWidth
      />
    </Box>
  );
};

export default RangeBox;
