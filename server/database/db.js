import mongoose from 'mongoose'; 
import 'dotenv/config';
const Connection =()=>
{
    const DB_URI=process.env.DB_URI;
    try {
        mongoose.connect(DB_URI,{useNewUrlParser: true});
        console.log('connected to DB')
    } catch ({error}) {
        console.log('error while connecting with the DB :',error.message);
    }
}

export default Connection;