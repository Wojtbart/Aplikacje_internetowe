
import React from 'react';
import {withStyles, List} from '@material-ui/core';
import { compose } from 'recompose';
import { useParams } from 'react-router-dom';
import { Paper} from '@material-ui/core';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import StarRating from "../Components/StarRating";
import axios from "axios";

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

 const GetOnePost  =   () => {
  const [post, setPost] = React.useState(null);
  const [comment, setComment] = React.useState(null);

  const { id } = useParams()
  const baseURL = `http://localhost:3000/movie/${id}`;
  const baseURL2= `http://localhost:3000/comments`;

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data);
    });
    axios.get(baseURL2).then((response) => {
      console.log(response.data.message)
      setComment(response.data);
    });
  }, []);

  function updatePost(event) {
    let data={
      nazwa :event.target.filmName.value,
      rezyser :event.target.director.value,
      rok_produkcji :event.target.productionYear.value,
      oceniany :event.target.howRated.value,
      czas_trwania_w_min :event.target.durationTime.value,
      opis:event.target.description.value,
      od_ilu_lat:event.target.howManyYears.value,
      gatunek: event.target.genre.value
  }

  console.log("updatePost"+data);

  let obj={};
  for (const [key, value] of Object.entries(data)) {
    if(!value)continue;
    else obj[key]=value;
  }

  axios
    .put(`${baseURL}`, obj)
    .then((response) => {
      setPost(response.data);
    });
  }

  async function deletePost(post) { 
    if (window.confirm(`Czy na pewo chcesz usunąć kliknięty komentarz?`)) {
      axios.delete(`http://localhost:3000/comments/${post.id}`)
      .then(response => {
        window.location.reload();
      }).catch(error => {
          console.log("Wystąpił błąd przy usuwaniu")
      })
    }
  }

  function addComment(event) {
    let dataChange={
      komentarz :event.target.submitFormik.value,
      id_filmu :id,
  }
  console.log(dataChange);
  axios
    .post(`${baseURL2}`, dataChange)
    .then((response) => {
      setPost(response.data);
    });
  }

  if (!post) return null;
  if (!comment) return null;
  
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
                  <button class="action-button" type="submit">Zmień dane filmu</button>
                </div>
              </form>
            </div>
      }
      {
        <form onSubmit={addComment}  class="commentForm">
          <h1>Skomentuj ten film</h1>
          <textarea class="comment" name="submitFormik"></textarea>
          <br/>
          <button class="action-button" type="submit">Wyślij</button>
        </form>
      }
      {
        <div>
          <h1>Sekcja komentarzy</h1>
          <table class="fixed_headers">
            <thead class="commentThead">
              <tr class="commentTr">
                <th class="commentTh">Numer</th>
                <th class="commentTh">Komentarz</th>
              </tr>
            </thead>
            {
              comment.message.filter(row => row.id_filmu == id).map(row =>(
                <tbody class="commentTbody">
                  <tr class="commentTr">
                    <td class="commentTd" onClick={() => deletePost(row)}>{row.id}</td>
                    <td class="commentTd">{row.komentarz}</td>
                  </tr>
                </tbody>
              ))
            }
          </table>   
        </div>
      }
    </List>
  ) //return render
} //koniec GetOnePost

export default  compose(withStyles(styles))(GetOnePost);