var GraphQLSchema = require('graphql').GraphQLSchema;
var GraphQLObjectType = require('graphql').GraphQLObjectType;
var query = require('../Queries/SpeakerQuery').SpeakerQuery;
var mutation = require('../Mutations/Speaker/SpeakerMutations')

exports.SpeakerSchema = new GraphQLSchema({
  query: query,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
})