import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('arts', function () {
     this.route('art', { path: ':art_id' });
     this.route('new');
     this.route('edit', { path: ':art_id/edit' });
  });

  this.route('cloths', function () {
    this.route('cloth', { path: ':cloth_id' });
    this.route('new');
    this.route('edit', { path: ':cloth_id/edit' });
  });
  this.route('homedecoration');
  this.route('checkokout');
});

export default Router;
