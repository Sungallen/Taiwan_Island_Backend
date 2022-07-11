import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { CREATE_ATTRACTION } from "./mutation/Station";
import { GET_ATTRACTIONS, GET_ONE_ATTRACTION } from "./Queries/Attractions";
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getallattractions: GET_ATTRACTIONS,
        getoneattraction: GET_ONE_ATTRACTION
    },
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        test: CREATE_ATTRACTION
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});