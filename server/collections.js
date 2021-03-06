/**
 * Publish the 8 latest messages.
 * @return {Mongo.Cursor} Sorted and limited collection objects.
 */
Meteor.publish('messages', function () {
  return Messages.find({}, { sort: {createdAt: -1}, limit: 8 });
});

/**
 * Publish users _id, username and profile information.
 * @return {Mongo.Cursor} Field reduced user objects.
 */
Meteor.publish('userIds', function () {
  return Meteor.users.find({}, {fields: {_id: 1, username: 1, profile: 1}});
});

Meteor.methods({
  /**
   * Save a message to the backend database.
   */
  addMessage: function(category, home, visitor) {
    if(Meteor.user()) {
      Messages.insert({
        userId:  Meteor.user()._id,
		category: category,
		home: home,
		visitor: visitor,
        createdAt: new Date()
      });
    }
  }
});
