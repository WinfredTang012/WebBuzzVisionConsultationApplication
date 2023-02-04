import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';



const Loading = ({ classes }) => (
  <div className={classes.progress}>
    <CircularProgress size={50} />
  </div>
);

export default withStyles(Loading);
