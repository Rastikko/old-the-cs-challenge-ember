import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function() {
      this.get('session').open('linked-in-oauth2').then(() => {
        this.transitionToRoute('index');
      });
    }
  }
});
