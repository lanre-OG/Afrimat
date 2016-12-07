import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findAll('cloth', params.id);
	},

	setupController: function(controller, model) {
		controller.set('Cloth', model);
	},

	actions: {
     
	}
 
});