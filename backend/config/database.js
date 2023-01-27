import mongoose from "mongoose";

export const connectDB = ()=>{
    mongoose.set("strictQuery", false);
     mongoose.connect(process.env.MONGO_URI).then((con)=>{
        console.log(`Database Connected ${con.connection.host}`);
    }).catch((err)=>{
        console.log(`Database is not connected ${err}`);
    })
}
