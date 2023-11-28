const {model, Schema} = require('mongoose');
const optionSchema = require('./option');

const questionSchema = new Schema({
    text: {type: String, require: true},
    options: [{type: optionSchema, require: true}],
    idUser: {type: String, require: true},
    idtype: {type: String, require: true}
});

module.exports = model('questions', questionSchema);
