const express = require('express');
const {createUserRoutes} = require('./user');
const {createCourseRoutes} = require('./courses');

const app = express();

app.use('/user', userRouter); // this lines add /user in all the routes under userRouter
app.use('/course', courseRouter);

// createUserRoutes(app);
// createCourseRoutes(app);


app.listen(3000);