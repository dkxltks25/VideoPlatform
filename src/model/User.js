import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    text: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  loginSecret: String,
});
UserSchema.pre("remove", (data) => console.log(data));
const model = mongoose.model("User", UserSchema);

export default model;
