const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for ServerPort
const ServerPort = new Schema({
  Rank: {
    type: String
  },
  Grade: {
      type: String
  },
  "Channel name": {
    type: String
  },
  "Video uploads": {
      type: String
  },
  Subscribers: {
    type: Number
},
"Video views": {
  type: Number
}
},{
    collection: 'details'
});

module.exports = mongoose.model('ServerPort', ServerPort);