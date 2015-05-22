Template.layout.events({
  'submit image': function(event, template) {
    event.preventDefault();  
    Router.go('main');
  }
});