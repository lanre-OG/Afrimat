import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
       return Ember.RSVP.hash({
         arts: this.store.findAll('art')

       });
  },

    setupController: function(controller, models) {
      return controller.setProperties(models);
    }
});

// var Art = Ember.Object.extend({
//    name: '',
//    artist: '',
//    price: '',
//    image: ''

// });

// export default Ember.Route.extend({
// 	model: function() {
// 		var ifeBronze = Art.create({ 
// 			name: 'Ife Bronze',
// 			artist: 'Annonymous',
// 			price: '$4.99',
// 			image: 'http://www.earthmetropolis.com/Africa_West_and_South_of_The_Nile/ife.jpg'
//          });

// 		var oriade = Art.create({ 
// 			name: 'Ori-Ade',
// 			artist: 'Annonymous',
// 			price: '$3.99',
// 			image: 'http://d2ydh70d4b5xgv.cloudfront.net/images/0/a/african-batik-tapestry-hand-crafted-all-art-child-naming-novica-ghana-fc1a6163ca6ed803600fa3b460b3adc5.jpg'
//          });

// 		var yoruba = Art.create({ 
// 			name: 'Yoruba',
// 			artist: 'Annonymous',
// 			price: '$5.99',
// 			image: 'http://www.trueafricanart.com/info-paintings/Aritsts/appiah-ntiaw/big/b-baobab-village-3.jpg'
//          });

// 		return [ifeBronze, oriade, yoruba];
// 	}
// });
