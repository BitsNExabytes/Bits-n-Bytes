import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler'


//create a router object using express
const router = express.Router();

//@Desc Fetch all products from the database.
//@Route GET /api/products
//@Access Public
router.get('/', asyncHandler (async (req,res)=>{

    //fetch products from database
    const products = await Product.find({});

    res.json(products);



}))

//@Desc Fetch product from database by id
//@Rout GET /api/products/:id
//@Access Public
router.get('/:id', asyncHandler(async (req,res)=>{

  const product = await Product.findById(req.params.id);

  //check to see if product exists
  if(product){

    res.json(product)
  } else{

    //respond with status code and message

    res.status(404)

    throw new Error('Product not found')

  }

    
}))


export default router