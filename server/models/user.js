var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = mongoose.Schema({
	name: {type: String, require: true},
	questions: [{type: Schema.Types.ObjectId, ref: 'Question'}],
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
},{timestamps: true})

var QuestionSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	text: {type: String, required: true },
	desc: {type: String},
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
   }, {timestamps: true });

var AnswerSchema = new mongoose.Schema({
	user: {type:String,required:true},
	_question: {type: Schema.Types.ObjectId, ref: 'Question'},
	text: {type: String, required: true },
	support: {type: String},
	likes:{type:Number, default:0},
}, {timestamps: true });

mongoose.model('User',UserSchema)
mongoose.model('Question',QuestionSchema)
mongoose.model('Answer',AnswerSchema)