const movieService=require('../servicelayer/commentService');

const  getAllMovies= async(req,res)=>{
    try{
        const allMovies= await movieService.getAllMovies();
        res.status(201).json({status: 'OK', message: allMovies});
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Wystąpił bład w trakcie wykonywanie zapytania"
        });
    } 
}

const getOneMovie=async (req,res)=>{

    try{
        const oneMovie= await movieService.getOneMovie(req.params.movieId);
        res.status(201).json({status: 'OK', message: oneMovie});
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Wystąpił bład w trakcie wykonywanie zapytania"
        });
    }

}
const deleteOneMovie= async (req,res)=>{
    try{
        const deleteMovie= await movieService.deleteOneMovie(req.params.movieId);
        res.status(201).json({status: 'OK', message: deleteMovie+"Poprawnie usunięto film"});
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Wystąpił bład w trakcie wykonywanie zapytania"
        });
    }
}

const addOneMovie=async(req,res)=>{
    try{
        const addMovie= await movieService.addOneMovie(req);
        res.status(201).json({status: 'OK', message: "Poprawnie dodano film"});
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Wystąpił bład w trakcie wykonywanie zapytania"
        });
    }
}

const updateOneMovie=async (req,res)=>{
    try{
        const updateMovie= await movieService.updateOneMovie(req);
        res.status(201).json({status: 'OK', message: "Poprawnie zmodyfikowano film"});
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Wystąpił bład w trakcie wykonywanie zapytania"
        });
    }
}
module.exports={getAllMovies,getOneMovie,addOneMovie,deleteOneMovie,updateOneMovie};