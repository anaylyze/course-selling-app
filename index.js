// importing .env file
require('dotenv').config();

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

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT;

async function main() {
    try{
        await mongoose.connect(MONGODB_URL);
        console.log('database is connected');
        app.listen(PORT, ()=>{
            console.log(`server is running on port ${PORT}`);
            
        })
    }
    catch (error){
        console.log('failed to connect to the database');
    }
}

main()