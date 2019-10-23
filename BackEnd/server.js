const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

//Allow the app to access the local server
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}))

//parse application/json
app.use(bodyParser.json())


//To find on browser call http://localhost:4000/hello
app.get('/hello', (req, res) => res.send('Hello'))

//the new link will change name with user input, by putting a name after hello/
//The name outputs to the console and html file
app.get('/hello/:name',(req,res) => {
    console.log(req.params.name);
    res.send('Hello ' +req.params.name)
})
//Create a variable array to store the json data in
//Call the data and send it to the server
//It runs on http://localhost:4000/api/movies
app.get('/api/movies',(req,res) => {
    const myMovies = [
        {
        "Title":"Avengers: Infinity War",
        "Year":"2018",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title":"Captain America: Civil War",
        "Year":"2016",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ]
        
     res.status(200).json({movies:myMovies,
                            message: 'Operation completed successfully'
                        })
   
})
//POST to send name, year and url of poster 
app.post('/api/movies', (req, res)=> {
    console.log('Movie recieved')
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);
})
//This sends a local html file to browser
//path variable finds the complete file location and sends it to the server
app.get('/test',(req,res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})
//Sends a text to new page and the console recieves the full name inputted
app.get('/name',(req,res) => {
    res.send('Welcome '+ req.query.firstname + ' '+ req.query.lastname)
    console.log('GET: ' + req.query.firstname + ' '+ req.query.lastname);
})
//Looks for use of POST method
app.post('/name', (req,res) => {
    res.send('Welcome '+ req.query.firstname + ' '+ req.query.lastname)
    console.log('POST: ' + req.body.firstname + ' ' + req.body.lastname);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
