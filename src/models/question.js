const {model, Schema} = require('mongoose');
//const optionSchema = require('./option');

const questionSchema = new Schema({
    text: {type: String, require: true},
    options: [{ type: Schema.Types.Object, ref: 'options', require: true }],
    idUser: {type: String, require: true},
    idType: {type: String, require: true},
});

module.exports = model('questions', questionSchema, 'Question');
