import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("Category", CategorySchema);
export default model;
