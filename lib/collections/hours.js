Hours = new Mongo.Collection('hours');

Meteor.methods({
   hoursInsert: function(hoursAttributes) {
      // check(Meteor.userId(), String);
     // check(partsAttributes, {
     //   title: String,
     //   url: String
      // });
      // var user = Meteor.user();

      

      var post = _.extend(hoursAttributes, {
      timestamp: hoursAttributes.timestamp,
       hour: hoursAttributes.hour,
       minute: hoursAttributes.minute,
       month: hoursAttributes.month,
       day: hoursAttributes.day
      
      
     });
      
      
      Hours.insert(hoursAttributes);
      // var postId = Parts.insert(post);
      // return {
      //   _id: postId
      // };
    }
  });
