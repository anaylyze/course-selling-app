const express = require('express');
const mongoose = require('mongoose');
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const { adminRouter } = require('./routes/admin')

const app = express();

app.use('/api/v1/user', userRouter); // this lines add /user in all the routes under userRouter
app.use('/api/v1/course', courseRouter); //iska 1 or benefit h ki ye agar route mei koi prefixing 
// hogi toh woh yahi se ho jayegi or kisi bhi route ko individually change karne ki 
// zaroorat nhi hai
app.use('/api/v1/admin', adminRouter)

async function main() {
    await mongoose.connect("mongodb+srv://anayjha2015_db_user:UC6FfxewM8CqKZBo@cluster0.qehio9x.mongodb.net/course-selling-app")
    app.listen(3000);
    console.log('hello');
}

main()