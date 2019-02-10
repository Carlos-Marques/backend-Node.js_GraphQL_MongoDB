var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;

var speakerType = require('../../../Types/SpeakerType');
var speakerModel = require('../../../../MongoDB/speakerModel');

exports.removeSpeaker = {
  type: speakerType.speakerType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async(root, args)=> {
    const removedSpeaker = await speakerModel.findByIdAndRemove(args.id)
    if (!removedSpeaker) {
      throw new Error('error')
    }
    return removedSpeaker;
  }
}