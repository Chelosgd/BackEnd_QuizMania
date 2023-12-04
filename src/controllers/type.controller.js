const express = require('express');
const Type = require('./../models/type');

class TypeController {
    getAllTypes(req, res) {
        Type.find()
            .then(types => {
                res.status(200).json({ types });
            })
            .catch(error => {
                res.status(500).json({ error: 'Error' });
            });
    }

}

module.exports = new TypeController();  