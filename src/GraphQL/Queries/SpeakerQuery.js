var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLList = require('graphql').GraphQLList;

//import speaker model 
var SpeakerModel = require('../../MongoDB/Speaker');
//import GraphQL SpeakerType
var speakerType = require('../Types/SpeakerType').speakerType;

// Query
exports.SpeakerQuery = new GraphQLObjectType({
  name: 'Query',
  fields:  ()=> {
    return {
      speakers: {
        type: new GraphQLList(speakerType),
        resolve:  async ()=> {
          const speakers = await SpeakerModel.find()
          if (!speakers) {
            throw new Error('error while fetching data')
          }
          return speakers
        }
      }
    }
  }
})