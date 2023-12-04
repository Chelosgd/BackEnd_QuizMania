const {model, Schema} = require('mongoose');
//const questionSchema = require('./question');

const quizSchema = new Schema({
    name: {type: String, require: true}, 
    idDifficulty: {type: String, require: true},
    idCategory: {type: String, require: true},
    dateCreated: {type: Date, require: true},
    //questions: [{type: questionSchema, require: true}]
    questions: [{type: Schema.Types.Object, ref: 'questions', require: true}]
});

module.exports = model('quizzes', quizSchema, 'Quiz');