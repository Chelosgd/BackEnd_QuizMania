const{model, Schema} = require('mongoose');

const optionSchema = new Schema({
    text: {type: String, require: true},
    isCorrect: {type: Boolean, require: true}
});

module.exports = model('options', optionSchema);