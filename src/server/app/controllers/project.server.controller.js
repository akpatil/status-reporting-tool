var Project = require('../models/project.server.model');

var getErrorMessage = function(err){
	if(err.Errors){
		for(var errName in err.Errors){
			if(err.Errors[errName].message)
				return err.Errors[errName].message;
		}
	}
	else {
		return 'Unknown server error!';
	}
};

exports.create = function(req, res, next){
	var project = new Project(req.body);
	project.save(function(err){
		if(err){
			return res.status(400).send({
				message: getErrorMessage(err)
			});	
		}
		else {
			res.json(project);
		}
	});
};

exports.list = function(req, res, next){
	Project.find().exec(function(err, projects){
		if(err){
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		}
		else {
			res.json(projects);
		}
	});
};

exports.read = function(req, res, next){
	res.json(req.project);
};

exports.readByID = function(req, res, next, id){
	Project.findById(id).exec(function(err, project){
		if(err){
			return next(err);
		}
		if(!project){
			return next(new Error('Could\'nt find project'));
		}
		else {
			req.project = project;
			next();
		}
	});
};