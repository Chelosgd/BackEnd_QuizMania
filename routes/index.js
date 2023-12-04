const express = require('express');
const router = express.Router();

router.use(express.json());

const auth = require('./../src/middleware/auth.middleware');
const loginController = require('./../src/controllers/login.controller');
const registerController = require('./../src/controllers/register.controller');
const questionController = require('./../src/controllers/question.controller');
const quizController = require('./../src/controllers/quiz.controller');

//login and register
router.post('/login', loginController.login);
router.post('/register', registerController.register);

//questions 
router.get('/question/:id', questionController.getUserQuestions);
router.post('/question', questionController.createQuestion);

//quizzes
router.get('/quiz/:quizId', quizController.getQuizById);
router.delete('/quiz/:quizId', quizController.deleteQuizById);
router.post('/quiz', quizController.createQuiz);

module.exports = router
