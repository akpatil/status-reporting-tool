var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var webpack = require('webpack-stream');
var babel = require('gulp-babel');
var util = require('gulp-util');

gulp.task('build', ['build-client']);

gulp.task('lint', function(){
	return gulp.src(['src/client/js/*.js', '!node_modules/**/*.*', '!src/client/libs/**/*.*'])
	.pipe(jshint({
		esnext: true
	}))
	.pipe(jshint.reporter('default', {verbose: true}))
	.pipe(jshint.reporter('fail'));
});

gulp.task('build-client', ['lint'], function(){
	return gulp.src(['src/client/js/*.js']);
});

//gulp.task('build-server', ['lint'], function(){
//	return gulp.src(['src/server/**/*.*']);
//});

gulp.task('watch', function(){
	gulp.watch(['src/client/*.*']);
	gulp.watch(['src/server/*.*']);
	gulp.start('run');
});

gulp.task('run', ['build'], function(){
	nodemon({
		delay: 10,
		cwd: './src',
		script: './server/server.js',
		ext: 'html css js'
	})
	.on('restart', function(){
		util.log('Server restarted!');
	});
});

gulp.task('default', ['run']);