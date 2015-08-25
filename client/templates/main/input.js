var num = "1"


Template.input.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();

var post = {
      starttime: $( "#starttime" ).val(),
       endtime: $( "#endtime" ).val(),
       press: $( "#press" ).val(),
        timestamp: moment().format("YYYY-MM-DD HH:mm:ss.SSS")
        
     };

      Meteor.call('queriesInsert', post)


//Here is the logic to determine the page to go to based on the time of day


	Router.go('output');


return false;
}
});


//example partnumber: $( "#partnumber" ).val(),