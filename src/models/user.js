const{model, Schema} = require('mongoose');

const userSchema = new Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    profilePic: {type: String, require: true}
});

module.exports = model('users', userSchema);