Template.results.helpers({
  /**
   * Get the messages from the database.
   * @returns {Mongo.Cursor} Mongo Cursor of the messages.
   */
  getMessages: function() {
    return Messages.find({}, { sort: {createdAt: -1}});
  }
});
