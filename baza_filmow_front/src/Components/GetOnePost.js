
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
import StarRating from "../Components/StarRating";
import ErrorSnackbar from '../Components/ErrorSnackbar';


const  GetOnePost= (row) =>(
        
      <Fragment>
        <Typography variant="h4">Wybrany film</Typography>

        {!this.row || this.row.length  > 0 ? (
          <Paper elevation={1}   >
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
                            <TableCell align="center" button style={{textDecoration: 'underline !important'}}
                            onClick={() => this.getPost(row)} component={Link} to={`/${row.id}`}>{row.nazwa}</TableCell> 
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
        ) : (
          !this.row && <Typography variant="subtitle1">Brak filmow</Typography>
        )}

        <Fab
          color="secondary"
          aria-label="add"
        //   className={classes.fab}
          onClick={() => this.savePost()}
          // component={Link}
          // to="/new"
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

  export default  GetOnePost;