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
    var data = [];
    cloths.forEach(function(item){
      data.push({
        type: 'cloths',
        id: item.id.toString(),
        attributes: {
          name: item.name,
          size: item.size,
          price: item.price,
          image: item.image
        }
      });
    });

    res.set('content-Type', 'application/vnd.api+json');
    res.send({
      data: data
    });
  });

  clothsRouter.post('/', function(req, res) {
    var newCloth =req.body.data.attributes;
    var newId = cloths.length + 1;
    var clothNames= [];
    cloths.forEach(function(item) {
      clothNames.push(item.name);
    });

    if (clothNames.indexOf(newCloth.name) !== -1) {
      res.status(404).send({
        errors: [
          {
             source: { pointer: 'data/attributes/name' },
             detail: 'must be unique'

          }


        ]

      });

    } else { 

          cloths.push({
            name: newCloth.name,
            size: newCloth.size,
            price: newCloth.price,
            image: newCloth.image,
            id: newId
          });

          res.set('content-Type', 'application/vnd.api+json');
          res.send({
            data: {
              type: 'cloths',
              id:  newId,
              attributes: newCloth
            }
          });
     }
  });

  clothsRouter.get('/:id', function(req, res) {
    res.send({
      'cloths': {
        id: req.params.id
      }
    });
  });

  clothsRouter.patch('/:id', function(req, res) {
    var clothAttrs = req.body.data.attributes;
    var clothId= req.param('id');
    
    var clothNames = [];
    cloths.forEach(function(item) {
      if (item.id !== parseInt(clothId)) {
         clothNames.push(item.name);
      }
    });
    
     if (clothNames.indexOf(clothAttrs.name) !== -1) {
      res.status(404).send({
        errors: [
          {
             source: {pointer: 'data/attributes/name' },
             detail: 'must be unique'

          }


        ]

      });

    } else { 

        cloths.forEach(function(item) {
          if (item.id === parseInt(clothId)) {
            item.name = clothAttrs.name;
            item.size = clothAttrs.size;
            item.price = clothAttrs.price;
            item.image = clothAttrs.image;

          }
        });
        res.send({
          data: {
            type: 'cloths',
            id: clothId,
            attributes: clothAttrs   
          }
        });
      }
  });

  clothsRouter.delete('/:id', function(req, res) {
    var clothId = req.param('id');
    for (var i = 0; i < cloths.length; i++ ) {
      if (parseInt(clothId) === cloths[i].id) {
        cloths.splice(i, 1);
        break;
      }
    }
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
