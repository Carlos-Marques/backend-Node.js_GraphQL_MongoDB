var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpeakerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  company:{
    type:String,
    required:true
  }

});
var SpeakerModel = mongoose.model('speaker', SpeakerSchema);
module.exports = SpeakerModel;