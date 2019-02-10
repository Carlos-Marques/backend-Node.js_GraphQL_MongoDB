var GraphQLSchema = require('graphql').GraphQLSchema;
var Queries = require('../Queries/Queries').Queries;
var Mutations = require('../Mutations/Mutations').Mutations;

exports.Schema = new GraphQLSchema({
  query: Queries,
  mutation: Mutations
})