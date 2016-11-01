import Ember from 'ember';
import DS from 'ember-data';
// import Validator from 'npm:validator';
// import validator from 'validator';

export default Ember.Component.extend({
    // errors: DS.Errors.create(),

	buttonLabel: function() {
		return (this.get('cloth').id) ? 'Update Product' : 'Add Product';
	}.property(),
   actions: {
   	 submit: function() {
   	 	if (this.validate()){
   	 	    this.sendAction('action', this.get('cloth'));
   	 	}
   	 }
   },

   validate: function() {
   	this.set('errors', DS.Errors.create());

   	// if (Validator.isNull(this.get('cloth.name'))) {
   	if (this.get('cloth.name') === '' || this.get('cloth.name') === undefined) {
   		this.get('errors').add('name', "Field can't be empty");
   	}

   	// if (!Validator.isEmail(this.get('cloth.name'))) {
   	   if (this.get('cloth.name') === '') {
   		this.get('errors').add('name', "not a valid Name");
   	}

   	return this.get('errors.isEmpty');
   }

});