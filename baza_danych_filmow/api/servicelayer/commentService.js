const commentDal=require('../dataaccesslayer/commentDAL');

const getAllComments=()=>{
    //data
    const allComments=commentDal.allComments();
    return (allComments);
}


const addOneComment=(req)=>{
    //data
    const addComment=commentDal.addComment(req);
    return (addComment);
}

const deleteOneComment=(commentId)=>{
    //data
    const deleteComment=commentDal.deleteComment(commentId);
    return (deleteComment);
}


module.exports={getAllComments, addOneComment,deleteOneComment};