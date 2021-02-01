//bring in express
import express from 'express';

import dotenv from 'dotenv';

import colors from 'colors';

import {notFound,errorHandler} from '../backend/middleware/errorMiddleware.js'

import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';




dotenv.config()

connectDB();

//initialize an expres object
const app = express();


//Routes

app.get('/', (req,res)=>{

    res.send("api is running!");
})


app.use('/api/products', productRoutes);



app.use(notFound)

//we are using middleware to override default status code
app.use(errorHandler)






const port = process.env.PORT || 5000
app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} started on port ${port}`.yellow.bold));







