import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema"
import cors from "cors";
import { createConnection, ConnectionOptions } from "typeorm";
import { attractions } from "./schema/Entities/Attractions";

let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    database: "taiwan_island",
    port: 3306,
    username: "root",
    password: "admin",
    entities: [attractions],
    logging: true
}

const main = async () => {
    createConnection(dbOptions).then(async connection => {
        console.log("Connected to DB");
    }).catch(error => console.log("TypeORM connection error: ", error));

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));

    app.listen(4001, () => {
        console.log("Server running on port 4001")
    });
};
main().catch((err) => {
    console.log(err);
});