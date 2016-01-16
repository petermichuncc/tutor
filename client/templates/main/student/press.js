var num = "1"


Template.press2.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var center = $( "#name" ).val();
console.log("you chose this center" + center)


      Meteor.call('tutorsRemove', center)


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
console.log("this is the name" + $( "#tutor" ).val())
console.log("this is the subject"+ $( "#subject" ).val())
//add the location of the tutor here
//to be inserted
var post = {
      Name: $( "#tutor" ).val(),
       Subject: $( "#subject" ).val(),
        
        
     };

      Meteor.call('tutorsInsert', post)


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