const express = require('express');
const Difficulty = require('./../models/difficulty');

class DifficultyController {
    getAllDifficulties(req, res) {
        Difficulty.find()
            .then(difficulties => {
                console.log(difficulties)
                res.status(200).json({ difficulties });
            })
            .catch(error => {
                res.status(500).json({ error: 'Error' });
            });
    }

}

module.exports = new DifficultyController();  