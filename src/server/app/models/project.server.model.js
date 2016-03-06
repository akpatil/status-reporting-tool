var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProjectSchema = new Schema({
	subscriberName: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	projectName: {
		type: String,
		required: 'cannot be blank'
	},
	strategicAlignment: {
		type: String,
		required: 'cannot be blank'
	},
	projectDescription: {
		type: String,
		required: 'cannot be blank'
	},
	functionalGroup: {
		type: String,
		required: 'cannot be blank'
	},
	projectApprover: {
		type: String,
		required: 'cannot be blank'
	},
	projectState: {
		type: String,
		required: 'cannot be blank'
	},
	projectHealth: {
		type: String,
		required: 'cannot be blank'
	},
	projectSummary: {
		type: String,
		required: 'cannot be blank'
	},
	budgetedCost: {
		type: String,
		required: 'cannot be blank'
	},
	actualCost: {
		type: String,
		required: 'cannot be blank'
	},
	forecastedCost: {
		type: String,
		required: 'cannot be blank'
	},
	implementationDate: {
		type: Date
	},
	milestoneDate: {
		type: Date
	},
	status: {
		type: String,
		required: 'cannot be blank'
	}
});
mongoose.model('Project', ProjectSchema);