import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  userId: { type: String, required: true, unique: true },
  coins: { type: Number, default: 0 }
});

export default model("User", UserSchema);
