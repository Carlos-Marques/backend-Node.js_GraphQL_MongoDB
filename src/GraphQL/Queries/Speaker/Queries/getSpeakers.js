var GraphQLList = require('graphql').GraphQLList;
var SpeakerModel = require('../../../../MongoDB/speakerModel');
var speakerType = require('../../../Types/SpeakerType').speakerType;

exports.getSpeakers = {
  type: new GraphQLList(speakerType),
  resolve: async () => {
    const speakers = await SpeakerModel.find();
    if (!speakers) {
      throw new Error("error while fetching data");
    }
    return speakers;
  }
};
