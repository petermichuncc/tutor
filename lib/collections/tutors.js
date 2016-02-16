Tutors = new Mongo.Collection('tutors');
Meteor.methods({
  tutorsInsert: function(tutorsAttributes) {
      var post = _.extend(tutorsAttributes, {
      
      
      Name: tutorsAttributes.Name,
      Subject: tutorsAttributes.Subject,
      Latitude:tutorsAttributes.Latitude,
      Longitude:tutorsAttributes.Longitude
           
      
    });
   
    Tutors.insert(tutorsAttributes);
    
},
tutorsRemove: function(text) {
     
   
    Tutors.remove({Name: text});
    
}

});
