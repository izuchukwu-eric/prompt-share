import mongoose, { ConnectOptions } from "mongoose"


let isConnected = false; //track connection

const uri: string = process.env.MONGODB_URI || "";

export const connectToDB = async () => {
    mongoose.set('strictQuery', true); 

    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(uri, {
            dbName: "prompt_share",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions)

        isConnected = true;

        console.log('MongoDB connected')
    } catch (error) {
      console.log(error)
    }
}