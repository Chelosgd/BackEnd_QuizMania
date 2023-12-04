const express = require('express');
const Quiz = require('./../models/quiz');

class QuizController {
    getQuizById(req, res) {
      const { quizId } = req.params;
  
      Quiz.findById(quizId)
        .then((quiz) => {
          if (!quiz) {
            return res.status(404).json({ message: 'Quiz not found' });
          }
  
          res.status(200).json(quiz);
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        });
    }
    
    deleteQuizById(req, res) {
      const { quizId } = req.params;
  
      Quiz.findByIdAndDelete(quizId)
        .then((deletedQuiz) => {
          if (!deletedQuiz) {
            return res.status(404).json({ message: 'Quiz not found' });
          }
  
          res.status(200).json({ message: 'Quiz deleted', deletedQuiz });
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        });
    }

    createQuiz(req, res) {
      const quizData = req.body;
      console.log(req.body);
      Quiz.create(quizData)
        .then(response=>{
            console.log(response);
            if(response){
                console.log('Quiz created:', response);
                res.send(response);
            }
            else{
                res.sendStatus(400);
            }
        })
        .catch(err=>{
            console.log('Quiz error:', err);
        })
    }

    getAllQuizzesGroupedByCategory(req, res) {
      Quiz.aggregate([
          {
              $group: {
                  _id: "$idCategory",
                  quizzes: { $push: "$$ROOT" }
              }
          }
      ])
          .then((result) => {
              if (result.length === 0) {
                  return res.status(404).json({ message: 'No quizzes found' });
              }

              res.status(200).json(result);
          })
          .catch((error) => {
              console.error(error);
              res.status(500).json({ message: 'Internal server error' });
          });
  }
  }

module.exports = new QuizController();