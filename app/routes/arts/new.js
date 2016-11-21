import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
   	return this.store.createRecord('art');
   },
   
   setupController: function(controller, model) {
   	controller.set('art', model);
   },
   
   actions: {
   	createArt: function(art) {
         var _this = this;
         var errors = this.controllerFor('Arts.new').get('errors');
         cloth.save().then(function(art) {
           _this.transitionTo('arts.art', art);

         }).catch(function(resp) {
           resp.errors.forEach(function(error){
            var attribute = error.source.pointer.split('/')[3];
            errors.add(attribute, error.detail);

           });

         });
      }

   	
   }

});