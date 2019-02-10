var addSpeaker = require('./Mutations/addSpeaker').addSpeaker;
var updateSpeaker = require('./Mutations/updateSpeaker').updateSpeaker;
var removeSpeaker = require('./Mutations/removeSpeaker').removeSpeaker;

//Pools all Speaker mutations
module.exports = {
  addSpeaker,
  updateSpeaker,
  removeSpeaker
}