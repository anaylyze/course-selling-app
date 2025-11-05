// const express = require('express');
// const router = express.Router();

const { Router } = require('express');
const courseRouter = Router();


courseRouter.post('/purchase', (req,res) => {
    // irl we would expect user to pay money to buy courses but not in this case
    res.json({
        message: 'user can buy courses endpoint'
    })
});

courseRouter.get('/all' , (req,res) => {
    res.json({
        message:"all the courses endpoint"
    })
});


module.exports = {
    courseRouter: courseRouter
}