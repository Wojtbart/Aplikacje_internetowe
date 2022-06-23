import React from 'react';
import {AppBar, Toolbar, Typography, Button, withStyles} from '@material-ui/core';

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
        {getMenuButtons()}
      </Typography>
      <div className={classes.flex} />
    </Toolbar>
  </AppBar>
);
const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Dodaj Post",
    href: "/addPost",
  },
  {
    label: "Posty",
    href: "/posts",
  },
];

const getMenuButtons = () => {
  return headersData.map(({ label, href }) => {
    return (
      <Button
        {...{
          key: label,
          color: "inherit",
          href: href,
          
        }}
      >
        {label}
      </Button>
    );
  });
};

export default  withStyles(styles)(AppHeader);