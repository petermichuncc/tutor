 

 Template.andy.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
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