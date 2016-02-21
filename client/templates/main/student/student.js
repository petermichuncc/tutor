var num = "1"



Template.student.rendered = function ()
{

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log('Latitude : ' + crd.latitude);
  console.log('Longitude: ' + crd.longitude);
  console.log('More or less ' + crd.accuracy + ' meters.');
  var latitude=crd.latitude
  var longitude=crd.longitude
  setInterval(function(){
Session.set("lat",latitude )
 Session.set("long",longitude)


  }, 3000);
  

 console.log("lat" + Session.get("lat"))
};

function error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};
 navigator.geolocation.getCurrentPosition(success, error, options);
 setInterval(function(){ console.log("outside lat" + Session.get("lat"))}, 3000);
 
}
Template.student.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var center = $( "#name" ).val();
console.log("you chose this center" + center)


      Meteor.call('studentsRemove', center)


//Here is the logic to determine the page to go to based on the time of day


  Router.go('student');


return false;
},
"submit .workcenteradd": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();
// "CellNum": "22",
//       "CellID": "3100Q"

console.log("this is the name" + $( "#subject1" ).val())
console.log("this is the subject"+ $( "#subject" ).val())


var post = {
      Name: $( "#subject1" ).val(),
       Subject: $( "#subject" ).val(),
       Latitude:Session.get("lat"),
       Longitude:Session.get("long")


        
        
     };

      Meteor.call('studentsInsert', post)


//Here is the logic to determine the page to go to based on the time of day


  Router.go('student');


return false;
}
});
Workcenters.allow({
  remove: function (userId, doc) {
    return true;
  }
})

Template.student.helpers({

/*location: function ()

{

  return Geolocation.latLng()
} */

})
