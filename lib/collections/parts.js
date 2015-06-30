// Collection for the parts and other related components for our table to output
Parts = new Mongo.Collection('parts');

Meteor.methods({
  partsInsert: function(partsAttributes) {
    // check(Meteor.userId(), String);
    // check(partsAttributes, {
    //   title: String,
    //   url: String
    // });
    // var user = Meteor.user();
   var post = _.extend(partsAttributes, {
      
      partnumber: partsAttributes.partnumber, 
      quantity: partsAttributes.quantity, 
      timestamp: partsAttributes.timestamp,
      initials: partsAttributes.initials,
      cavitation: partsAttributes.cavitation,
      workcenter: partsAttributes.workcenter,
       hour: partsAttributes.hour,
       minute: partsAttributes.minute,
       month: partsAttributes.month,
       day: partsAttributes.day
      
    });
    // Parts.remove({});
    Parts.insert(partsAttributes);
    // var postId = Parts.insert(post);
    // return {
    //   _id: postId
    // };
  }
});
