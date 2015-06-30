
Meteor.subscribe('parts');
Template.endjob.helpers({
    parts: function () {

     var Part = Parts.find().fetch().pop()
    console.log("This is the part number" + Part.partnumber)
   return Part.partnumber
  }
  
});
Template.endjob.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();

var post = {
      timestamp: moment().format("YYYY-MM-DD HH:mm:ss.SSS"),
      month: moment().format("MM"),
         day: moment().format("DD"),
         hour: moment().format("HH"),
         minute: moment().format("mm")
         
     };


Meteor.subscribe('hours');
     Meteor.call('hoursInsert', post)
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

