Tutors = new Mongo.Collection('tutors');
Meteor.methods({
  tutorsInsert: function(tutorsAttributes) {
      var post = _.extend(tutorsAttributes, {
      
      
      Name: tutorsAttributes.Name,
      Subject: tutorsAttributes.Subject,
      Distance:tutorsAttributes.Distance
           
      
    });
   
    Tutors.insert(tutorsAttributes);
    
},
tutorsRemove: function(text) {
     
   
    Tutors.remove({Name: text});
    
}

});
