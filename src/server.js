import {GraphQLServer} from "graphql-yoga";


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


server.start(4000,()=>console.log('serverStart'))