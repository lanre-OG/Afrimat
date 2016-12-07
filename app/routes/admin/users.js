import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		var m = this.store.findAll('profile');
		return m;
	}
});
