const commentService=require('../servicelayer/commentService');

const  getAllComments= async(req,res)=>{
    try{
        const allComments= await commentService.getAllComments();
        res.status(201).json({status: 'OK', message: allComments});
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Wystąpił bład w trakcie wykonywanie zapytania"
        });
    } 
}


const deleteOneComment= async (req,res)=>{
    try{
        const deleteComment= await commentService.deleteOneComment(req.params.commentId);
        res.status(201).json({status: 'OK', message: deleteComment+"Poprawnie usunięto komentasz"});
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Wystąpił bład w trakcie wykonywanie zapytania"
        });
    }
}

const addOneComment=async(req,res)=>{
    try{
        const addComment= await commentService.addOneComment(req);
        res.status(201).json({status: 'OK', message: "Poprawnie dodano komentarz"});
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Wystąpił bład w trakcie wykonywanie zapytania"
        });
    }
}


module.exports={addOneComment,deleteOneComment,getAllComments};