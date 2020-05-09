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

const server = new GraphQLServer({typeDefs,resolvers})

server.express.use(morgan("dev"));
server.start(4000,()=>console.log('serverStart'))