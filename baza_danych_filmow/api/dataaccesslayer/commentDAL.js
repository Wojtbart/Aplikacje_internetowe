const sequelize = require('../../secrets/database').sequelize;
const Comment = require('../models/comments');

const allComments= async () =>{
    var comments={};

    try {
        comments= await Comment.findAll(); 
        console.log(comments.every(user => user instanceof Comment)); // true
    } catch (err) {
       console.log(err)    
    }
    return comments;
};


const deleteComment=  async (commentId) =>{
    const comment= await Comment.findOne({ where: { id: commentId } })
    return comment.destroy();
};

const addComment=  async ( req ) =>{
    let {komentarz,id_filmu}=req.body;
    const comment= await Comment.create(
        {komentarz, id_filmu })
    return comment;
};


module.exports={allComments,deleteComment,addComment};


