// import logo from './logo.svg';
// import React, { Component } from "react";
import React, { Fragment } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {CssBaseline, withStyles} from '@material-ui/core';
import AppHeader from './Components/AppHeader';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import PostsManager from './Pages/PostManager';
import AddPost from './Pages/AddPost';
import GetOnePost from './Components/GetOnePost';

//mozna usunac index.css App.css oraz logo.svg
// class App extends Component {
//   render() {
//     // ...
//   }
// }

// function App() extends Component {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const styles = theme => ({
  main: {
    padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2),
    },
  },
});

const App = ({ classes }) => (
  <Fragment>
    <CssBaseline />
    <AppHeader />
    <main className={classes.main}>
    <BrowserRouter>
    <Routes>

      <Route exact path="/" element={<Home />} />
      <Route exact path="/addPost" element={<AddPost />} />
      <Route exact path="/posts/*" element={<PostsManager/>} />
      <Route exact path="/posts/:id" element={<GetOnePost/>} />

    </Routes>
    </BrowserRouter>
    </main>
  </Fragment>
);
export default withStyles(styles)(App);
//export default App;
