Template.endjob.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();

var post = {
      timestamp: moment().format("YYYY-MM-DD HH:mm:ss.SSS")
         
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
    

    // console.log(machine);

    return Part.partnumber


  }
  
});