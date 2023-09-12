require('dotenv').config()
// server.js is the back-end entry point
//  must register the express application inside the server js file 
const express = require ('express')
// mongoose wraps the code for mongoDB compilation (methods to read/write DB documents)
// can create rules in order for data to be accepted/rejected by the schema
const mongoose = require ('mongoose')
const workoutRouts = require ('./routs/workouts')
// create express app
const app = express()
// * MIDDLEWARE
// use express.json to POST & UPDATE to the DB
app.use(express.json())

// code that executes between request and response
 // log requests after each request
app.use((req, res, next) => {
console.log(req.path, req.method)
next() // allows program to progress
})

// * ROUTES (attaches all the routs to the app)
app.use('/api/workouts', workoutRouts)
// * CONNECT to DB
mongoose.connect(process.env.MONGO_URI)
// Function to show completed connection
.then(()=>{
    // * LISTEN
// listen on port, then fire a function */
app.listen(process.env.PORT, ()=>{
    console.log('connected to DB & listening on port' , process.env.PORT)
})
})
// Check for connection error
.catch((error)=>{console.log(error)})






