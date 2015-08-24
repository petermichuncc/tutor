


Meteor.subscribe('cycles-recent', moment().subtract(5, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');

Meteor.subscribe('hours');
Meteor.subscribe('incomingcycles');
 Meteor.subscribe('earnedhours');
Meteor.subscribe('planneds');
Meteor.subscribe('reasons');
var num = "1"
Template.shift1.helpers({
    
 
planned: function (){
          //planned will be multiplier by the time the actual actually runs

          //basically I will set the planned data equal to the most recently submitted data into the query database
          //so I will need to know the press number, the start and end date, 
          
           
          
           },
      
});


