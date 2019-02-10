var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;

var speakerType = require("../../../Types/SpeakerType");
var speakerModel = require("../../../../MongoDB/speakerModel");

exports.updateSpeaker = {
  type: speakerType.speakerType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    company: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (root, args) => {
    const UpdatedSpeaker = await speakerModel.findByIdAndUpdate(args.id, args);
    if (!UpdatedSpeaker) {
      throw new Error("Error");
    }
    return UpdatedSpeaker;
  }
};
