const {model, Schema} = require('mongoose');
const recordSchema = require('./record');

const historySchema = new Schema({
    idUser: {type: String, require: true},
    records: [{type: recordSchema, require: true}]
});

module.exports = model('histories', historySchema);