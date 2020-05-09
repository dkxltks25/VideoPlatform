import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("open", () => console.log("mongo server connection"));
db.once("error", (error) => console.log(eror));
