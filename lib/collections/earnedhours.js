Earnedhours = new Mongo.Collection('earnedhours');

Meteor.methods({
  earnedhoursInsert: function(earnedhoursAttributes) {
      var post = _.extend(earnedhoursAttributes, {
      
      earnedhour: earnedhoursAttributes.earnedhour, 
      timestamp: earnedhoursAttributes.timestamp,
      eh: earnedhoursAttributes.eh,
      press: earnedhoursAttributes.press
       
      });
   
    Earnedhours.insert(earnedhoursAttributes);
    
}});
