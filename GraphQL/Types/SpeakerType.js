var GraphQLObjectType = require("graphql").GraphQLObjectType;
var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLID = require("graphql").GraphQLID;
var GraphQLString = require("graphql").GraphQLString;

exports.speakerType = new GraphQLObjectType({
  name: "speaker",
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: { type: GraphQLString },
      company: { type: GraphQLString }
    };
  }
});
