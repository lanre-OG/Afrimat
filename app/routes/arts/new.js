import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
   	return this.store.createRecord('art');
   },
   
   setupController: function(controller, model) {
   	controller.set('art', model);
   },
   
   actions: {
   	
   }

});