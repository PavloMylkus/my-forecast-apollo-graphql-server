import { ApolloServer } from "apollo-server";
const fs = require('fs');
const path = require('path');

const Query = require('./resolvers/Query.ts')
const resolvers = {
	Query
}

export const server = new ApolloServer({
	typeDefs: fs.readFileSync(
		path.join(__dirname, 'schema.graphql'), 'utf-8'
	),
	resolvers,
});

const port = process.env.PORT || 3000;
// 2
server.listen({ port }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});