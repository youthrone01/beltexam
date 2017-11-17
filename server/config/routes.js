var users = require('../controllers/users.js');
var questions = require('../controllers/questions.js');
var answers = require('../controllers/answers.js');
var path = require('path');

module.exports = function(app){
	app.post('/users', (req,res)=>{users.create(req,res)})
	app.get('/questions', (req,res,next)=>{questions.all(req,res)})
	app.post('/questions', (req,res,next)=>{questions.create(req,res)})
	app.get('/questions/:id', (req,res,next)=>{questions.getQue(req,res)})
	app.post('/answers',(req,res,next)=>{answers.create(req,res)})
	app.post('/answers/like/:id',(req,res,next)=>{answers.update(req,res)})
	app.post('/questions/search', (req,res,next)=>{questions.search(req,res)})
	
	

	app.all("*",function(req,res){
		res.sendFile('index.html', { root: './public/dist' });
	})
}