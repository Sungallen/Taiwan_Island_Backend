import { GraphQLList, GraphQLString } from "graphql";
import { AttractionType } from "../TypeDefs/Attractions"
import { attractions } from "../Entities/Attractions"

export const GET_ATTRACTIONS = {
    type: new GraphQLList(AttractionType),
    async resolve(parent: any, args: any) {
        const res = await attractions.find();
        return res;
    }
};

export const GET_ONE_ATTRACTION = {
    type: new GraphQLList(AttractionType),
    args: {
        name: { type: GraphQLString }
    },
    async resolve(parent: any, args: any) {
        const name = args.name;
        const res = await attractions.find({ where: { name: name } });
        return res;
    }
}