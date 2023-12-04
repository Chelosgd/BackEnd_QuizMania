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

    getCategorybyId(req, res) {
        const { categoryId } = req.params;
  
      Category.findById(categoryId)
        .then((category) => {
          if (!category) {
            return res.status(404).json({ message: 'Category not found' });
          }
  
          res.status(200).json(category);
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        });
    }
}

module.exports = new CategoryController();  