import mongoose from 'mongoose'; 
const Connection =()=>
{
   
    try {
        mongoose.connect(DB_URI,{useNewUrlParser: true});
        console.log('connected to DB')
    } catch ({error}) {
        console.log('error while connecting with the DB :',error.message);
    }
}

export default Connection;