import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { GraphQLServer } from "graphql-yoga";
import MerchantResolver from "./resolvers/Merchant";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [MerchantResolver],
        emitSchemaFile: true,
    });

    const server = new GraphQLServer({
        schema,
    });

    server.start(() => console.log("Server Started on http://localhost:4000"));
}

bootstrap();
