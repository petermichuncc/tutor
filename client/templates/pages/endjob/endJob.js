Template.endjob.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();

var post = {
      month: moment().format("MM"),
         day: moment().format("DD"),
         hour: moment().format("HH"),
         minute: moment().format("mm")
         
     };


Meteor.subscribe('hours');
     Meteor.call('hoursInsert', post)
 
return false;

}
});

Template.endjob.helpers({
    
    parts: function () {
      Meteor.subscribe('parts');
    var Part = Parts.find().fetch().pop()
    

    console.log("This is the part number" + Part.partnumber)

    return Part.partnumber


  }
  
});