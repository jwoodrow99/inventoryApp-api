require('dotenv').config();
const address = require('address');
const app = require('./server');
const Database = require('./service/Database');

app.listen(process.env.PORT, async () => {
    await Database.connect();
    console.log(`Server started on port ${process.env.PORT}`);
    console.log(`Avaliable on your local network at ${address.ip()}:${process.env.PORT}`);
});