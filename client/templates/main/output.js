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
    
 
planned: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 

          var start=Queries.find().fetch().pop().starttime
          var end=Queries.find().fetch().pop().endtime
           var pressnum=Queries.find().fetch().pop().press
          start=moment(start).format("YYYY-MM-DD 00:00:00.000")
             end=moment(end).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gt: start,$lt: end}, press:pressnum})
          
           },
 actual: function (){
          //
           var start=Queries.find().fetch().pop().starttime
          var end=Queries.find().fetch().pop().endtime
           var pressnum=Queries.find().fetch().pop().press
          start=moment(start).format("YYYY-MM-DD 00:00:00.000")
             end=moment(end).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, press:pressnum})
           
          
           },
 earnedhours: function (){
          //
          var start=Queries.find().fetch().pop().starttime
          var end=Queries.find().fetch().pop().endtime
           var pressnum=Queries.find().fetch().pop().press
          start=moment(start).format("YYYY-MM-DD 00:00:00.000")
             end=moment(end).format("YYYY-MM-DD 24:59:99.999")
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, press:pressnum})
           
          
           },
 start: function (){
          //
           var start=Queries.find().fetch().pop().starttime
          var end=Queries.find().fetch().pop().endtime
           var pressnum=Queries.find().fetch().pop().press
          start=moment(start).format("YYYY-MM-DD 00:00:00.000")
             end=moment(end).format("YYYY-MM-DD 24:59:99.999")
           return Parts.find({timestamp: {$gt: start,$lt: end}, press:pressnum})
           
          
           },
 finish: function (){
          //
          
           
          
           },
date: function (){
          //
           var start=Queries.find().fetch().pop().starttime
          var end=Queries.find().fetch().pop().endtime
           var pressnum=Queries.find().fetch().pop().press
          start=moment(start).format("YYYY-MM-DD 00:00:00.000")
             end=moment(end).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, press:pressnum})
           
          
           }, 
job: function (){
          //
          
           
          
           },
partnumber: function (){
          //
          
           
          
           },                                                                  
});


