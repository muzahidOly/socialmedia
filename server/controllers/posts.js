import mongoose from "mongoose";
import PostMessage from "../models/postMessege.js";

export const getPost=async (req,res)=>{   
    
    
    console.log("Post Retrived");
    try {
        const postMesseges=await PostMessage.find(); 
        res.status(200).json(postMesseges);
    } 
    catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost=async(req,res)=>{
    const post=req.body;
    console.log("Post Created");
    const newPost=new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);  
    } catch (error) {   
        res.status(409).json({message:error.message});

    }
}

export const updatePost=async(req,res)=>{
    const {id:_id}= req.params;
    const post=res.body;

   
    if (!mongoose.Types.ObjectId.isValid(_id))
    
        return res.status(404).send('No post with that ID');
        console.log("Updated!")
    const updatedPost=await PostMessage.findByIdAndUpdate(_id,post,{new:true}); 
    res.json(updatedPost);
    
}

export const deletePost=async(req,res)=>{
    const{id}=req.params;
    console.log("Post Deleted");
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with that ID');
   
     await PostMessage.findByIdAndDelete(id);

    res.json({message:'Post deleted successfully'});
}

export const likePost=async(req,res)=>{
    const{id}=req.params;
    console.log("like updated");
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with that ID');
   
     const post= await PostMessage.findById(id);

     const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}

export const dislikePost=async(req,res)=>{
    const{id}=req.params;
    console.log("dislike updated");
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send('No post with that ID');
   
     const post= await PostMessage.findById(id);

     const updatedPost = await PostMessage.findByIdAndUpdate(id, { dislikeCount: post.dislikeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}

