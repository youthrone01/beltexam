var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
	all: function(req,res){
		Question.find({}).populate('answers').exec(function(err,questions){
			if(err){
				console.log("can not find all questions");
			}else{
				res.json(questions);
			}
		})
	},
	create: function(req,res){
		User.findOne({name: req.body.user}, function(err, user){
			var question = new Question({text:req.body.text, desc:req.body.desc});
			question._user = user._id;
			user.questions.push(question);
			question.save(function(err){
				user.save(function(err){
						if(err) { console.log('Error'); 
					} else {
							res.redirect('/questions'); }
				});
			});
	  	});
		
	},
	getQue:function(req, res){
		Question.findOne({_id: req.params.id }).populate('answers').exec(function(err,question){
			if(err){	
				console.log("can not find all questions");
			}else{
				res.json(question);
			}
		})
	}
	
}
