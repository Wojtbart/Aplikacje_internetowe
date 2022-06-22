import React from 'react';
import {AppBar, Toolbar, Typography, Button, withStyles, Link as RouterLink} from '@material-ui/core';
import { BrowserRouter,Route } from 'react-router-dom';
import AddPost from '../Pages/AddPost'
import Home from '../Pages/Home'
import PostsManager from '../Pages/PostManager'

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
        {/* <BrowserRouter>
            1<Route exact path="/" element={<Home />} />
           2 <Route exact path="/addPost" element={<AddPost />} />
             3 <Route exact path="/posts" element={<PostsManager/>} />

        </BrowserRouter> */}
        {getMenuButtons()}
      </Typography>
      <div className={classes.flex} />
      {/* <Button color="inherit" component={Link} to="/posts">Posts Manager</Button> */}
      {/* <Button color="inherit" component={Link} to="/">Home</Button> */}
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