var Project = require('../controllers/project.server.controller');

module.exports = function(app){
	app.route('/api/project').get(Project.list).post(Project.create);
	app.route('/api/project/:projectID').delete(Project.delete);
	app.param('projectID', Project.readByID);
};