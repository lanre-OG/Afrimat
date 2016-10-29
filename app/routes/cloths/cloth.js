import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findAll('cloth', params.cloth_id);
	},

	setupController: function(controller, model) {
		controller.set('cloth', model);
	}
 
});