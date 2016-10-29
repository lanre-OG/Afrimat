import Ember from 'ember';

export default Ember.Component.extend({
	buttonLabel: function() {
		return (this.get('cloth').id) ? 'Update Product' : 'Add Product';
	}.property(),
   actions: {
   	 submit: function() {
   	 	this.sendAction('action', this.get('cloth'));
   	 }
   }

});