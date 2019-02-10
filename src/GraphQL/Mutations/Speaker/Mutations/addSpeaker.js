var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;

var speakerType = require("../../../Types/SpeakerType");
var speakerModel = require("../../../../MongoDB/speakerModel");

exports.addSpeaker = {
  type: speakerType.speakerType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    company: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (root, args) => {
    const uModel = new speakerModel(args);
    const newSpeaker = await uModel.save();
    if (!newSpeaker) {
      throw new Error("error");
    }
    return newSpeaker;
  }
};
