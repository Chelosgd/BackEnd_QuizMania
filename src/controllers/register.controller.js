const express = require('express');
const bcrypt = require('bcrypt');
const User = require('./../models/user');

class RegisterController {
    register(req, res) {
        const { name, email, password, profilePic } = req.body;

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Hashing error:', err);
                res.sendStatus(500);
                return;
            }

            const userData = {
                name,
                email,
                password: hashedPassword,
                profilePic
            };

            User.create(userData)
                .then(newUser => {
                    console.log('User created:', newUser);
                    res.send(newUser);
                })
                .catch(error => {
                    console.error('Registration error:', error);
                    res.sendStatus(400);
                });
        });
    }
}

module.exports = new RegisterController();
