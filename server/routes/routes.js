import express from 'express';
import {saveSentEmails,getEmails} from '../controllers/email-controller.js';

const route =express.Router();

route.post('/save',saveSentEmails);
route.get('/emails/:type',getEmails);
route.post('/save-draft',saveSentEmails);

export default route;