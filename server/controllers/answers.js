var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
	update: function(req,res){
		Answer.findOne({_id:req.params.id}, function(err,answer){
			if(err){
				console.log(err);
				res.json({err:err});
			}
			answer.likes = answer.likes + 1;
			answer.save(function(err){
				if(err){
					console.log(err);
					res.json({err:err});
				}else{
					res.json("update likes");
				}
			})
			
		})
	},
	create: function(req,res){
		Question.findOne({_id: req.body.que_id}, function(err, question){
			var answer = new Answer({text:req.body.text, support:req.body.support, user:req.body.user});
			answer._question = question._id;
			question.answers.push(answer);
			answer.save(function(err){
				question.save(function(err){
						if(err) { console.log('Error'); 
					} else {
							res.redirect('/questions'); }
				});
			});
	  	});
		
	},
	
}
