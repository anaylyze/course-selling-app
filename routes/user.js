// const express = require('express');
// const router = express.Router();

// or 

const { Router } = require('express');
const userRouter = Router();

userRouter.post("/signup", (req,res) => {
    res.json({
        message: 'user signup endpoint'
    })
});

userRouter.post("/login", (req,res) => {
    res.json({
        message: 'user login endpoint'
    })
});

userRouter.get('/purchases', (req,res) => {
    res.json({
        message: 'user sees purchased courses endpoint'
    })
});


module.exports = {
    userRouter: userRouter
}