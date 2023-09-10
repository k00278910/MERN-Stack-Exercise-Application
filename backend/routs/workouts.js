// File contains API endpoints with rout handlers 

// Must use Express Router
const express = require ('express')

const router = express.Router()
// get all workouts
router.get('/',(req,res)=>{
    res.json({mssg:'Get all workouts'})
})
// get single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get single workout'})
})
// post a new  workout
router.post('/',(req,res)=>{
    res.json({mssg:'Post a new workout'})
})

// delete a workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete a workout'})
})

// update a workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update a workout'})
})
module.exports = router