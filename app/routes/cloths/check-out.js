import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findRecord('cloth', params.cloth_id);
	},

	setupController: function(controller, model) {
		controller.set('cloth', model);
	},

	actions: {
       checkout: function(cloth) {
       	var _this = this;
       	cloth.save();
       }

	}
});