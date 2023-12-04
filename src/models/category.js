const{model, Schema} = require('mongoose');

const categorySchema = new Schema({
    text: {type: String, require: true}
});

module.exports = model('categories', categorySchema, 'Category');