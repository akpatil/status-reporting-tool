var dashboard = require('../controllers/dashboard.server.controller');

module.exports = function(app){
	app.route('/dashboard').get(dashboard.renderDashboard);
};