var config = require('./config'),
	morgan = require('morgan'),
	express = require('express'),
	session = require('express-session'),
	methodOverride = require('method-override'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	flash = require('connect-flash');

module.exports = function(){
	var app = express();

	if(process.env.NODE_ENV === 'development'){
		app.use(morgan('dev'));	
	}
	else if(process.env.NODE_ENV === 'production'){
		app.use(compress());
	}

	app.use(methodOverride());
	
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.developmentSecret
	}));

	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());
	
	app.set('views', './server/app/views');
	app.set('view engine', 'ejs');

	app.use(express.static('./client'));

	require('../app/routes/user.server.route')(app);
	require('../app/routes/dashboard.server.route')(app);
	require('../app/routes/project.server.route')(app);

	return app;
};	