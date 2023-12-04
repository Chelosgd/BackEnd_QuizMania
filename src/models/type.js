const{model, Schema} = require('mongoose');

const typeSchema = new Schema({
    text: {type: String, require: true}
});

module.exports = model('types', typeSchema, 'Type');