import mongoose from "mongoose";


export const connectDb = async () => {
    try {
        const connectingString = "mongodb+srv://Fullstack:sTZMa4Urj2rH8Jpl@cluster0.v3ysd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
        await mongoose.connect(connectingString);
        console.log("Connect to the database");
    } catch (error) {
        console.log(error);
        console.log("Error connecting to the database");
    }
}