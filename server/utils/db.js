const mongoose = require('mongoose');

const DB = process.env.DATABASE_URI;

const connectDB = () => {
    mongoose.connect(DB , {
        useUniFiedTopology : true ,
        useNewUrlParser : true 
    }).then(() => console.log('Database connected.'))
    .catch(err => console.log('Database connection failed.' , err ))
}

module.exports = connectDB ;