Students = new Mongo.Collection('students');
Meteor.methods({
  studentsInsert: function(studentsAttributes) {
      var post = _.extend(studentsAttributes, {
      
      
      Name: studentsAttributes.Name,
      Subject: studentsAttributes.Subject
           
      
    });
   
    Students.insert(studentsAttributes);
    
},
studentsRemove: function(text) {
     
   
    Students.remove({Name: text});
    
}

});
