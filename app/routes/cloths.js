import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
       return Ember.RSVP.hash({
       	 cloths: this.store.findAll('cloth')

       });
	},

    setupController: function(controller, models) {
    	return controller.setProperties(models);
    },

    actions: {
    	 deleteCloth: function(cloth) {
      	var _this = this;
      	cloth.destroyRecord().then(function() {
      		_this.transitionTo('cloths');

      	});
      },
      	updateCloth: function(cloth) {
			var _this = this;
			cloth.save().then(function(cloth) {
				_this.transitionTo('cloths.cloth', cloth);
			});
		},
		createCloth: function(cloth) {
   		var _this = this;
   		this.store.createRecord('cloth', cloth).save().then(function(cloth) {
           _this.transitionTo('cloths.cloth', cloth);

   		});
   	}
   	
    }
});

// var Cloth = Ember.Object.extend({
//    name: '',
//    size: '',
//    price: '',
//    image: ''

// });

// export default Ember.Route.extend({
// 	model: function() {
// 		var ghanaBatik = Cloth.create({ 
// 			name: 'Ghana Batik',
// 			size: 'large',
// 			price: '$7.99',
// 			image: 'https://ofakind-assets-prod.s3.amazonaws.com/uploads/post_image/image/29321/1__Cover_.2.jpg'
//          });

// 		var senegalOverall = Cloth.create({ 
// 			name: 'Senegal Overall',
// 			size: 'Medium',
// 			price: '$13.50',
// 			image: 'https://dupsies.com/Dstore/images/Purple-African-Print-Senegalese-Dress-DP3352.jpg'
//          });

// 		var malianTop = Cloth.create({ 
// 			name: 'Malian Top',
// 			size: 'Small',
// 			price: '$8.99',
// 			image: 'http://i0.wp.com/www.selectastyle.com/wp-content/uploads/2014/09/bazin_dbn_selectastyle_39.jpg'
//          });

// 		return [ghanaBatik, senegalOverall, malianTop];
// 	}
// });

