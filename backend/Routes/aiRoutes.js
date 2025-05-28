import express from "express"
import { protect } from "../utils/authMidlleware.js"
import { getGemini } from "../controllers/ai.controller.js"

const Router = express.Router()

Router.route('/get-result').get(protect,getGemini)


export default Router
