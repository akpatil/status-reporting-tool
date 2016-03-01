var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	firstName: {
		type: String,
		trim: true,
		default: '',
		required: 'first name cannot be blank'
	},
	lastName: {
		type: String,
		trim: true,
		default: '',
		required: 'last name cannot be blank'
	},
	email: {
		type: String,
		default: '',
		match: [/.+\@.+\..+/, 'Please enter a valid email address']
	},
	username: {
		type: String,
		trim: true,
		required: 'username cannot be blank',
		unique: true
	},
	password: {
		type: String,
		validate: [function(password){
			return password && password.length > 6;
		}, 'password should be longer than 6 characters']
	},
	salt: {
		type: String
	},
	provider: {
		type: String
	},
	providerData: {},
	created: {
		type: Date,
		default: Date.now
	}
});

UserSchema.virtual('fullname').get(function(){
	return this.firstName + ' ' + this.lastName;
}).set(function(fullname){
	var splitname = fullname.split(' ');
	firstName = splitname[0] || '';
	lastName = splitname[1] || '';
});

UserSchema.pre('save', function(next){
	if(this.password){
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}
	next();
});

UserSchema.methods.hashPassword = function(password){
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64).toString('base64');
};

UserSchema.methods.authenticate = function(password){
	return this.password === this.hashPassword(password);
};

UserSchema.set('toJSON', {
	getters: true,
	virtuals: true
});


mongoose.model('User', UserSchema);