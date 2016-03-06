var Project = require('mongoose').model('Project');

var getErrorMessage = function(err){
	if(err.errors){
		for(var errName in err.errors){
			if(err.errors[errName].message)
				return err.errors[errName].message;
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

exports.delete = function(req, res, next){
	var project = req.project;
	project.remove(function(err){
		if(err)
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		res.json(project);
	});
};