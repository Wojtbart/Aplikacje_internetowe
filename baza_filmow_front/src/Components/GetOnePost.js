
import React from 'react';
import {withStyles, List} from '@material-ui/core';
import { compose } from 'recompose';
import { useParams } from 'react-router-dom';
import { IconButton,Paper} from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StarRating from "../Components/StarRating";
import { FormControl,InputLabel,Input,FormHelperText } from '@mui/material';
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';

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
const API = process.env.REACT_APP_API || 'http://localhost:3000';

class GetOnePoste extends React.Component {
// const GetOnePost = ({ location,match }) =>{
  // constructor
  // const [product, setProduct] = useState({});
  // const query = new URLSearchParams(location.search).get('sound');
  // console.log(location.search);

  
  constructor(props) {
    super(props);
    console.log("props"+props)
    console.log("props"+this.props)
    console.log("props"+props.name)
    console.log(props.match)
    console.log(props.location)
    
  }
  state = {
    loading: true,
    posty: [],
    error: null,
  };

  componentDidMount() {
    this.getPost();
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
      console.log(body)
      return await response.json();
    } catch (error) {
      console.error(error);

      this.setState({ error });
    }
  }


  async getPost() {
    this.setState({ loading: false, posty: (await this.fetch('get', '/6')) || [] });
    console.log('jestem w getPosts');
  }
// componentDidMount() {
//   // const { id } = this.props.match.params;
//   // this.props.fetchPost(id);
//   // console.log(id);
  
// componentDidMount() {
//   this.getPost();
// }

// async getPost() {
//   this.setState({ loading: false, posty: (await this.fetch('get', '/6')) || [] });
//   console.log('jestem w getPost w getone');
// }
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
    let messages=this.state.posty
    console.log(messages);
    console.log(this.state.posty.message)
 
  return(<div>siems</div>);
}



}   


const state = {
  loading: true,
  posty: [],
  error: null,
};

async function fetch(method, endpoint, body) {
  
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
    console.log(body)
    return await response.json();
  } catch (error) {
    console.error(error);

    this.setState({ error });
  }
}

 async function componentDidMount() {
  // this.setState({ loading: false, posty: (await this.fetch('get', '/6')) || [] });
  let xd=await this.fetch('get', '/6');
  console.log("xd"+xd)
 }





// async fsdaunction  getPost() {
//   const xd=await fetch('get', '/6');
//   console.log('jestem w getPosts'+ xd);
// }

function handleSubmit  (event)  {
  console.log(event.target[0].value);

  let data={
      nazwa :event.target.filmName.value,
      rezyser :event.target.director.value,
      rok_produkcji :event.target.productionYear.value,
      oceniany :event.target.howRated.value,
      czas_trwania_w_min :event.target.durationTime.value,
      plakat:"brak", //tu coś trzeba
      opis:event.target.description.value,
      od_ilu_lat:event.target.howManyYears.value,
      oceny:"brak", //tu coś trzeba
      gatunek: event.target.genre.value
  }

  fetch('http://localhost:3000/', {
      method: 'POST',
      headers:{
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      }).then((response) => response.json())
        .then((json) => {
            console.log(json)
            this.props.history.push("/posts");
      })
      .catch((error) =>  console.log(error.message));
  
}



 const GetOnePost  = () => {
  const [post, setPost] = React.useState(null);

  const { id } = useParams()
  console.log(id)
  const baseURL = `http://localhost:3000/${id}`;

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  function updatePost(event) {
    // event.preventDefault();
    console.log(event.target);
    let data={
      nazwa :event.target.filmName.value,
      rezyser :event.target.director.value,
      rok_produkcji :event.target.productionYear.value,
      oceniany :event.target.howRated.value,
      czas_trwania_w_min :event.target.durationTime.value,
     // plakat:"brak", //tu coś trzeba
      opis:event.target.description.value,
      od_ilu_lat:event.target.howManyYears.value,
     // oceny:"brak", //tu coś trzeba
      gatunek: event.target.genre.value
  }
  console.log(data);
  let obj={};
  for (const [key, value] of Object.entries(data)) {
    if(!value)continue;
    else obj[key]=value;
  }
  console.log(obj);


    axios
      .put(`${baseURL}`, obj)
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return null;
  
  // componentDidMount()
  // getPost()
  // console.log(post.message.filmName.value)

  // obj={

  // }
  // console.log(obj)
  return(
  
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
              <TableCell align="center">Opis</TableCell>
              <TableCell align="center">Oceny</TableCell>
            </TableRow>
          </TableHead>

          <TableBody style={{ textDecoration: 'none !important' }}>             
            {
              
                
                <TableRow 
                  key={post.message.id} 
                  sx={{ '&:last-child td, &:last-child th': { border: 0 },'td,th':{textDecoration:'none !important'} }} 
                  
                >
                
                  <TableCell component="th" scope="row" style={{ textDecoration: 'none !important' }} > { post.message.id}</TableCell>
                  <TableCell align="center"  button style={{textDecoration: 'underline !important'}}
                    >{post.message.nazwa}</TableCell> 
                  <TableCell align="center">{post.message.rok_produkcji}</TableCell>
                  <TableCell align="center">{post.message.gatunek}</TableCell>
                  <TableCell align="center">{post.message.rezyser}</TableCell>
                  <TableCell align="center">{post.message.czas_trwania_w_min}</TableCell>
                  <TableCell align="center">{post.message.oceniany}</TableCell>
                  <TableCell align="center">{post.message.od_ilu_lat}</TableCell>
                  <TableCell align="center">{post.message.opis}</TableCell>
                  <TableCell align="center"><StarRating></StarRating></TableCell>
                  <IconButton  color="inherit">
                    <EditIcon />
                  </IconButton>
                </TableRow>       
            }
          </TableBody>

        </Table>
      </TableContainer>

    } 
    {
      <div class="card">
            <h1 class="titleForm">Wpisz wartosci jakie chcesz zmienić</h1>
                <form onSubmit={updatePost} class="card-form">

                <div class="input2">
                    <input type="text" class="input-field2"  name="filmName" />
                    <label class="input-label2">Nazwa filmu</label>
			    </div>
                <div class="input2">
                    <input type="text" class="input-field2"  name="productionYear" />
                    <label class="input-label2">Rok produkcji</label>
			    </div>
                <div class="input2">
                    <input type="text" class="input-field2"  name="director" />
                    <label class="input-label2">Rezyser</label>
			    </div>
                <div class="input2">
                    <input type="text" class="input-field2"  name="genre" />
                    <label class="input-label2">Gatunek</label>
			    </div>
                <div class="input2">
                    <input type="text" class="input-field2"  name="description" />
                    <label class="input-label2">Krótki opis filmu</label>
			    </div>
                <div class="input2">
                    <input type="text" class="input-field2"  name="howRated" />
                    <label class="input-label2">Jak oceniany</label>
			    </div>
                <div class="input2">
                    <input type="number" step="1" class="input-field2"  name="durationTime" />
                    <label class="input-label2">Czas trwania w min</label>
			    </div>
                <div class="input2">
                    <input type="text" class="input-field2" name="howManyYears" />
                    <label class="input-label2">Od ilu lat</label>
			    </div>
                <div class="action">
				    <button class="action-button" type="submit">Dodaj film</button>
			    </div>
            </form>
          </div>
    
    
    }

  </List>
 
  
  
  )
  
}

export default  compose(withStyles(styles))(GetOnePost);