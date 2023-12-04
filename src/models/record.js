const{model, Schema} = require('mongoose');

const recordSchema = new Schema({
    //idQuiz: {type: String, require: true},
    idQuiz: {type: Schema.Types.ObjectId, ref: 'quizzes', require: true},
    score: {type: Number, require: true},
    dateAnswered: {type: Date, require: true}
});

module.exports = model('records', recordSchema);