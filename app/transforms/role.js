import DS from 'ember-data';
import Ember from 'ember';

export default DS.Transform.extend({
	deserialize: function(serialized) {
		var roles = Ember.$.parseJSON(serialized);
		return (Ember.typeOf(roles) === 'object') ? roles : null;
	},
	serialize: function(deserialized) {
    return JSON.stringify(deserialized);
		
	}
});
