import { groupEnd } from "console";
import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";

export const AttractionType = new GraphQLObjectType({
    name: "Attraction",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        icon_url: { type: GraphQLString },
        coordinates: { type: GraphQLString },
        description: { type: GraphQLString },
        image_url: { type: GraphQLString }
    }),
});