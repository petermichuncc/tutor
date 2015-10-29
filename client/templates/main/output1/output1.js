   Meteor.subscribe('parts');
Meteor.subscribe('hours');
Meteor.subscribe('incomingcycles');
 Meteor.subscribe('earnedhours');
Meteor.subscribe('planneds');
Meteor.subscribe('earnedhours');
// Meteor.subscribe('reasons');
Meteor.subscribe('searches');
var num = "1"
// Template.output.rendered =function(){
//    $('.full-width').horizontalNav({});
// };
//this code is to 
// Template.output.rendered =function(){
//   $("button").click(function(){
//   $("#table2excel").table2excel({
//     // exclude CSS class
//     exclude: ".noExl",
//     name: "testexcelfile"
//   });
// });
// };

Template.output.helpers({
    
 start: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
         var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
       
           return timestamp
         
           },
 finish: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
             var starttime=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
console.log ("this is the starttime" + starttime)
           return Hours.find({timestamp: {$gt: starttime,$lt: end}, workcenter:wc}).fetch().pop().timestamp
           
          
           },
           date: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
             
            var ehour= '1'
            var date = Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
            date = moment(date).format("YYYY-MM-DD")
           return date 
           
          
           },
hours1: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time

        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
      var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
        
        var ehour= '1'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        

           },
           hours2: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           var ehour= '2'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          
         
          
           },
           hours3: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '3'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           hours4: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
            var ehour= '4'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           hours5: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
           
           
              var ehour= '5'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           hours6: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                       
            var ehour= '6'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           hours7: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '7'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           hours8: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                     
              var ehour= '8'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           hours9: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
         var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                    
             var ehour= '9'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
            hours10: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '10'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
         
          
           }
           

                                                             
});


