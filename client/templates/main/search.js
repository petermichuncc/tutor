/**
* Template - search
*/
Meteor.subscribe('workcenters');
Template.partnumber.rendered = function () {
  AutoCompletion.init("input#partnumber");
}

Template.partnumber.events = {
  'keyup input#partnumber': function () {
    AutoCompletion.autocomplete({
      element: 'input#partnumber',       // DOM identifier for the element
      collection: Workcenters,              // MeteorJS collection object
      field: 'CellID',                    // Document field name to search for
      limit: 50,                     // Max number of elements to show
       sort: { CellID: 1 }});
               // Sort object to filter results with
      //filter: { 'workcenter': '3101N' } // Additional filtering
  }
}