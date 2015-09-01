   Meteor.subscribe('parts');
Meteor.subscribe('hours');
Meteor.subscribe('incomingcycles');
 Meteor.subscribe('earnedhours');
Meteor.subscribe('planneds');
Meteor.subscribe('earnedhours');
// Meteor.subscribe('reasons');
Meteor.subscribe('queries');
var num = "1"
Template.output.helpers({
    
 
planned1: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
           var start=Queries.find().fetch().pop().starttime
          var pressnum=Queries.find().fetch().pop().press
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
             var ehour= '1'
           return Planneds.find({timestamp: {$gt: start,$lt: end}, press:pressnum, pl: ehour}).planneds
          
           },
 actual1: function (){
          //
            var start=Queries.find().fetch().pop().starttime
          var pressnum=Queries.find().fetch().pop().press
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
             var ehour= '1'
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, press:pressnum, ic:ehour}).incomingcycles
           
          
           },
 earnedhours1: function (){
          //
          var start=Queries.find().fetch().pop().starttime
          var pressnum=Queries.find().fetch().pop().press
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
             var ehour= '1'
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, press:pressnum, eh:ehour}).earnedhour
           
           },
partnumber1: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
          var pressnum=Queries.find().fetch().pop().press
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
           return Parts.find({timestamp: {$gt: start}, press:pressnum}).fetch().pop().partnumber
      },
 start: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
          var start=Queries.find().fetch().pop().starttime
          var pressnum=Queries.find().fetch().pop().press
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
           return Parts.find({timestamp: {$gt: start}, press:pressnum}).fetch().pop().timestamp
          //This should just show the the query start
           },
 finish: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
          var pressnum=Queries.find().fetch().pop().press
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
             var startime=Parts.find({timestamp: {$gt: start}, press:pressnum}).fetch().pop().timestamp
           return Hours.find({timestamp: {$gt: start}, press:pressnum}).fetch().pop().timestamp
           
          
           },
date: function (){
          //This should show I guess the year month and day of the job
           
           
          
           }, 
job: function (){
          //This will have logic that will determine if there was another job during this hour
          //basically it will 
          
           
          
           },
                                                                  
});


