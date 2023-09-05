import mongoose from 'mongoose';
const Connection =()=>
{
    const DB_URI=`mongodb://unknownred:39vpTaQmLEuK4R07@ac-1v9xcdl-shard-00-00.mk3yv1b.mongodb.net:27017,ac-1v9xcdl-shard-00-01.mk3yv1b.mongodb.net:27017,ac-1v9xcdl-shard-00-02.mk3yv1b.mongodb.net:27017/?ssl=true&replicaSet=atlas-57spmh-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        mongoose.connect(DB_URI,{useNewUrlParser: true});
        console.log('connected to DB')
    } catch ({error}) {
        console.log('error while connecting with the DB :',error.message);
    }
}

export default Connection;