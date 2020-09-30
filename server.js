const express  = require('express');

const app = express();  // initializing app variable with express

app.get('/',(req,res)=> res.send('API running'))// just to test our api and display result on browser

const PORT = process.env.PORT || 5000  //process.env.PORT will look for environment varaible port to use in heroku

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));