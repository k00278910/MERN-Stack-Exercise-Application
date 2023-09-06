require('dotenv').config()
//  must create the express application inside the server js file 
const express = require ('express')

// create express app
const app = express()
// * MIDDLEWARE
// code that executes between request and response
// this one will fire for every request
// 'next' keyword allows the program to progress to ROUT HANDLER
app.use((req, res, next) => {
    // log requests
console.log(req.path, req.method)
next()
})

// * ROUT HANDLER
// if you go to localhost:4000 it will send a get request to the server
// the server responds by displaying the json message
app.get('/',(req,res)=>{
    // the response will send a json string message
    res.json({mssg:'Welcome to the app!'})
})


// * LISTEN
// listen on port, then fire a function */
app.listen(process.env.PORT, ()=>{
    console.log('listening on port' , process.env.PORT)
})




