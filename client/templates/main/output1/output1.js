   

Meteor.subscribe('queries');
//this code needs to also show hours with two jobs in the same hour
var num = "1"
Template.output.rendered =function(){
$("#btnExport").click(function (e) {
    window.open('data:application/vnd.ms-excel,' + $('#dvData').html());
    e.preventDefault();
});

Meteor.subscribe('partsall');
Meteor.subscribe('hoursall');
Meteor.subscribe('incomingcyclesall');
 Meteor.subscribe('earnedhoursall');
Meteor.subscribe('plannedsall');
};



Template.output.helpers({
    
 start1: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 07:00:00.000")
         
         var end=moment(start).format("YYYY-MM-DD 08:00:00.000")
        
        if (Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count >= 1)
        {
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
        timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
           return timestamp
         }
           },
 finish: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
             var starttime=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
           var timestamp=Hours.find({timestamp: {$gt: starttime,$lt: end}, workcenter:wc}).fetch().pop().timestamp
           timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
          return timestamp
           },
           date: function (){
         //date should start from when the query begins
           var start=Queries.find().fetch().pop().starttime
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
            
            date = moment(start).format("YYYY-MM-DD")
           return date 
           
          
           },
           date1: function (){
         //date should start from when the query begins
           var start=Queries.find().fetch().pop().starttime
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
            
            date = moment(start).format("YYYY-MM-DD")
           return date 
           
          
           },
           date2: function (){
         //date should start from when the query begins
           var start=Queries.find().fetch().pop().starttime
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
            
            date = moment(start).add(1,'days').format("YYYY-MM-DD")
           return date 
           
          
           },
           date3: function (){
         //date should start from when the query begins
           var start=Queries.find().fetch().pop().starttime
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
            
            date = moment(start).add(2,'days').format("YYYY-MM-DD")
           return date 
           
          
           },
           date4: function (){
         //date should start from when the query begins
           var start=Queries.find().fetch().pop().starttime
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
            
            date = moment(start).add(3,'days').format("YYYY-MM-DD")
           return date 
           
          
           },
           date5: function (){
         //date should start from when the query begins
           var start=Queries.find().fetch().pop().starttime
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
            
            date = moment(start).add(4,'days').format("YYYY-MM-DD")
           return date 
           
          
           },
           date6: function (){
         //date should start from when the query begins
           var start=Queries.find().fetch().pop().starttime
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
            
            date = moment(start).add(5,'days').format("YYYY-MM-DD")
           return date 
           
          
           },
           date7: function (){
         //date should start from when the query begins
           var start=Queries.find().fetch().pop().starttime
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
            
            date = moment(start).add(6,'days').format("YYYY-MM-DD")
           return date 
           
          
           },
           
