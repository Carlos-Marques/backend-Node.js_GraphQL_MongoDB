var addspeaker = require('./Mutations/AddSpeaker').addSpeaker;
var updatespeaker = require('./Mutations/UpdateSpeaker').updateSpeaker;
var deletespeaker = require('./Mutations/DeleteSpeaker').removeSpeaker;

module.exports = {
  addspeaker,
  updatespeaker,
  deletespeaker
}