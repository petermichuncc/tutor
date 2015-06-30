/**
* Template - search
*/
Template.partnumber.rendered = function () {
  AutoCompletion.init("input#partnumber");
}

Template.partnumber.events = {
  'keyup input#partnumber': function () {
    AutoCompletion.autocomplete({
      element: 'input#partnumber',       // DOM identifier for the element
      collection: Entries,              // MeteorJS collection object
      field: 'partnum',                    // Document field name to search for
      limit: 10,                         // Max number of elements to show
      sort: { partnum: 1 }});              // Sort object to filter results with
      //filter: { 'gender': 'female' }}); // Additional filtering
  }
}