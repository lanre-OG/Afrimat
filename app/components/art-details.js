import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		deleteArt: function() {
			this.sendAction('action', this.get('art'));
		}
	}

});