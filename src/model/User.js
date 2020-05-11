import mongoose, { Schema } from "mongoose";
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  subscriber: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  subscribing: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "like",
    },
  ],
  unlikes: [
    {
      type: Schema.Types.ObjectId,
      ref: "unlike",
    },
  ],
  videos: [
    {
      type: Schema.Types.ObjectId,
      ref: "video",
    },
  ],
  postss: [
    {
      type: Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
  playlists: [
    {
      type: Schema.Types.ObjectId,
      ref: "playlist",
    },
  ],
  views: [
    {
      type: Schema.Types.ObjectId,
      ref: "views",
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});
const model = mongoose.model("User", UserSchema);
export default model;
