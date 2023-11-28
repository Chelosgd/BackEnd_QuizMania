const {model, Schema} = require('mongoose');
const questionSchema = require('./question');

const quizSchema = new Schema({
    name: {type: String, require: true}, 
    idDifficulty: {type: String, require: true},
    idCategory: {type: String, require: true},
    dateCreated: {type: Date, require: true},
    questions: [{type: questionSchema, require: true}]
});

model.exports = model('quizzes', quizSchema);