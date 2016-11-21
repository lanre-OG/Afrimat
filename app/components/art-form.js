import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({

	buttonLabel: function() {
		return (this.get('art').id) ? 'Update Product' : 'Add Product';
	}.property(),
   actions: {
   	 submit: function() {
   	 	if (this.validate()){
   	 	    this.sendAction('action', this.get('art'));
   	 	}
   	 }
   },

   validate: function() {
   	this.set('errors', DS.Errors.create());

   	if (this.get('art.name') === '' || this.get('art.name') === undefined) {
   		this.get('errors').add('name', "Field can't be empty");
   	}

   	   if (this.get('art.name') === '') {
   		this.get('errors').add('name', "not a valid Name");
   	}

   	return this.get('errors.isEmpty');
   }

});