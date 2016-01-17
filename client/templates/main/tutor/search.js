/**
* Template - search
*/
Meteor.subscribe('tutors');
Template.partnumber.rendered = function () {
  AutoCompletion.init("input#tutor");
}

Template.partnumber.events = {
  'keyup input#tutor': function () {
    AutoCompletion.autocomplete({
      element: 'input#tutor',       // DOM identifier for the element
      collection: Tutors,              // MeteorJS collection object
      field: 'Name',                    // Document field name to search for
      limit: 50,                     // Max number of elements to show
       sort: { Name: 1 }});
               // Sort object to filter results with
      //filter: { 'workcenter': '3101N' } // Additional filtering
  }
}