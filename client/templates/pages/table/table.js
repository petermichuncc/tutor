// register event on form, not submit button
Meteor.subscribe('machines');
Meteor.subscribe('entries');


Template.table.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();

var post = {
      partnumber: $( "#partnumber" ).val(),
       quantity: $( "#quantity" ).val(),
       initials: $( "#initials" ).val(),
       cavitation: $( "#cavitation" ).val(),
       workcenter: Machines.findOne().machinenumber,
        timestamp: moment().format("YYYY-MM-DD HH:mm:ss.SSS"),
         month: moment().format("MM"),
         day: moment().format("DD"),
         hour: moment().format("HH"),
         minute: moment().format("mm")
     };
// var hour = {
//       hour: moment().format("HH")
//      };

// Meteor.subscribe('hours');
//      Meteor.call('hoursInsert', hour)
console.log(text);
Meteor.subscribe('parts');
     Meteor.call('partsInsert', post)
console.log("second hi");
//Here is the logic to determine the page to go to based on the time of day

if (moment().format("HH")>=15 && moment().format("HH") <23)
{
 Router.go('shift2');
}
else if (moment().format("HH")>=7 && moment().format("HH") <15)
{
 Router.go('shift1');
}
else 
{
	Router.go('shift3');
} 

return false;

}
});
