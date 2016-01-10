Workcenters = new Mongo.Collection('tutors');
Meteor.methods({
  tutorsInsert: function(workcentersAttributes) {
      var post = _.extend(workcentersAttributes, {
      
      
      CellNum: workcentersAttributes.CellNum,
      CellID: workcentersAttributes.CellID
           
      
    });
   
    Workcenters.insert(workcentersAttributes);
    
},
tutorsRemove: function(text) {
     
   
    Workcenters.remove({CellID: text});
    
}

});
