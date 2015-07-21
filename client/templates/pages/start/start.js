 Meteor.subscribe('workcenters');

 Template.start.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;

var post = {
      machinenumber: $( "#someId" ).val(),
      cellnum: Workcenters.find({CellID:$( "#someId" ).val()}).fetch().pop().CellNum
     };

Meteor.subscribe('machines');
     Meteor.call('machinesInsert', post)

Router.go('main'); 
return false;

}
});

 

