var dashboard = require('../controllers/dashboard.server.controller');

module.exports = function(app){
	app.route('/').get(dashboard.renderDashboard);
};