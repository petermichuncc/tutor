 Meteor.subscribe('workcenters');
Meteor.subscribe('EDITED');
 Template.start.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();
var post = {
      machinenumber: $( "#someId" ).val()
     };

Meteor.subscribe('machines');
     Meteor.call('machinesInsert', post)
console.log("second hi");
Router.go('main'); 
return false;

}
});

 Template.start.helpers({
    
    machines: function () {
    
    // console.log(machine);
console.log("THis is the workcenters" + Workcenters.findOne().CellID)
    return Workcenters.find()


  }
  
});

