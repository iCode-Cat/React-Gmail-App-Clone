const express = require('express');
const mongoose = require('mongoose');
const router = require('./Routes/routes');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json())
app.use(cors())

//database connect
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.chn8e.mongodb.net/gmail?retryWrites=true&w=majority`, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        app.listen(8080, () => {
            console.log('Server started on 8080')
        })
    })
    .then(() => console.log('Database connected!'))
    .catch((err) => console.log(err));

//routes
app.use(router)