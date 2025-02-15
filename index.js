require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(res => {
    console.log(`DB connected`);
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

// Routes   
const registerRoute = require('./routes/register')
const loginRoute = require('./routes/login')
const peopleRoute = require('./routes/people')
const adminRoute = require('./routes/admin')
const userRoute = require('./routes/user')

app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/people', peopleRoute)
app.use('/admin', adminRoute)
app.use('/user', userRoute)


app.get('/', (req, res) => {
    res.send('Hello');
})

const port = process.env.PORT
app.listen(port, () => console.log(`listening on ${port}`));