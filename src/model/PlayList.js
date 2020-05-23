import mongoose from "mongoose";

const PlayListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  videos: [
    {
      type: mongoose.Types.ObjectId,
      ref: "video",
    },
  ],
});

const model = mongoose.model("playlist", PlayListSchema);
export default model;
