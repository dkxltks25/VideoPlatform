import dotenv from "dotenv";
dotenv.config();
import { GraphQLServer } from "graphql-yoga";
import morgan from "morgan";
import schema from "./schema";

import "./db"
const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({ schema });

server.express.use(morgan("dev"));
server.start(PORT, () =>
  console.log(
    `Video Platform Backend api Server Start http://localhost:${PORT}`
  )
);
