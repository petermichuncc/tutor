 //This triggers when the users clicks the submit button and sends the data to the collection.

 // Template.start.events({
 //   'click .go': function(e) {
 //     e.preventDefault();


 //    console.log(e);
 //     var post = {
      
 //       machinenumber: $(e.target).find('[id=choice]').val()

 //          };
 //          console.log("example test" + post.machinenumber);
 //     Meteor.call('machinesInsert', post) //function(error, result) {
 //     //   // display the error to the user and abort
 //     //   if (error)
 //     //     return alert(error.reason);

 //     //   // show this result but route anyway
 //     //   // if (result.postExists)
 //     //   //   alert('This link has already been posted');

 //     //   Router.go('postPage', {_id: result._id});  
 //     // }
 //   Router.go('main');
 //   }

 // });
 
//  Template.start.events({
// "submit .workcenterSelection": function(event){
// event.preventDefault();
// console.log(event);
// var text = $( "#someId" ).val();
// console.log(text);
// currentYear = Meteor.call('getCurrentYear');
// console.log("second hi");
// return false;
// Router.go('main'); 
// }
// });

 Template.start.events({
"submit .workcenterSelection": function(event){
event.defaultPrevented;
console.log(event);
var text = $( "#someId" ).val();
var post = {
      machinenumber: $( "#someId" ).val()
     };


console.log("example test for machines" + post);
console.log(text);
Meteor.subscribe('machines');
     Meteor.call('machinesInsert', post)
console.log("second hi");
Router.go('main'); 
return false;

}
});