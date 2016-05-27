import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', function() {
    this.route('nav');
    this.route('content');
  });
  this.route('about');
  this.route('contact');
  this.route('subscribe');
  this.route('back-issues');
  this.route('submit');
});

export default Router;
