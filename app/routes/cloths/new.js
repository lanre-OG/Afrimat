import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
   	return { name: '', size: '', price: '', image: ''};
   },
   
   setupController: function(controller, model) {
   	controller.set('cloth', model);
   },
   
   actions: {
   	
   }

});