const express = require('express');
const app = express();


app.post("/user/signup", (req,res) => {
    res.json({
        message: 'user signup endpoint'
    })
})

app.post("/user/login", (req,res) => {
    res.json({
        message: 'user login endpoint'
    })
})

app.post('/courses/purchase', (req,res) => {
    // irl we would expect user to pay money to buy courses but not in this case
    res.json({
        message: 'user can buy courses endpoint'
    })
})

app.get('/users/purchases', (req,res) => {
    res.json({
        message: 'user sees purchased courses endpoint'
    })
})

app.get('/courses' , (req,res) => {
    res.json({
        message:"all the courses endpoint"
    })
})

app.listen(3000);