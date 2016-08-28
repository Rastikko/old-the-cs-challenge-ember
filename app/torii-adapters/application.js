export default Ember.Object.extend({
  store: Ember.inject.service(), // inject the ember-data store

  // The authorization argument passed in to `session.open` here is
  // the result of the `torii.open(providerName)` promise
  open: function(authentication){
    var authorizationCode = authentication.authorizationCode;
    console.log('authentication', authentication);
    return new Ember.RSVP.Promise(function(resolve, reject){
      Ember.$.ajax({
        url: 'http://localhost:8080/auth/linkedin/session',
        data: { 'auth-code': authorizationCode },
        dataType: 'json',
        crossDomain: true,
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then(function(user){
      console.log('user!', user);
      // The returned object is merged onto the session (basically). Here
      // you may also want to persist the new session with cookies or via
      // localStorage.
      return {
        currentUser: user
      };
    });
  }
});
