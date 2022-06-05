const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let statisticSchema = new Schema({
  name: {
    type: String
  },
  timestamp: {
    type: String
  },
  statslink: {
    type: String
  }
}, {
    collection: 'news'
  })

module.exports = mongoose.model('Statistic', statisticSchema)