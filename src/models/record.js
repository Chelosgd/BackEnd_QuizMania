const{model, Schema} = require('mongoose');

const recordSchema = new Schema({
    idQuiz: {type: String, require: true},
    score: {type: Number, require: true},
    dateAnswered: {type: Date, require: true}
});

model.exports = model('records', recordSchema);