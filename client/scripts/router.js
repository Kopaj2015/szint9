/**
 * Router configuration.
 * Application layout definition.
 */
Router.configure({
  layoutTemplate: 'layout'
});

/**
 * Authentication beforeAction.
 * Prevents access to the user details page if user is not logged in.
 */
Router.onBeforeAction(function () {
  if (!Meteor.userId()) {
    this.redirect('list');
  } else {
    this.next();
  }
}, {
  only: ['userDetails']
});

/**
 * Router definition for the chat room page.
 * Subscribes to the required publications.
 */
Router.route('/', {
  name:     'list',
  template: 'list',
  subscriptions: function() {
    return [
      Meteor.subscribe('messages'),
      Meteor.subscribe('userIds')
    ];
  }
});

/**
 * Router definition for the user details page.
 */
Router.route('/user', {
  name:     'userDetails',
  template: 'userDetails'
});

Router.route('/events', {
  name:     'events',
  template: 'events',
  subscriptions: function() {
    return [
      Meteor.subscribe('messages'),
      Meteor.subscribe('userIds')
    ];
  }
});

Router.route('/results', {
  name:     'results',
  template: 'results',
  subscriptions: function() {
    return [
      Meteor.subscribe('messages'),
      Meteor.subscribe('userIds')
    ];
  }
});