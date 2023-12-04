const express = require('express');
const Question = require('../models/question');

class QuestionController {
  getUserQuestions(req, res) {
    const userId = req.params.id;

    Question.find({ idUser: userId })
      .then(userQuestions => {
        res.send(userQuestions);
      })
      .catch(error => {
        console.error('Can not get user question', error);
      });
  }

  createQuestion(req, res){
    const questionData = req.body;
    console.log(req.body);
    Question.create(questionData)
        .then(response=>{
            console.log(response);
            if(response){
                console.log('Question created:', response);
                res.send(response);
            }
            else{
                res.sendStatus(400);
            }
        })
        .catch(err=>{
            console.log('Question error:', err);
        })
}
}

module.exports = new QuestionController();
