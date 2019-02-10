var GraphQLObjectType = require('graphql').GraphQLObjectType;
var speakerQueries = require('./Speaker/speakerQueries');

//Pools all GraphQL queries
var queries = Object.assign(speakerQueries);

exports.Queries = new GraphQLObjectType({
    name: 'Query',
    fields: queries
})