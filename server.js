const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

//Connect Database
connectDB();

const app = express(); // initializing app variable with express

//Init Middleware
app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API running')); // just to test our api and display result on browser

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000; //process.env.PORT will look for environment varaible port to use in heroku

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
