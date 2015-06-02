//File that publishes all the databases used
Meteor.publish('entries', function() {
  return Entries.find();
});
Meteor.publish('posts', function() {
  return Posts.find();
});
Meteor.publish('machines', function() {
  return Machines.find();
});
Meteor.publish('parts', function() {
  return Parts.find();
});
Meteor.publish('Presscycles', function() {
  return Cycles.find();
});

Meteor.publish('submissions', function() {
  return Submissions.find();
});


Meteor.publish('cycles-recent', function (startTime) {

return Cycles.find({CycleTimeStamp: { $gte: startTime}});
});