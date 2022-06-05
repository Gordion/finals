const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let newsSchema = new Schema({
  name: {
    type: String
  },
  description: {
    type: String
  }
}, {
    collection: 'news'
  })

module.exports = mongoose.model('User', newsSchema)