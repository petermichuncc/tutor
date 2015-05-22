// Collection for the Machines
  Machines = new Mongo.Collection('machines');


 Meteor.methods({
   machinesInsert: function(machinesAttributes) {
      // check(Meteor.userId(), String);
     // check(partsAttributes, {
     //   title: String,
     //   url: String
      // });
      // var user = Meteor.user();

      console.log("Example results: " + machinesAttributes.machinenumber);

      var post = _.extend(machinesAttributes, {
      
       machinenumber: machinesAttributes.machinenumber
      
      
     });
      
      Machines.remove({});
      Machines.insert(machinesAttributes);
      // var postId = Parts.insert(post);
      // return {
      //   _id: postId
      // };
    }
  });
