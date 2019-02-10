var GraphQLObjectType = require('graphql').GraphQLObjectType;
var speakerMutations = require('./Speaker/speakerMutations');

//Pools all GraphQL mutations
var mutations = Object.assign(speakerMutations);

exports.Mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: mutations
})