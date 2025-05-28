import express from "express"
import { protect } from "../utils/authMidlleware.js"
// import { allUsers, loginUser, registerUser } from "../controllers/user.controller.js";
import { allMessage, sendMessage } from "../controllers/message.controller.js";

const Router= express.Router();

Router.route("/").post(protect,sendMessage)
Router.route("/:chatId").get(protect,allMessage)







export default Router