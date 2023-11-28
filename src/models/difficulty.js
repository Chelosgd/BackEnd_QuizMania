const{model, Schema} = require('mongoose');

const difficultySchema = new Schema({
    text: {type: String, require: true}
});

module.exports = model('difficulties', difficultySchema);