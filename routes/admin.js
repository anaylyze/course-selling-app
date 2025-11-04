const { Router } = require('express');
const adminRouter = Router();

// admin login
adminRouter.post('/login', (req,res) => {
    res.json({
        message: 'admin login endpoint'
    })
});

//  admin signup
adminRouter.post('/signup', (req,res) => {
    res.json({
        message: 'admin signup endpoint'
    })
});


// create a course
adminRouter.post('/course/create',(req,res) => {
    res.json({
        message: 'create course by admin endpoint'
    })
});

// delete a course
adminRouter.delete('/course/delete', (req,res) => {
    res.json({
        message: 'delete course by admin endpoint'
    })
});


// add course content
adminRouter.put('/course/change', (req,res) => {
    res.json({
        message: 'change course content endpoint'
    })
});

// get all courses
adminRouter.get('/course/bulk', (req,res) => {
    res.json({
        message:'get all courses to admin'
    })
});

module.exports = {
    adminRouter: adminRouter
}