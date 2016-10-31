import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.findRecord('art', params.art_id);
	},

	setupController: function(controller, model) {
		controller.set('art', model);
	},

	actions: {
		updateArt: function(art) {
			var _this = this;
			art.save().then(function(art) {
				_this.transitionTo('arts.art', art);
			});
		}
	}

});