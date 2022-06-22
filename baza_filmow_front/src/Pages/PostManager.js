import React, { Component, Fragment } from 'react';
import { useNavigate, Route, Navigate, Link,useParams, useLocation,Routes } from 'react-router-dom';
import {
  withStyles,
  Typography,
  Fab,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core';
import { Delete as DeleteIcon, Add as AddIcon } from '@material-ui/icons';
import moment from 'moment';
import { find, orderBy } from 'lodash';
import { compose } from 'recompose';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import "../App.css";
import StarRating from "../Components/StarRating";

import PostEditor from '../Components/PostEditor';
import ErrorSnackbar from '../Components/ErrorSnackbar';
import GetOnePost from '../Components/GetOnePost';

const styles = theme => ({
  posty: {
    marginTop: theme.spacing(2),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  },
});

const API = process.env.REACT_APP_API || 'http://localhost:3000';

class PostsManager extends Component {

    
  state = {
    loading: true,
    posty: [],
    error: null,
  };

  componentDidMount() {
    this.getPosts();
  }

  async fetch(method, endpoint, body) {
    
    try {
      const response = await fetch(`${API}${endpoint}`, {
        method,
        body: body && JSON.stringify(body),
        headers: {
          'content-type': 'application/json',
          accept: 'application/json'
        },
      });
      console.log(response);
      return await response.json();
    } catch (error) {
      console.error(error);

      this.setState({ error });
    }
  }

  async getPosts() {
    // await this.fetch('get', '/')
    this.setState({ loading: false, posty: (await this.fetch('get', '/')) || [] });
    console.log('jestem w getPosts');
  }

  async getPost(post) {
    console.log("jestem w get Post");
    
    
    await this.fetch('get', `/${post.id}`);
    // return <Navigate  to='/6' />
    // this.getPosts()
    // this.renderPostEditor(post.id)
    return <GetOnePost key={post}></GetOnePost>

    //this.setState({ loading: false, posts: (await this.fetch('get', '/')) });
    
  }

  savePost = async (posted) => {
    console.log("jestem w save post")
    if (posted.id) {
      await this.fetch('put', `/${posted.id}`, posted);
    } else {
      await this.fetch('post', '/', posted);
    }

    this.props.history.goBack();
    await this.getPosts();
  }

  async deletePost(post) {
    
    if (window.confirm(`Czy na pewo chcesz usunąć film "${post.nazwa}"`)) {
      await this.fetch('delete', `/${post.id}`);
      await this.getPosts();
    }
  }


  showPost(row) {
    const { classes } = this.props;
    console.log(row)

    return (
      <Fragment>
        <Typography variant="h4">Wybrany film</Typography>

        {/* {!this.state.posts.message || this.state.posts.message.length  > 0 ? ( */}
          <Paper elevation={1} className={classes.posty}  >
            <List>
              {    
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 800 }} aria-label="simple table">

                    <TableHead>
                      <TableRow>
                        <TableCell>Numer filmu</TableCell>
                        <TableCell align="center">Nazwa</TableCell>
                        <TableCell align="center">Rok produkcji</TableCell>
                        <TableCell align="center">Gatunek</TableCell>
                        <TableCell align="center">Reżyser</TableCell>
                        <TableCell align="center">Czas trwania w min</TableCell>
                        <TableCell align="center">Jak oceniany</TableCell>
                        <TableCell align="center">Od ilu lat</TableCell>
                        <TableCell align="center">Oceny</TableCell>
                        {/* <TableCell align="center">Pusto</TableCell> */}
                      </TableRow>
                    </TableHead>

                    <TableBody style={{ textDecoration: 'none !important' }}>             
                      {
                        
                          <TableRow 
                            key={row.id} 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 },'td,th':{textDecoration:'none !important'} }}    
                          >
                            <TableCell component="th" scope="row" style={{ textDecoration: 'none !important' }} > { row.id}</TableCell>
                            {/* <TableCell align="center" button style={{textDecoration: 'underline !important'}}
                            onClick={() => this.getPost(row)} component={Link} to={`/${row.id}`}>{row.nazwa}</TableCell>  */}
                            <TableCell align="center">{row.rok_produkcji}</TableCell>
                            <TableCell align="center">{row.gatunek}</TableCell>
                            <TableCell align="center">{row.rezyser}</TableCell>
                            <TableCell align="center">{row.czas_trwania_w_min}</TableCell>
                            <TableCell align="center">{row.oceniany}</TableCell>
                            <TableCell align="center">{row.od_ilu_lat}</TableCell>
                            <TableCell align="center"><StarRating></StarRating></TableCell>
                            {/* <IconButton onClick={() => this.deletePost(row)} color="inherit">
                              <DeleteIcon />
                            </IconButton> */}
                          </TableRow>
                       
                      }
                    </TableBody>

                  </Table>
                </TableContainer>
              }
              
            </List>
          </Paper>
        {/* ) : (
          !this.state.loading && <Typography variant="subtitle1">Brak filmow</Typography>
        )} */}

        <Fab
          color="secondary"
          aria-label="add"
          className={classes.fab}
          onClick={() => this.savePost()}
          // component={Link}
          // to="/new"
        >
          <AddIcon />
        </Fab>

        <Routes>
          <Route exact path="/:id" render={this.renderPostEditor} />
        </Routes>

        {/* <Routes>
          <Route exact path="/:id" render={this.getPost(6)} />
        </Routes> */}

        {
          this.state.error && (
          <ErrorSnackbar
            onClose={() => this.setState({ error: null })}
            message={this.state.error.message}
          />
          )
        }
        
      </Fragment>
    );
  }

  renderPostEditor = ({ match: { params: { id } } }) => {
    console.log('jestem tu');
    if (this.state.loading) return null;
    const post = find(this.state.posty.message, { id: Number(id) });

    // if (!post && id !== 'new') return <Navigate to="/posts" />;

    return <PostEditor post={post} onSave={this.savePost} />;
  };


  renderPostEditorek = (post) => {
    console.log('jestem tu');
    // if (this.state.loading) return null;
    // const post = find(this.state.posty.message, { id: Number(id) });

    // if (!post && id !== 'new') return <Navigate to="/posts" />;

    return <PostEditor  onSave={this.savePost} />;
  };

 

  render() {
    
    const { classes } = this.props;
    let message=this.state.posty.message;
    console.log(message)
    return (
      <Fragment>
        <Typography variant="h4">Lista filmów</Typography>

        { !this.state.posty.message || this.state.posty.message.length  > 0 ? (
          <Paper elevation={1} className={classes.posty}>
            <List>
              {    
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 800 }} aria-label="simple table">

                    <TableHead>
                      <TableRow>
                        <TableCell>Numer filmu</TableCell>
                        <TableCell align="center">Nazwa</TableCell>
                        <TableCell align="center">Rok produkcji</TableCell>
                        <TableCell align="center">Gatunek</TableCell>
                        <TableCell align="center">Reżyser</TableCell>
                        <TableCell align="center">Czas trwania w min</TableCell>
                        <TableCell align="center">Jak oceniany</TableCell>
                        <TableCell align="center">Od ilu lat</TableCell>
                        <TableCell align="center">Oceny</TableCell>
                        {/* <TableCell align="center">Pusto</TableCell> */}
                      </TableRow>
                    </TableHead>

                    <TableBody style={{ textDecoration: 'none !important' }}>             
                      {
                        orderBy(this.state.posty.message, [ 'id'], [ 'asc']).map(row => (
                          <TableRow 
                            key={row.id} 
                            sx={{ '&:last-child td, &:last-child th': { border: 0 },'td,th':{textDecoration:'none !important'} }} 
                            
                          >
                            <TableCell component="th" scope="row" style={{ textDecoration: 'none !important' }} > { row.id}</TableCell>
                            <TableCell align="center" button style={{textDecoration: 'underline !important'}}
                            onClick={() => this.getPost(row)} component={Link} to={`/${row.id}`}>{row.nazwa}</TableCell> 
                            <TableCell align="center">{row.rok_produkcji}</TableCell>
                            <TableCell align="center">{row.gatunek}</TableCell>
                            <TableCell align="center">{row.rezyser}</TableCell>
                            <TableCell align="center">{row.czas_trwania_w_min}</TableCell>
                            <TableCell align="center">{row.oceniany}</TableCell>
                            <TableCell align="center">{row.od_ilu_lat}</TableCell>
                            <TableCell align="center"><StarRating></StarRating></TableCell>
                            <IconButton onClick={() => this.deletePost(row)} color="inherit">
                              <DeleteIcon />
                            </IconButton>
                          </TableRow>
                        ))
                      }
                    </TableBody>

                  </Table>
                </TableContainer>
              }
              
            </List>
          </Paper>
        ) : (
          !this.state.loading && <Typography variant="subtitle1">Brak filmow</Typography>
        )}

        {/* const handleRent = () => {
        axios.patch('http://localhost:3001/movies', {
            id: item.id
        }, {withCredentials: true}).then(response => {
            onClick(item.id)
        }).catch(reason => {
            alert('Sorry, you need to be logged in')
        })
    } */}

        <Fab
          color="secondary"
          aria-label="add"
          className={classes.fab}
          onClick={() => this.renderPostEditorek()}
          component={Link}
          to="/new"
        >
          <AddIcon />
        </Fab>

        <Routes>
          <Route exact path="/:id" render={this.renderPostEditor} />
        </Routes>

        {
          this.state.error && (
          <ErrorSnackbar
            onClose={() => this.setState({ error: null })}
            message={this.state.error.message}
          />
          )
        }
        
      </Fragment>
    );
  }
}

export default compose(withStyles(styles))(PostsManager);
