import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from  'colors';
import users from  './data/users.js'
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';


dotenv.config(); // for access to the env 

connectDB() // calling because this is not connected tot he database


const  importData = async () =>{


    try {

            //clear out the database
            await Order.deleteMany()
            await Product.deleteMany()
            await User.deleteMany()

            //insert users into the database and store a copy in a variab;e
            const  createdUsers = await User.insertMany(users);

            const adminUser = createdUsers[0]._id;

            // add that id to all of the products
            const sampleProducts = products.map(product =>{

                //for every product return the product with the admin user id added to it
                return {...product, user: adminUser}
            })

            await Product.insertMany(sampleProducts);

            console.log("Data Imported".green.inverse);
            process.exit();
        
    } catch (error) {

        console.error(`${error}`.red.inverse);
        process.exit(1);
        
    }
}

const  destroyData = async () =>{


    try {

            //clear out the database
            await Order.deleteMany()
            await Product.deleteMany()
            await User.deleteMany()

         

            console.log("Data Destroyed".green.red);
            process.exit()
        
    } catch (error) {

        console.error(`${error}`.red.inverse);
        process.exit(1);
        
    }
}

if(process.argv[2] === '-d'){
    destroyData();
}else{
    importData();
}