// Collection for the work centers
Entries = new Mongo.Collection('entries');


Entries.insert(
   {
     machinenumber: "304A"});
Entries.insert(
   {
     machinenumber: "304B"});
Entries.insert(
   {
     machinenumber: "306C"});

 Meteor.methods({
   entriesInsert: function(entriesAttributes) {
      // check(Meteor.userId(), String);
     // check(partsAttributes, {
     //   title: String,
     //   url: String
      // });
      // var user = Meteor.user();

      console.log("Example results: " + entriesAttributes.machinenumber);

      var post = _.extend(entriesAttributes, {
      
       machinenumber: entriesAttributes.machinenumber
      
      
     });
      Entries.insert(entriesAttributes);
      // var postId = Parts.insert(post);
      // return {
      //   _id: postId
      // };
    }
  });
