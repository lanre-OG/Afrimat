import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Route.extend({
   model: function() {
   	return this.store.createRecord('cloth');
   },
   
   setupController: function(controller, model) {
   	controller.set('cloth', model);
      controller.set('errors', DS.Errors.create());
   },
   
   actions: {
      createCloth: function(cloth) {
         var _this = this;
         var errors = this.controllerFor('cloths.new').get('errors');
         cloth.save().then(function(cloth) {
           _this.transitionTo('cloths.cloth', cloth);

         }).catch(function(resp) {
           resp.errors.forEach(function(error){
            var attribute = error.source.pointer.split('/')[3];
            errors.add(attribute, error.detail);

           });

         });
      }
   	
   }

});