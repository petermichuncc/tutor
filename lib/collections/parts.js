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

    console.log("Example results: " + partsAttributes.partnumber);

    var post = _.extend(partsAttributes, {
      
      partnumber: partsAttributes.partnumber, 
      quantity: partsAttributes.quantity, 
      timeStamp: new Date(),
      initials: partsAttributes.initials,
      cavitation: partsAttributes.cavitation,
      workcenter: partsAttributes.workcenter
      
    });
    Parts.insert(partsAttributes);
    // var postId = Parts.insert(post);
    // return {
    //   _id: postId
    // };
  }
});
