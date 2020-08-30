const mongoose = require('mongoose');

const Newsletter = mongoose.Schema;

var list = new Newsletter({
	email: {
		type: String,
		required: true
	}
})
var Subscriber = mongoose.model('Subscriber', list )

module.exports = Subscriber;
