const express = require('express');
const Category = require('./../models/category');

class CategoryController {
    getAllCategories(req, res) {
        Category.find()
            .then(categories => {
                console.log(categories)
                res.status(200).json({ categories });
            })
            .catch(error => {
                res.status(500).json({ error: 'Error' });
            });
    }

}

module.exports = new CategoryController();  