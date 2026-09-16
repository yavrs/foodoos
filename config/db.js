import mongoose from "mongoose";


export const connectDB = async () => {

    await mongoose.connect("mongodb+srv://yavrs786_db_user:F6XN7PVxTbGeTYuK@foodoos.hsjudid.mongodb.net/foodoos").then(() =>{ console.log("db connected")});
}
