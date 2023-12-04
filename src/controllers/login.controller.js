const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./../models/user');

class LoginController {
    login(req, res) {
        const { email, password } = req.body;

        User.findOne({ email })
            .then(user => {
                if (user) {
                    bcrypt.compare(password, user.password)
                        .then(passwordMatch => {
                            if (passwordMatch) {
                                const token = jwt.sign({
                                    _id: user._id,
                                    email: user.email
                                }, process.env.SECRET_KEY);

                                res.send({ token });
                            } else {
                                res.sendStatus(400);
                            }
                        })
                        .catch(compareErr => {
                            console.error('Comparison error:', compareErr);
                            res.sendStatus(500);
                        });
                } else {
                    res.sendStatus(400);
                }
            })
            .catch(err => {
                console.error('Database error:', err);
                res.sendStatus(500);
            });
    }
}

module.exports = new LoginController();
