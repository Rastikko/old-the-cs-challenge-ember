import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  afterModel: function() {
    if (!this.get('session').get('isAuthenticated')) {
      this.transitionTo('login');
    }
  }
});
