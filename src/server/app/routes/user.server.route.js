var User = require('../controllers/user.server.controller');

module.exports = function(app){
	app.route('/user').get(User.list).post(User.create);
	app.route('/user/:userID').put(User.update).delete(User.delete);
	app.param('userID', User.readByID);
};