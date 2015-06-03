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
      timestamp: moment().format("YYYY-MM-DD H:mm:ss.SSS"),
      initials: partsAttributes.initials,
      cavitation: partsAttributes.cavitation,
      workcenter: partsAttributes.workcenter
      
    });
   Parts.remove({});
    Parts.insert(partsAttributes);
    // var postId = Parts.insert(post);
    // return {
    //   _id: postId
    // };
  }
});
