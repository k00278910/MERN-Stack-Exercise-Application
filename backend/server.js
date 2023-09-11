require('dotenv').config()
// server.js is the back-end entry point
//  must register the express application inside the server js file 
const express = require ('express')
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

// * LISTEN
// listen on port, then fire a function */
app.listen(process.env.PORT, ()=>{
    console.log('listening on port' , process.env.PORT)
})




