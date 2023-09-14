import express from "express";
import { saveSentEmails, getEmails,moveEmailsToBin,toggleStar } from "../controllers/email-controller.js";

const route = express.Router();

route.post("/save", saveSentEmails);
route.get("/emails/:type", getEmails);
route.post("/save-draft", saveSentEmails);
route.post("/bin", moveEmailsToBin);
route.post("/starred",toggleStar);
export default route;
