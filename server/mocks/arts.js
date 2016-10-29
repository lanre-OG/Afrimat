/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var artsRouter = express.Router();

  var arts= [
      {
        id: 1,
        name: 'Ife Bronze',
        artist: 'Annonymous',
        price: '$4.99',
        image: 'http://www.earthmetropolis.com/Africa_West_and_South_of_The_Nile/ife.jpg'
      },

       {
        id: 2,
        name: 'Ori-Ade',
        artist: 'Annonymous',
        price: '$3.99',
        image: 'http://d2ydh70d4b5xgv.cloudfront.net/images/0/a/african-batik-tapestry-hand-crafted-all-art-child-naming-novica-ghana-fc1a6163ca6ed803600fa3b460b3adc5.jpg'
      },

       {
        id: 3,
        name: 'Yoruba',
        artist: 'Annonymous',
        price: '$5.99',
        image: 'http://www.trueafricanart.com/info-paintings/Aritsts/appiah-ntiaw/big/b-baobab-village-3.jpg'
      }
  ];

  artsRouter.get('/', function(req, res) {
    res.send({
      'arts': arts
    });
  });

  artsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  artsRouter.get('/:id', function(req, res) {
    res.send({
      'arts': {
        id: req.params.id
      }
    });
  });

  artsRouter.put('/:id', function(req, res) {
    res.send({
      'arts': {
        id: req.params.id
      }
    });
  });

  artsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/arts', require('body-parser').json());
  app.use('/api/arts', artsRouter);
};
