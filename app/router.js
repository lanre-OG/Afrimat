import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.routerRootURL
});

Router.map(function() {
  this.route('arts', function () {
    this.route('art', { path: ':art_id' });
    this.route('new');
    this.route('edit', { path: ':art_id/edit' });
    this.route('checkout');
  });

  this.route('cloths', function () {
    this.route('cloth', { path: ':cloth_id' });
    this.route('new');
    this.route('edit', { path: ':cloth_id/edit' });
    this.route('checkout');

  });
  this.route('homedecoration');
  this.route('checkokout');

  this.route('login');
  this.route('register');
  this.route('admin', function() {
    this.route('users');
    this.route('user', {path: "/users/:user_id"});
  });
  this.route('home');
});

export default Router;
