const {model, Schema} = require('mongoose');
//const recordSchema = require('./record');

const historySchema = new Schema({
    //idUser: {type: String, require: true},
    idUser: {type: Schema.Types.ObjectId, ref: 'users', require: true},
    //records: [{type: recordSchema, require: true}]
    records: [{type: Schema.Types.Object, ref: 'records', require: true}]
});

module.exports = model('histories', historySchema);