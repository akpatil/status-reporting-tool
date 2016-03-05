var Project = require('../controllers/project.server.controller');

module.exports = function(app){
	app.route('/api/project').get(Project.list);
};