Template.layout.helpers({
  pageTitle: function() { return Session.get('pageTitle'); }
});

// Template.start.events({
//   'submit form': function () {
//     Router.go('/main.html');
//   }
// });