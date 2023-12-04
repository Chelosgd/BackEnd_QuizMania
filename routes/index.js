const express = require('express');
const router = express.Router();

router.use(express.json());

//requires
const auth = require('./../src/middleware/auth.middleware');
const loginController = require('./../src/controllers/login.controller');
const registerController = require('./../src/controllers/register.controller');
const questionController = require('./../src/controllers/question.controller');
const quizController = require('./../src/controllers/quiz.controller');
const categoryController = require('./../src/controllers/category.controller');
const difficultyController = require('./../src/controllers/difficulty.controller');
const typeController = require('./../src/controllers/type.controller');
const recordController = require('./../src/controllers/record.controller');

//login and register
router.post('/login', loginController.login);
router.post('/register', registerController.register);

//question
router.get('/question/:id', questionController.getUserQuestions);
router.post('/question', questionController.createQuestion);

//quizz
router.get('/quiz/:quizId', quizController.getQuizById);
router.delete('/quiz/:quizId', quizController.deleteQuizById);
router.post('/quiz', quizController.createQuiz);
router.get('/quiz', quizController.getAllQuizzesGroupedByCategory);

//category
router.get('/category', categoryController.getAllCategories);
router.get('/category/:categoryId', categoryController.getCategorybyId);

//difficulty
router.get('/difficulty', difficultyController.getAllDifficulties);

//type
router.get('/type', typeController.getAllTypes);

//record
router.get('/record/:id', recordController.getUserRecords);
router.post('/record', recordController.createRecord);

module.exports = router
