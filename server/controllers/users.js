var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
	// all: function(req,res){
	// 	Player.find({}).sort({score: 'desc'}).exec(function(err,players){
	// 		if(err){
	// 			console.log(err);
	// 			res.json({err:err});
	// 		}
	// 		// console.log(players);
	// 		res.json(players);
	// 	})
	// },
	create: function(req,res){
		User.findOne({name: req.body.name }, function(err, user){
			if(err){
				console.log("error find");
			}else{
				if(user == null){
					var new_user = new User({name: req.body.name});
					new_user.save(function(err){
						if(err){
							console.log(err);
							res.json({err:err});
						}
						console.log("good");
						res.json("Success!");
					})
				}else{
					console.log("already have this user!!");
					res.json('already have this user!!');
				}
			}
		})
		
	},
	// destroy: function(req,res){
	// 	Player.remove({_id: req.params.id},function(err){
	// 		if(err){
	// 			console.log("Delete Error: ",err);
	// 			res.json({error:err});
	// 		}
	// 		res.redirect(303,'/players');
	// 	})
	// }
}
