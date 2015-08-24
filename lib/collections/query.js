Queries = new Mongo.Collection('queries');

Meteor.methods({
  queriesInsert: function(queriesAttributes) {
      var post = _.extend(queriesAttributes, {
      
      starttime: queriesAttributes.starttime, 
      endtime: queriesAttributes.endtime, 
      timestamp: queriesAttributes.timestamp,
      press: queriesAttributes.press,
           
      
    });
   
    Queries.insert(queriesAttributes);
    
}});
