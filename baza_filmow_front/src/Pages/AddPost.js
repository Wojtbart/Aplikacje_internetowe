import React, { Component} from 'react';
import {withStyles} from '@material-ui/core';
import { compose } from 'recompose';

import "../App.css";

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

class AddPost extends Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
          id: props.id,
          firstName: "",
          lastName: ""
        };
    }

    handleSubmit = (event) => {
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

        fetch('http://localhost:3000/movie', {
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
    


    render()
    { 
            return(
            <div class="carde">
            <h1 class="titleForm">Nowy Film</h1>
                <form onSubmit={this.handleSubmit} class="card-form">

                <div class="input">
                    <input type="text" class="input-field"  name="filmName" ref={node => (this.inputNode = node)}/>
                    <label class="input-label">Nazwa filmu</label>
			    </div>
                <div class="input">
                    <input type="text" class="input-field"  name="productionYear" ref={node => (this.inputNode = node)}/>
                    <label class="input-label">Rok produkcji</label>
			    </div>
                <div class="input">
                    <input type="text" class="input-field"  name="director" ref={node => (this.inputNode = node)}/>
                    <label class="input-label">Rezyser</label>
			    </div>
                <div class="input">
                    <input type="text" class="input-field"  name="genre" ref={node => (this.inputNode = node)}/>
                    <label class="input-label">Gatunek</label>
			    </div>
                <div class="input">
                    <input type="text" class="input-field"  name="description" ref={node => (this.inputNode = node)}/>
                    <label class="input-label">Krótki opis filmu</label>
			    </div>
                <div class="input">
                    <input type="text" class="input-field"  name="howRated" ref={node => (this.inputNode = node)}/>
                    <label class="input-label">Jak oceniany</label>
			    </div>
                <div class="input">
                    <input type="number" step="1" class="input-field"  name="durationTime" ref={node => (this.inputNode = node)}/>
                    <label class="input-label">Czas trwania w min</label>
			    </div>
                <div class="input">
                    <input type="text" class="input-field" name="howManyYears" ref={node => (this.inputNode = node)}/>
                    <label class="input-label">Od ilu lat</label>
			    </div>
                <div class="action">
				    <button class="action-button" type="submit">Dodaj film</button>
			    </div>
            </form>
          </div>
        );
    }
}

export default compose(withStyles(styles))(AddPost);