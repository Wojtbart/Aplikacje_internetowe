import React from 'react';
import {AppBar, Toolbar, Typography, Button, withStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
  flex: {
    flex: 1,
  },
};

const AppHeader = ({classes}) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">
        Baza danych filmów
      </Typography>
      <div className={classes.flex} />
      {/* <Button color="inherit" component={Link} to="/posts">Posts Manager</Button> */}
      {/* <Button color="inherit" component={Link} to="/">Home</Button> */}
    </Toolbar>
  </AppBar>
);


export default  withStyles(styles)(AppHeader);