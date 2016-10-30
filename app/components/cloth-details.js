import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		deleteCloth: function() {
			this.sendAction('action', this.get('cloth'));
		}
	}

});