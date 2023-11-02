import mongoose, { Schema, model, models } from "mongoose";
import { IUser } from "./user";

export interface IPrompt extends mongoose.Document {
    creator: IUser["_id"];
    prompt: string;
    tag: string;
  }

const PromptSchema = new Schema({
    //one to many relationship, one user can create multiple prompts
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required."],
    },
    tag: {
        type: String,
        required: [true, "Tag is required"]
    }
});

const Prompt = models.Prompt || model<IPrompt>("Prompt", PromptSchema);

export default Prompt;