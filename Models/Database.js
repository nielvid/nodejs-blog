const mongoose = require('mongoose');

var schema = mongoose.Schema;

var article = new schema({
	title:{
		type: String,
		required: true
	},
	description:{
		type: String,
		required: true
	},
	message:{
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});
var articles = mongoose.model('articles', article)



module.exports= articles;

