const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
const User = require('../models/userModel')

const getGoal=asyncHandler(async(req,res) => {
    const goals= await Goal.find({
        user:req.user._id
    })
    res.status(200).json(goals)
})

const setGoal=asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please text')
    }
    const goal= await Goal.create({
        user:req.user._id,
        text:req.body.text
    })
    res.status(200).json(goal)
})

const updateGoal =asyncHandler(async(req,res) => {
    const goal= await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }

    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('user not found')
    }

    if(goal.user.toString()!==user.id){
        res.status(401)
        throw new Error('user not ')
    }
    res.status(200).json(goals)
})

const deleteGoal =asyncHandler(async(req,res) => {
    const goals= await Goal.find({user:req.user._id})
    res.status(200).json(goals)
})

module.exports={getGoal,setGoal,updateGoal,deleteGoal}