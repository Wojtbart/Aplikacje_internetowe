const movieDal=require('../dataaccesslayer/movieDAL');

const getAllMovies=()=>{
    //data
    const allMovies=movieDal.allMovies();
    return (allMovies);
}

const getOneMovie=(movieId)=>{
    //data
    const OneMovie=movieDal.oneMovie(movieId);
    return (OneMovie);
}

const addOneMovie=(req)=>{
    //data
    const addMovie=movieDal.addMovie(req);
    return (addMovie);
}

const deleteOneMovie=(movieId)=>{
    //data
    const deleteMovie=movieDal.deleteMovie(movieId);
    return (deleteMovie);
}

const updateOneMovie=(req)=>{
    //data
    const updateMovie=movieDal.updateMovie(req);
    return (updateMovie);
}


module.exports={getAllMovies,getOneMovie,addOneMovie,deleteOneMovie,updateOneMovie};