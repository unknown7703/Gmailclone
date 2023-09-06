import express from 'express';
import {saveSentEmails} from '../controllers/email-controller.js';

const route =express.Router();

route.post('/save',saveSentEmails);

export default route;