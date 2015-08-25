Planneds = new Mongo.Collection('planneds');

Meteor.methods({
  plannedsInsert: function(plannedsAttributes) {
      var post = _.extend(plannedsAttributes, {
      
      planneds: plannedsAttributes.planneds, 
      timestamp: plannedsAttributes.timestamp,
      pl: plannedsAttributes.pl,
      press: plannedsAttributes.press
       
      });
   
    Planneds.insert(plannedsAttributes);
    
}});
