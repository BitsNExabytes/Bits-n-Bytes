import mongoose from 'mongoose';




//connecting to the database
const connectDB =  async ()=>{

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI,{

            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);

        //object containing information about the database
        // console.log(conn);

        
    } catch (error) {

        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1);
        
    }


}


export default connectDB