import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
   	return { name: '', size: '', price: '', image: ''};
   },
   
   setupController: function(controller, model) {
   	controller.set('cloth', model);
   },
   
   actions: {
   	createCloth: function(cloth) {
   		var _this = this;
   		this.store.createRecord('cloth', cloth).save().then(function(cloth) {
           _this.transitionTo('cloths.cloth', cloth);

   		});
   	}
   }

});