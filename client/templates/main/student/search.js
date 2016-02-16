/**
* Template - search
*/
Meteor.subscribe('students');
Template.partnumber2.rendered = function () {
  AutoCompletion.init("input#name");
}

Template.partnumber2.events = {
  'keyup input#name': function () {
    AutoCompletion.autocomplete({
      element: 'input#name',       // DOM identifier for the element
      collection: Students,              // MeteorJS collection object
      field: 'Name',                    // Document field name to search for
      limit: 50,                     // Max number of elements to show
       sort: { Name: 1 }});
               // Sort object to filter results with
      //filter: { 'workcenter': '3101N' } // Additional filtering
  }
}