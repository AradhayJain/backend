import asyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";
import * as ai from "../utils/gemini.js";


export const getGemini = asyncHandler(async (req, res) => {
    try{
        const prompt=req.query.prompt;
        const result = await ai.generateResult(prompt);
        res.json(result);
    }catch(err){
        res.status(400);
        throw new Error(err);
    }
})

