Template.eqrepairlog.events({
"submit .workcenterSelection": function(event){
event.preventDefault();
console.log(event);
var text = $( "#someId" ).val();

// var post = {
//       partnumber: $( "#partnumber" ).val(),
//        quantity: $( "#quantity" ).val(),
//        initials: $( "#initials" ).val(),
//        cavitation: $( "#cavitation" ).val(),
//        workcenter: Machines.findOne().machinenumber,
//        timestamp: moment().format("YYYY-MM-DD hh:mm:ss.SSS")
//      };


 Router.go('entry'); 
return false;

}
});

