// register event on form, not submit button
Meteor.subscribe('machines');
Meteor.subscribe('entries');
// Template.start.events({
// "submit .workcenterSelection": function(event){
// event.preventDefault();
// console.log(event);
// var text = $( "#someId" ).val();
// var post = {
//       machinenumber: $( "#someId" ).val()
//      };


// console.log("example test for machines" + post);
// console.log(text);
// Meteor.subscribe('machines');
//      Meteor.call('machinesInsert', post)
// console.log("second hi");
// Router.go('main'); 
// return false;

// }
// });

//I need an if statement here that determines which job page
//to go to based on the time of day
//So maybe it will look at the moment().format("H") of the current day
//convert this to a number.  Then go to the right page based on this
//value 
Template.table.events({
"submit .workcenterSelection": function(event){
event.preventDefault();
console.log(event);
var text = $( "#someId" ).val();

var post = {
      partnumber: $( "#partnumber" ).val(),
       quantity: $( "#quantity" ).val(),
       initials: $( "#initials" ).val(),
       cavitation: $( "#cavitation" ).val(),
       workcenter: Machines.findOne().machinenumber,
        timestamp: moment().format("YYYY-MM-DD H:mm:ss.SSS")
     };
console.log("example test for parts" + post);
console.log(text);
Meteor.subscribe('parts');
     Meteor.call('partsInsert', post)
console.log("second hi");
Router.go('shift3'); 
return false;

}
});
// validateForm: function () {
//          //calculate the amount of time needed for the job
//         function validateForm() {
//     var x = document.forms["myForm"]["partnumber"].value;
//     var y = document.forms["myForm"]["initials"].value;
//     var z = document.forms["myForm"]["quantity"].value;
//     var w = document.forms["myForm"]["cavitation"].value;
//     if (x == null || x == "") {
//         alert("Please enter a part number");
//         return false;
//     }
//     if (y == null || y == "") {
//         alert("Please enter your initials");
//         return false;
//     }
//     if (z == null || z == "") {
//         alert("Please enter the quantity");
//         return false;
//     }
//     if (w == null || w == "") {
//         alert("Please enter the cavitation");
//         return false;
//     }
// //     if(!this.form.checkbox.checked)
// // {
// //     alert('Please check the checkbox to confirm doing the following tasks');
// //     return false;
// // }
// }  } 






 // var post = {
      
 //       partnumber: $(e.target).find('[type=partnumber]').val(),

 //       quantity: $(e.target).find('[type=quantity]').val(),
 //       initials: $(e.target).find('[type=initials]').val(),
 //       cavitation: $(e.target).find('[type=cavitation]').val(),

 //       workcenter: Machines.findOne().machinenumber
 //     };
 //     console.log("example test for parts" + post);
 //    Meteor.subscribe('parts');
 //     Meteor.call('partsInsert', post) //function(error, result) {
 //     //   // display the error to the user and abort
 //     //   if (error)
 //     //     return alert(error.reason);

 //     //   // show this result but route anyway
 //     //   // if (result.postExists)
 //     //   //   alert('This link has already been posted');

 //       Router.go('main');  
     
 //   }
 // });













// Template.table.events({
//   'click .go': function(e) {
//     e.preventDefault();


//  console.log(Machines.findOne().machinenumber);
//     var post = {
      
//       partnumber: $(e.target).find('[type=partnumber]').val(),

//       quantity: $(e.target).find('[type=quantity]').val(),
//       initials: $(e.target).find('[type=initials]').val(),
//       cavitation: $(e.target).find('[type=cavitation]').val(),

//       workcenter: Machines.findOne().machinenumber
//     };
//     console.log("example test for parts" + post);
// Meteor.subscribe('parts');
//     Meteor.call('partsInsert', post) //function(error, result) {
//     //   // display the error to the user and abort
//     //   if (error)
//     //     return alert(error.reason);

//     //   // show this result but route anyway
//     //   // if (result.postExists)
//     //   //   alert('This link has already been posted');

//       Router.go('main');  
     
//   }
// });