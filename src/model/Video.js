import mongoose, { Schema } from "mongoose";

const VideoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  playtime: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "category",
  },
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
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("video", VideoSchema);
export default model;
