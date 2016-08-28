import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    // TODO add a fetch method
    // https://www.sitepoint.com/twitter-authentication-ember-js-torii/
  },

  afterModel: function() {
    if (!this.get('session').get('isAuthenticated')) {
      this.transitionTo('login');
    }
  }
});
