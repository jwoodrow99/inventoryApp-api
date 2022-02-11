require('dotenv').config();
const mongoose = require('mongoose');

async function connect(database = process.env.MONGO_DATABASE, host = process.env.MONGO_HOST, port = process.env.MONGO_PORT){
    try {
        await mongoose.connect(`mongodb://${host}:${port}/${database}`,{useNewUrlParser:true});
        console.log(`Connected to database ${host} at ${port}:${database}!`);
    } catch(error) {
        console.log('Error occured :(', error);
    }
}

async function disconnect(){
    await mongoose.connection.close();
}

module.exports = {
    connect,
    disconnect
};