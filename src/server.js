import dotenv from "dotenv";
dotenv.config();
import {GraphQLServer} from "graphql-yoga";
import morgan from "morgan";

const typeDefs = `
    type Query{
        hello:String!
    }
`;
const resolvers = {
    Query:{
        hello:()=>"hello"
    }
};

const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({typeDefs,resolvers})

server.express.use(morgan("dev"));
server.start(PORT,()=>console.log(`Video Platform Backend api Server Start http://localhost:${PORT}`);