import mongoose from "mongoose";
import 'dotenv/config';


const connectDb= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected Successfully');
    }catch(err){
        console.log(`Database connection error: ${err}`);
    }
};
export default connectDb;