planned1: function (){
          //This should start from the first dat of query
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time

       
         
        var ehour= '1'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        

           },
           planned2: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        
        
         
        var ehour= '2'
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          
           },
           planned3: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '3'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           planned4: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
            var ehour= '4'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           planned5: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
           
           
              var ehour= '5'
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           planned6: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
      
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                       
            var ehour= '6'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           planned7: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '7'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           planned8: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                     
              var ehour= '8'
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
           planned9: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
         var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                    
             var ehour= '9'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
            planned10: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        
            
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '10'
       
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
         
          
           },
            planned11: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
         var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                       
              var ehour= '11'
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
         
          
           },
            planned12: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                     
              var ehour= '12'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
         
          
           },
            planned13: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
             var ehour= '13'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
         
          
           },
            planned14: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
         var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                       
             var ehour= '14'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          
           },
            planned15: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
         var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                     
              var ehour= '15'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          
          
           },
            planned16: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             
           
             var ehour= '16'
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
         
          
           },
            planned17: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
         var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
          
           
             var ehour= '17'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          
           },
            planned18: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
    
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
             var ehour= '18'
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        
          
           },
            planned19: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
         var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
      
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
             var ehour= '19'
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
         
          
           },
            planned20: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             
           
              var ehour= '20'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
         
          
           },
            planned21: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
     
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
        
           
              var ehour= '21'
       var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          
          
           },
            planned22: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '22'
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
         
          
           },
            planned23: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
         var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
             var ehour= '23'
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
         
          
           },
            planned24: function (){
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
       
                          
            
           
              var ehour= '24'
      var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
          
          
           },
 actual1: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                    
              var ehour= '1'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp
          
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
         
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
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
              var ehour= '2'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
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
            var ehour= '3'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
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
            var ehour= '4'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
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
           var ehour= '5'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
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
            var ehour= '6'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
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
            var ehour= '7'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
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
            var ehour= '8'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
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
            var ehour= '9'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
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
             var ehour= '10'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
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
             var ehour= '11'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
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
            var ehour= '12'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
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
              var ehour= '13'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
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
           var ehour= '14'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
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
           var ehour= '15'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
           },
           actual16: function (){
          //
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            var ehour= '16'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
           },
           actual17: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            var ehour= '17'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
           },
           actual18: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
           var ehour= '18'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
           },
           actual19: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
           
           var ehour= '19'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
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
            var ehour= '20'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
           },
           actual21: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
           var ehour= '21'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
           },
           actual22: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
           
            var ehour= '22'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
           },
           actual23: function (){
          //
             var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
           var ehour= '23'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
           },
           actual24: function (){
          //
            var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
           var ehour= '24'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           return Incomingcycles.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, ic:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().incomingcycles
          
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
            
           
              var ehour= '1'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
         
           
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
            
              var ehour= '2'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
            
               var ehour= '3'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
             
              var ehour= '4'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
            
               var ehour= '5'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
            
             var ehour= '6'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
              var ehour= '7'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
              var ehour= '8'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
             var ehour= '9'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
             var ehour= '10'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
            
             var ehour= '11'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
            
               var ehour= '12'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
             var ehour= '13'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
             
              var ehour= '14'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
            var ehour= '15'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour 
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
             
              var ehour= '16'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
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
            
              var ehour= '17'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
           
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
            
             var ehour= '18'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
           
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
              var ehour= '19'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
           
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
           
             var ehour= '20'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
           
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
            
             var ehour= '21'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
           
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
            
              var ehour= '22'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
           
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
             
              var ehour= '23'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
           
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
             
             var ehour= '24'
        var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           
           return Earnedhours.find({timestamp: {$gt: timestamp,$lt: newend}, wc:workcenter, eh:ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().earnedhour
           
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
            
           
             var ehour= '1'
             
             
         var newend=moment(start).format("YYYY-MM-DD 24:59:99.999")
         console.log("This is the wc" + wc)
       
           if (Planneds.find({timestamp: {$gte: start,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count() >0)
            {            console.log("test a")
              var planned=Planneds.find({timestamp: {$gte: start,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              console.log("This is planned " + planned)
              return Parts.find({timestamp: {$lt: planned}, workcenter:wc}).fetch().pop().partnumber
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
                          
            var ehour= '2'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
             var ehour= '3'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
             var ehour= '4'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
             var ehour= '5'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
               var ehour= '6'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
              var ehour= '7'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
              var ehour= '8'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
             var ehour= '9'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
              var ehour= '10'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
              var ehour= '11'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
             var ehour= '12'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
               var ehour= '13'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
              var ehour= '14'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
             var ehour= '15'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
            var ehour= '16'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
             var ehour= '17'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
             var ehour= '18'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
              var ehour= '19'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
              var ehour= '20'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
               var ehour= '21'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
              var ehour= '22'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
              var ehour= '23'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
                          
             var ehour= '24'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
            
            var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '1'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
      
          var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '2'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '3'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '4'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '5'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '6'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '7'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '8'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '9'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '10'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '11'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '12'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '13'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '14'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '15'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '16'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '17'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '18'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '19'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '20'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '21'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '22'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '23'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
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
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '24'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
           },

           hour1second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '1p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
           }
         },
         hour2second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '2p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour3second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '3p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
           }
         },
           hour4second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '4p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour5second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '5p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour6second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '6p'
      var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
           }
         },
           hour7second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '7p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour8second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '8p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour9second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '9p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour10second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '10p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour11second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '11p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour12second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '12p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour13second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '13p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour14second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '14p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour15second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '15p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour16second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '16p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour17second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '17p'
        
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour18second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '18p'
      var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour19second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '19p'
      var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour20second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '20p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour21second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '21p'
      var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
            }
         },
           hour22second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '22p'
      var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
           }
         },
           hour23second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '23p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
           }
         },
            hour24second: function()
           {
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time
        var ehour= '24p'
       var start=moment(start).subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         if (Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).count()>0)
          {
            return true
           }
}
                                                             
});


