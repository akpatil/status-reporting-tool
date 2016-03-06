var app = require('../../server'),
	request = require('supertest'),
	should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Project = mongoose.model('Project');

var user, project;

describe('Project model unit test:', function(){
	beforeEach(function(done){
		user = new User({
			firstName: 'John',
			lastName: 'Doe',
			email: 'test@test.com',
			username: 'test',
			password: 'testing'
		});
		user.save(function(){
			project = new Project({
				projectName: 'Lorem Ipsum',
				strategicAlignment: 'none',
				projectDescription: 'lorem ipsum test test blah blah',
				functionalGroup: 'js test squad',
				projectApprover: 'Jane Doe',
				projectState: 'active',
				projectHealth: 'good',
				projectSummary: 'lorem ipsum test test blah blah',
				budgetedCost: '99999',
				actualCost: '99999',
				forecastedCost:'99999' ,
				implementationDate: '12/01/2016',
				milestoneDate: '12/01/2016',
				status: 'active',
				user: user
			});
			project.save(function(err){
				done();
			});
		});
	});
	describe('Testing the save method', function(){
		it('should be able to save without problems', function(){
			project.save(function(err){
				should.not.exist(err);
			});
		});
	});	
	afterEach(function(done){
		Project.remove(function(){
			User.remove(function(){
				done();
			});
		});
	});
});	