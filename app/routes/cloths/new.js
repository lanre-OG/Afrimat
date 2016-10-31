import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
   	return this.store.createRecord('cloth');
   },
   
   setupController: function(controller, model) {
   	controller.set('cloth', model);
   },
   
   actions: {
   	
   }

});