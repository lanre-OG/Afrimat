import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
       return Ember.RSVP.hash({
       	 homedecorations: [
            {
            	name: 'Flower Vase'
            },

             {
            	name: 'Throw Pillows'
            },

             {
            	name: 'Center Rug'
            }
       	 ]

       });
	},

    setupController: function(controller, models) {
    	return controller.setProperties(models);
    }
});
// var Homedecoration = Ember.Object.extend({
//    name: '',
//    description: '',
//    price: '',
//    image: ''

// });

// export default Ember.Route.extend({
// 	model: function() {
// 		var flowerVase = Homedecoration.create({ 
// 			name: 'Flower Vase',
// 			description: 'Flower vase made from authentic materials',
// 			price: '$3.99',
// 			image: 'https://s-media-cache-ak0.pinimg.com/236x/96/b3/ca/96b3cad0bce86b59928060d75ffdbb63.jpg'
// 			// image: 'http://homecaprice.com/wp-content/uploads/2015/03/12-african.jpg'
//          });

// 		var throwPillow = Homedecoration.create({ 
// 			name: 'Throw Pillows',
// 			description: 'Comfortable pillows made from real feather',
// 			price: '$1.50',
// 			image: 'http://digest.bellafricana.com/wp-content/uploads/2014/11/african-decor-new-york-style-origins-2.jpg'
//          });

// 		var centerRug = Homedecoration.create({ 
// 			name: 'Center Rug',
// 			description: 'Hand made Rugs from Rwanda',
// 			price: '$17.99',
// 			image: 'http://cdn.shopify.com/s/files/1/0047/9422/files/Stools_05_large.jpg?1287517617'
//          });

// 		return [flowerVase, throwPillow, centerRug];
// 	}
// });


