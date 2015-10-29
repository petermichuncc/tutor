Searches = new Mongo.Collection('searches');

Meteor.methods({
  searchesInsert: function(searchesAttributes) {
      var post = _.extend(searchesAttributes, {
      
      starttime: searchesAttributes.starttime, 
      endtime: searchesAttributes.endtime, 
      timestamp: searchesAttributes.timestamp,
      workcenter: searchesAttributes.workcenter,
           
      
    });
   
    Searches.insert(searchesAttributes);
    
}});
