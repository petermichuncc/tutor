Queries = new Mongo.Collection('queries');

Meteor.methods({
  queriesInsert: function(queriesAttributes) {
      var post = _.extend(queriesAttributes, {
      
      starttime: queriesAttributes.starttime, 
      endtime: queriesAttributes.endtime, 
      timestamp: queriesAttributes.timestamp,
      workcenter: queriesAttributes.workcenter,
           
      
    });
   
    Queries.insert(queriesAttributes);
    
}});
