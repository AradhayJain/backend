import asyncHandler from "express-async-handler";
import {Message} from "../models/messageModel.js";
import {User} from "../models/userModel.js";
import {Chat} from "../models/chatModel.js";

export const sendMessage = asyncHandler(async (req,res)=>{
    const {content,chatId} = req.body;
    if(!content || !chatId){
        res.status(400);
        throw new Error("Invalid Data");
    }
    var newMessage = new Message({
        
        sender:req.user._id,
        content:content,
        chat:chatId
    })
    try{
        var message = await Message.create(newMessage);
        message=await message.populate("sender","name pic")
        message=await message.populate("chat")
        message=await User.populate(message,{path:"chat.users",select:"name pic email"});
        await Chat.findByIdAndUpdate(req.body.chatId,{latestMessage:message});
        res.status(201).json(message);
    }catch(err){
        res.status(400);
        throw new Error(err);
    }

})

export const allMessage = asyncHandler(async (req,res)=>{
    try{
        const messages = await Message.find({chat:req.params.chatId}).populate("sender","name pic email").populate("chat");
        res.status(200).json(messages);
    }
    catch(err){
        res.status(400);
        throw new Error(err);
    }
})

