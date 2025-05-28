import express from "express"
import { protect } from "../utils/authMidlleware.js"
import { accessChat, addToGroup, createGroupChat, fetchChats, removeFromGroup, renameGroup } from "../controllers/chat.controller.js";

const Router=express.Router()

Router.route('/').post(protect,accessChat)
Router.route("/").get(protect, fetchChats);
Router.route("/group").post(protect, createGroupChat);
Router.route("/rename").put(protect, renameGroup);
Router.route("/groupremove").put(protect, removeFromGroup);
Router.route("/groupadd").put(protect, addToGroup);
export default Router