/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var clothsRouter = express.Router();

  var cloths = [
      {
        id: 1,
        name: 'Ghana Batik',
        size: 'large',
        price: '$7.99',
        image: 'http://g02.a.alicdn.com/kf/HTB14dpbKFXXXXaTXFXXq6xXFXXXY/Mode-D-&eacute;t&eacute;-Style-Sans-Manches-Imprim&eacute;-Robe-Femmes-Africain-Batik-Coton-V&ecirc;tements-Casual-Sexy-Robes.jpg'
      },

       {
        id: 2,
        name: 'Senegal Overall',
        size: 'large',
        price: '$13.50',
        image: 'https://dupsies.com/Dstore/images/Purple-African-Print-Senegalese-Dress-DP3352.jpg'
      },

       {
        id: 3,
        name: 'Malian Top',
        size: 'large',
        price: '$8.99',
        image: 'http://i0.wp.com/www.selectastyle.com/wp-content/uploads/2014/09/bazin_dbn_selectastyle_39.jpg'
      }
  ];

  clothsRouter.get('/', function(req, res) {
    res.send({
      'cloths': cloths
    });
  });

  clothsRouter.post('/', function(req, res) {
    var newCloth =req.body.cloth;
    var newId = cloths.length + 1;
    newCloth.id = newId;
    cloths.push(newCloth);
    res.send({
      cloth: newCloth
    });
  });

  clothsRouter.get('/:id', function(req, res) {
    res.send({
      'cloths': {
        id: req.params.id
      }
    });
  });

  clothsRouter.put('/:id', function(req, res) {
    res.send({
      'cloths': {
        id: req.params.id
      }
    });
  });

  clothsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/cloths', require('body-parser').json());
  app.use('/api/cloths', clothsRouter);
};
