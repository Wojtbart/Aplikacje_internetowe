
import React, { Component, Fragment,useState } from 'react';
import {withStyles,Card,CardContent,CardActions,Modal,Button,TextField} from '@material-ui/core';

import { Form, Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';
import { useNavigate, Route, Navigate, Link,useParams, useLocation,Routes,useSearchParams } from 'react-router-dom';
import {
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


const styles = theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    width: '90%',
    maxWidth: 500,
  },
  modalCardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
});

class GetOnePost extends React.Component {
// const GetOnePost = ({ location,match }) =>{
  // constructor
  // const [product, setProduct] = useState({});
  // const query = new URLSearchParams(location.search).get('sound');
  // console.log(location.search);
  constructor(props) {
    super(props);
    console.log("props"+props)
    console.log("props"+this.props)
    console.log(props.match)
    console.log(props.location)
  }
// componentDidMount() {
//   // const { id } = this.props.match.params;
//   // this.props.fetchPost(id);
//   // console.log(id);
  
// }

// // render(){
//   console.log("witam");
//   // const [searchParams, setSearchParams] = useSearchParams();
//   // console.log(searchParams,setSearchParams)
//   // const { posty } = this.props;
//   const search = this.props;
// //   const name = new URLSearchParams(search).get('name');
//   console.log(search)
  // console.log(id);
  // console.log(posty);
  render(){

 
return(<div>siema</div>);
}

}      
      
// }
  

export default  GetOnePost;