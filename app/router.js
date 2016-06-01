import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', { path: '/about' });
  this.route('contact', { path: '/contact' });
  this.route('subscribe', { path: '/subscribe' });
  this.route('back-issues', { path: '/back-issues' });
  this.route('submit', { path: '/submit' });
});

export default Router;
