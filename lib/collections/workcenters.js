Workcenters = new Mongo.Collection('workcenters');
Meteor.methods({
  workcentersInsert: function(workcentersAttributes) {
      var post = _.extend(workcentersAttributes, {
      
      
      CellNum: workcentersAttributes.CellNum,
      CellID: workcentersAttributes.CellID
           
      
    });
   
    Workcenters.insert(workcentersAttributes);
    
},
workcentersRemove: function(text) {
     
   
    Workcenters.remove({CellID: text});
    
}

});
