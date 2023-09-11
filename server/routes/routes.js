import express from 'express';
import {saveSentEmails,getEmails} from '../controllers/email-controller.js';

const route =express.Router();

route.post('/save',saveSentEmails);
route.get('emails/:type',getEmails)

export default route;