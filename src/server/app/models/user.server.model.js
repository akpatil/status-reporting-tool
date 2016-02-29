var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	email: {
		type: String
	},
	username: {
		type: String
	},
	password: {
		type: String
	}
});

mongoose.model('User', UserSchema);