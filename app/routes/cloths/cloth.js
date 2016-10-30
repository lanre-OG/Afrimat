import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('cloth', params.cloth_id);
	},

	setupController: function(controller, model) {
		controller.set('cloth', model);
	},

	actions: {
      deleteCloth: function(cloth) {
      	var _this = this;
      	cloth.destroyRecord().then(function() {
      		_this.transitionTo('cloths');

      	});
      }
	}
 
});