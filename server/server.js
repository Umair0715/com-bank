const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const connectDB = require('./utils/db');
const path = require('path');

connectDB();

app.use(express.json());

app.use('/api' , require('./routes/userRoutes'));

app.use(express.static(path.join(__dirname , '../client/build')))
app.get('/*' , (req ,res) => {
   res.sendFile(path.resolve(__dirname , '../client/build/index.html'))
})

const PORT = process.env.PORT || 4000;
app.listen(PORT , () => console.log(`Server is listening on port ${PORT}`))