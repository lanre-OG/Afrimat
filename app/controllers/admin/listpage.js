import Ember from 'ember';
import pagedArray from 'ember-cli-pagination/computed/paged-array';

export default Ember.Controller.extend({
	model: [1,2,3,4,5,6,7,8,9,10],
	// setup our query params
	queryParams: ["page", "perPage"],
	page: 1,
	perPage: 5,
	pagedContent: pagedArray('content', {pageBinding: "page", perPageBinding: "perPage"}),

	// binding the property on the paged array
	// to a property on the controller
	totalPagesBinding: "pagedContent.totalPages"
});
