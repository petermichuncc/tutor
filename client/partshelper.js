// Helper for the parts template that feeds it data
Meteor.subscribe('parts');
Template.parts.helpers({
  parts: function() {
    return Parts.find();
   },
   columns: function() {
     // the context is a part
     var result = _.values(this.data);
     result.unshift(this.text);
     return result;
   }
});
console.log ("example is" + Parts.find());