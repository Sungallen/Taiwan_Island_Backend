import { groupEnd } from "console";
import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLScalarType } from "graphql";

export const AttractionType = new GraphQLObjectType({
    name: "Attraction",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        coordinates: { type: GraphQLString },
        description: { type: GraphQLString },
        image_url: { type: GraphQLString },
        en_name: { type: GraphQLString }
    }),
});