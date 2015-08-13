// Collection for the parts and other related components for our table to output
Reasons = new Mongo.Collection('reasons');

Meteor.methods({
  reasonsInsert: function(reasonsAttributes) {
      var post = _.extend(reasonsAttributes, {
      
      reason: partsAttributes.partnumber, 
      
       
      
    });
   
    Reasons.insert(reasonsAttributes);
    
}});
