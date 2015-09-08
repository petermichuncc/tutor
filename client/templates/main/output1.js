   Meteor.subscribe('parts');
Meteor.subscribe('hours');
Meteor.subscribe('incomingcycles');
 Meteor.subscribe('earnedhours');
Meteor.subscribe('planneds');
Meteor.subscribe('earnedhours');
// Meteor.subscribe('reasons');
Meteor.subscribe('queries');
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
              console.log("This is the start time " + start)
           return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).fetch().pop().timestamp
          //This should just show the the query start
           },
 finish: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
             var startime=Parts.find({timestamp: {$gt: start}, press:pressnum}).fetch().pop().timestamp

           return Hours.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).fetch().pop().timestamp
           
          
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
planned1: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '1'
             if (count==1)
             { 

           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }

           },
           planned2: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '2'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
           planned3: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '3'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
           planned4: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '4'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
           planned5: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '5'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
           planned6: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '6'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
           planned7: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '7'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
           planned8: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '8'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
           planned9: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '9'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned10: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '10'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned11: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '11'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned12: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '12'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned13: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '13'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned14: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '14'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned15: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '15'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned16: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '16'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned17: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '17'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned18: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '18'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned19: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '19'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned20: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '20'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned21: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '21'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned22: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '22'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned23: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '23'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
            planned24: function (){
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
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '24'
             if (count==1)
             { 
          
           return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          }
          else if (count==2)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().planneds

          }
          else if (count==3)
          {
             return Planneds.find({timestamp: {$gt: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().planneds
            
          }
          
           },
 actual1: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '1'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
           
          
           },
           actual2: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '2'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual3: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '3'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual4: function (){
          //
             var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '4'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual5: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '5'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual6: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '6'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
          
           },
           actual7: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '7'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           },
           actual8: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '8'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual9: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '9'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual10: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '10'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual11: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '11'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
          
           },
           actual12: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '12'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
          
           },
           actual13: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '13'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
          
           },
           actual14: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '14'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
          
           },
           actual15: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '15'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual16: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '16'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual17: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '17'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
          
           },
           actual18: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '18'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
          
           },
           actual19: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '19'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
          
           },
           actual20: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '20'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual21: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '21'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
           actual22: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '22'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
          
           },
           actual23: function (){
          //
             var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '23'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
          
           },
           actual24: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '24'
             if (count==1)
             { 
          
          
           return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          }
          else if (count==2)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().incomingcycles

          }
          else if (count==3)
          {
             return Incomingcycles.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().incomingcycles
            
          }
           
          
           },
 earnedhours1: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '1'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           
           },
           earnedhours2: function (){
          //
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '2'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours3: function (){
          //
         var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '3'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours4: function (){
          //
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '4'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours5: function (){
          //
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '5'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours6: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '6'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours7: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '7'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours8: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '8'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours9: function (){
          //
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '9'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours10: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '10'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours11: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '11'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours12: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '12'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours13: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '13'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours14: function (){
          //
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '14'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours15: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '15'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           },
           earnedhours16: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '16'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           },
           earnedhours17: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '17'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours18: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '18'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours19: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '19'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours20: function (){
          //
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '20'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours21: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '21'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours22: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '22'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours23: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '23'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
           earnedhours24: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '24'
             if (count==1)
             { 
          
          
           return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
          }
          else if (count==2)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 2}).fetch().pop().earnedhour

          }
          else if (count==3)
          {
             return Earnedhours.find({timestamp: {$gt: start,$lt: end}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 3}).fetch().pop().earnedhour
            
          }
           
           },
partnumber1: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '1'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
           
      },
      partnumber2: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '2'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber3: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '3'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber4: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '4'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber5: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '5'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber6: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '6'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber7: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '7'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber8: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '8'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber9: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '9'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber10: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '10'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber11: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '11'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber12: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '12'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber13: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '13'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber14: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '14'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber15: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '15'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber16: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '16'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber17: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '17'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber18: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '18'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber19: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '19'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber20: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '20'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber21: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '21'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber22: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '22'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber23: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '23'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
      partnumber24: function (){
          //basically I will put the part number that will be stored in the incoming cycles database
          //or I could put the part number associated with the job submitted this hour
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var endCount=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var endCount=moment(endCount).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: endCount}, workcenter:wc}).count()
           
             var ehour= '24'
             if (count==1)
             { 
            return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
          }
          else if (count==2)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 2}).fetch().pop().partnumber

          }
          else if (count==3)
          {
             return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 3}).fetch().pop().partnumber
            
          }
      },
 

job1: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 08:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job2: function (){
         
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 09:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job3: function (){
         
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 10:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job4: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 11:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job5: function (){
        
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 12:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job6: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 13:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job7: function (){
         
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 14:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job8: function (){
         
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 15:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job9: function (){
         
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 16:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job10: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 17:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job11: function (){
        
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 18:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job12: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 19:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job13: function (){
         
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 20:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job14: function (){
        
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 21:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job15: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 22:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job16: function (){
        
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job17: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).format("YYYY-MM-DD 24:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job18: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).add(1, 'days').format("YYYY-MM-DD 01:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job19: function (){
         
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).add(1, 'days').format("YYYY-MM-DD 02:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job20: function (){
         
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).add(1, 'days').format("YYYY-MM-DD 03:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job21: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).add(1, 'days').format("YYYY-MM-DD 04:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job22: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).add(1, 'days').format("YYYY-MM-DD 05:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job23: function (){
          
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).add(1, 'days').format("YYYY-MM-DD 06:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },
           job24: function (){
         
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).add(1, 'days').format("YYYY-MM-DD 07:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          return count
           },

                                                             
});


