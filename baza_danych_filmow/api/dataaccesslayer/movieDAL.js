const sequelize = require('../../secrets/database').sequelize;
const Movie = require('../models/movie');

const allMovies= async () =>{
    var movies={};

    try {
        movies= await Movie.findAll(); 
        console.log(movies.every(user => user instanceof Movie)); // true
    } catch (err) {
       console.log(err)    
    }
    return movies;
};

const oneMovie=  async (movieId) =>{
    const movie= await Movie.findOne({ where: { id: movieId } })
    return movie;
};

const deleteMovie=  async (movieId) =>{
    const movie= await Movie.findOne({ where: { id: movieId } })
    return movie.destroy();
};

const addMovie=  async ( req ) =>{
    let {nazwa, rok_produkcji,czas_trwania_w_min,opis, gatunek, od_ilu_lat, oceniany, rezyser, plakat, oceny}=req.body;
    const movie= await Movie.create(
        {nazwa, rok_produkcji,czas_trwania_w_min,opis, gatunek, od_ilu_lat, oceniany, rezyser, plakat, oceny })
    return movie;
};

const updateMovie = async (req ) =>{
    // let {nazwa, rok_produkcji,czas_trwania_w_min,opis, gatunek, od_ilu_lat, oceniany, rezyser, plakat, oceny}=req.body;
    // console.log(req.params.movieId);
    // const movie= await Movie.update(
    //     {nazwa, rok_produkcji,czas_trwania_w_min,opis, gatunek, od_ilu_lat, oceniany, rezyser, plakat, oceny },{
    //         where: {id:req.params.movieId}
    // });
    var movie={};
    try {
        // movies= await Movie.findAll(); 
        // console.log(movies.every(user => user instanceof Movie)); // true
        let {nazwa, rok_produkcji,czas_trwania_w_min,opis, gatunek, od_ilu_lat, oceniany, rezyser, plakat, oceny}=req.body;
    console.log(req.params.movieId);
    movie= await Movie.update(
        {nazwa, rok_produkcji,czas_trwania_w_min,opis, gatunek, od_ilu_lat, oceniany, rezyser, plakat, oceny },{
            where: {id:req.params.movieId}
    });
    } catch (err) {
       console.log(err)    
    }

    return movie;
};



// const oneCountry= async (countryId) =>{

//     const sql = `SELECT * FROM country WHERE Code='${countryId}' `;
//     let r = {};
//     try {
//         const [rows] = await db.query(sql);
//         r = rows;
//     } catch (err) {
//         console.error(err);
//     }
//     // console.log(r);
//     return r;
// }

module.exports={allMovies,oneMovie,deleteMovie,addMovie,updateMovie};


