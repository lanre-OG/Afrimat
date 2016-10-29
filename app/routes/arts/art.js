import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findAll('art', params.art_id);
	},

	setupController: function(controller, model) {
		controller.set('art', model);
	}
 
});
