var num = "1"


Template.press.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var center = $( "#partnumber" ).val();
console.log("you chose this center" + center)


      Meteor.call('workcentersRemove', center)


//Here is the logic to determine the page to go to based on the time of day


	Router.go('press');


return false;
},
"submit .workcenteradd": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();
// "CellNum": "22",
//       "CellID": "3100Q"
var post = {
      CellNum: $( "#press" ).val(),
       
       CellID: $( "#workcenter" ).val(),
        
        
     };

      Meteor.call('workcentersInsert', post)


//Here is the logic to determine the page to go to based on the time of day


	Router.go('press');


return false;
}
});
Workcenters.allow({
  remove: function (userId, doc) {
    return true;
  }
})