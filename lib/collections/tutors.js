Tutors = new Mongo.Collection('tutors');
Meteor.methods({
  tutorsInsert: function(tutorsAttributes) {
      var post = _.extend(tutorsAttributes, {
      
      
      Name: tutorsAttributes.Name,
      Subject: tutorsAttributes.Subject,
      distance:tutorsAttributes.distance
           
      
    });
   
    Tutors.insert(tutorsAttributes);
    
},
tutorsRemove: function(text) {
     
   
    Tutors.remove({Name: text});
    
}

});