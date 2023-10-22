import mongoose, { Schema, model, models } from "mongoose";

export interface IUser extends mongoose.Document {
    email: string;
    username: string;
    image: string;
  }
  

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist!'],
        required: [true, 'Email is required!']
    }, 
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [
            /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
        ], 
        image: {
            type: String
        }
    }
})

// Since this is not an express backend that is always running, we will reuse the models
// check is a User model already exist, if not we  create a new one.

const User = models.User || model<IUser>("User", UserSchema);

export default User;