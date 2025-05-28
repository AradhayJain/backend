import express from "express"
import { allUsers, loginUser, registerUser } from "../controllers/user.controller.js";
import { protect } from "../utils/authMidlleware.js";

const Router= express.Router();

Router.route('/').post(registerUser).get(protect,allUsers)
Router.route('/login').post(loginUser)


export default Router