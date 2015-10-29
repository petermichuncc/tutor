Template.output6.helpers({
    
 start1: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 08:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start2: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 08:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 09:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
       
       
           },
            start3: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
       var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 09:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 10:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start4: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 10:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 11:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start5: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 11:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 12:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start6: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 12:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 13:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start7: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 13:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 14:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
 start8: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 14:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 15:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start9: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 15:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 16:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start10: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 16:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 17:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start11: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 17:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 18:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start12: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 18:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 19:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start13: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
       var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 19:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 20:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start14: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 20:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 21:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start15: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 21:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 22:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start16: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 22:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 23:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start17: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 23:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 24:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start18: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 00:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 01:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp

           },
            start19: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 01:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 02:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start20: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 02:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 03:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start21: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 03:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 04:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start22: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 04:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 05:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start23: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 05:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 06:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },
            start24: function (){
          //This will show when the first job started
          //I need to find the first part number submitted after this start
         var start=Queries.find().fetch().pop().starttime
          var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 06:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 07:00:00.000")
        
       
         var timestamp=Parts.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp=moment(timestamp).format("YYYY-MM-DD HH:mm") 
        return timestamp
           },

 finish1: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
        var end=moment(start).add(5,'days').format("YYYY-MM-DD 08:00:00.000")
                
          var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish2: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 08:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 09:00:00.000")
             //finish time should show if there was a end job submitted this hour.
         var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish3: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 08:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 09:00:00.000")
             //finish time should show if there was a end job submitted this hour.
          var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish4: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 09:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 10:00:00.000")
             //finish time should show if there was a end job submitted this hour.
          var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish5: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 10:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 11:00:00.000")
             //finish time should show if there was a end job submitted this hour.
         var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish6: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 11:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 12:00:00.000")
             //finish time should show if there was a end job submitted this hour.
          var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish7: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 12:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 13:00:00.000")
             //finish time should show if there was a end job submitted this hour.
          var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish8: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 13:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 14:00:00.000")
             //finish time should show if there was a end job submitted this hour.
          var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish9: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 14:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 15:00:00.000")
             //finish time should show if there was a end job submitted this hour.
         var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish10: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 15:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 16:00:00.000")
             //finish time should show if there was a end job submitted this hour.
         var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish11: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 16:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 17:00:00.000")
             //finish time should show if there was a end job submitted this hour.
         var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish12: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 17:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 18:00:00.000")
             //finish time should show if there was a end job submitted this hour.
         var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish13: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 18:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 19:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
          
           },
           finish14: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 19:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 20:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish15: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 20:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 21:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish16: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 21:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 22:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish17: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 22:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 23:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish18: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
         var startnew=moment(start).add(5,'days').format("YYYY-MM-DD 23:00:00.000")
         
         var end=moment(start).add(5,'days').format("YYYY-MM-DD 24:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish19: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 00:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 01:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish20: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
       var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 01:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 02:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish21: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
       var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 02:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 03:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish22: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 03:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 04:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish23: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
        var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 04:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 05:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
          timestamp= moment(timestamp).format("YYYY-MM-DD HH:mm")
         return timestamp
           
          
           },
           finish24: function (){
          //this will show when the first job ended
           var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
       var startnew=moment(start).add(6,'days').format("YYYY-MM-DD 05:00:00.000")
         
         var end=moment(start).add(6,'days').format("YYYY-MM-DD 06:00:00.000")
             //finish time should show if there was a end job submitted this hour.
        var timestamp=Hours.findOne({timestamp: {$gt: startnew,$lt: end}, workcenter:wc}).timestamp
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
            
            date=moment(start).add(5,'days').format("YYYY-MM-DD")
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
          //basically I need to know the start time and end time
          //these can be retrieved from the most recently submitted 
            //I need to have the work center associated with the planned
          var start=Queries.find().fetch().pop().starttime
           var wc=Queries.find().fetch().pop().workcenter
           var workcenter=Queries.find().fetch().pop().workcenter
           //start needs to be the first job submitted after the job submission time

        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
        var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
     
        
        var ehour= '1'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).format("YYYY-MM-DD 24:00:00.000")
         console.log(" this is the start and end" + start+ " "+ end)
           return Planneds.find({timestamp: {$gte: start,$lt: end}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop().planneds
        

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
            
           var ehour= '2'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '3'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
            var ehour= '4'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
           
           
              var ehour= '5'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                       
            var ehour= '6'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '7'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                     
              var ehour= '8'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                    
             var ehour= '9'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '10'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                       
              var ehour= '11'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                     
              var ehour= '12'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
             var ehour= '13'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                       
             var ehour= '14'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
                     
              var ehour= '15'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             
           
             var ehour= '16'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
          
           
             var ehour= '17'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
             var ehour= '18'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
             var ehour= '19'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
             
           
              var ehour= '20'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
        
           
              var ehour= '21'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
           
              var ehour= '22'
       var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            //count should go from the start of the query to the end of the hour of the day the job was submitted.
            
             var ehour= '23'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
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
        var start=moment(start).format("YYYY-MM-DD 00:00:00.000")
         var end=Queries.find().fetch().pop().endtime
             var end=moment(end).format("YYYY-MM-DD 24:59:99.999")
                          
            
           
              var ehour= '24'
        var start=moment(start).add(5,'days').format("YYYY-MM-DD 00:00:00.000")
         var end=moment(start).add(1,'days').format("YYYY-MM-DD 24:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
       timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
       timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
       timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
       timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
        timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().partnumber
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")  
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
                          
            //count should go from the time the job is submitted to the end of the hour 

             var end=Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc},{sort: {timestamp: 1}, limit: 1}).fetch().pop().timestamp
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 08:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
            
            var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '1'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 09:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
      
          var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '2'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 10:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '3'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 11:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '4'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 12:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '5'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 13:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '6'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 14:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '7'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 15:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '8'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 16:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '9'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 17:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '10'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 18:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '11'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 19:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '12'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 20:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '13'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 21:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '14'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 22:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '15'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 23:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '16'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(5,'days').format("YYYY-MM-DD 24:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '17'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(6,'days').format("YYYY-MM-DD 01:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '18'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(6,'days').format("YYYY-MM-DD 02:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '19'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(6,'days').format("YYYY-MM-DD 03:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '20'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(6,'days').format("YYYY-MM-DD 04:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '21'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(6,'days').format("YYYY-MM-DD 05:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '22'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp 
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000") 
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
              var end=moment(end).add(6,'days').format("YYYY-MM-DD 06:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '23'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
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
              var end=moment(end).add(6,'days').format("YYYY-MM-DD 07:00:00.000")
             var count= Parts.find({timestamp: {$gt: start,$lt: end}, workcenter:wc}).count()
       var workcenter=Queries.find().fetch().pop().workcenter      
          var ehour= '24'
             var timestamp=Parts.findOne({timestamp: {$gt: start,$lt: end}, workcenter:wc}).timestamp  
             timestamp = moment(timestamp).add(5,'days').format("YYYY-MM-DD 07:00:00.000")
         var newend=moment(timestamp).format("YYYY-MM-DD 24:59:99.999")
           if (typeof Planneds.find({timestamp: {$gte: timestamp,$lt: newend}, wc:workcenter,pl: ehour},{sort: {timestamp: 1}, limit: 1}).fetch().pop() =='object')
            {            
              return count
            }
           }

                                                             
});