exports.renderDashboard = function(req, res, next){
	res.render('dashboard', {
		title: 'dashboard page'
	});
};