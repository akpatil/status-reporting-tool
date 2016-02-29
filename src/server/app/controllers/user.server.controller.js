var User = require('mongoose').model('User');

exports.renderSignin = function(req, res, next){
	if(!req.user){
		res.render('signin', {
			title: 'Sign-In Form'
		});
	}
	else{
		return res.redirect('/');
	}
};

exports.create = function(req, res, next){
	var user = new User(req.body);
	user.save(function(err){
		if(err)
			return next(err);
		else
			res.json(user);
	});
};

exports.list = function(req, res, next){
	User.find({}, function(err, users){
		if(err)
			return next(err);
		else
			res.json(users);
	});
};

exports.readByID = function(req, res, next, id){
	User.find({
		_id: id
	}, function(err, user){
		if(err)
			return next(err);
		else {
			req.user = user;
			next();
		}
	});
};

exports.read = function(req, res, next){
	res.json(req.user);
};

exports.update = function(req, res, next, id){
	User.findByIdAndUpdate(req.user.id, req.body, function(err, user){
		if(err)
			return next(err);
		else 
			res.json(user);
	});
};

exports.delete = function(req, res, next){
	req.user.remove(function(err){
		if(err)
			return next(err);
		else
			res.json(req.user);
	});
};