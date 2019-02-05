var GraphQLNonNull = require("graphql").GraphQLNonNull;
var GraphQLString = require("graphql").GraphQLString;

var speakerType = require("../../../Types/SpeakerType");
var speakerModel = require("../../../../MongoDB/Speaker");

exports.addSpeaker = {
  type: speakerType.speakerType,
  /* define the arguments that we should pass to the mutation
   here we require both speaker name and the company name 
   the id will be generated automatically 
*/
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    company: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve: async (root, args) => {
    //under the resolve method we get our arguments

    const uModel = new speakerModel(args);
    const newSpeaker = await uModel.save();
    if (!newSpeaker) {
      throw new Error("error");
    }
    return newSpeaker;
  }
};
