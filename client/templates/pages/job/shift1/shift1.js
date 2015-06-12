
Meteor.subscribe('parts');

// console.log("This is your cavitation" +Parts.findOne().cavitation);
Template.shift1.helpers({

  calculateTime: function () {
         
          var now = Parts.find().fetch().pop();//This is the last entered parts document
         console.log("This is a test")
         console.log("this is the current submitted job hour" + now.hour)
         now=now.hour
          
         // {
          //only recalculate if there is a new job
          //That is what this if statement is doing essentially
          //I need 
          if (typeof Parts.findOne({hour: now}) === 'object')
          {
 count = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment(Parts.findOne({hour: now }).timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.findOne({hour: now }).quantity) - Number(count))  / Number(Parts.findOne({hour: now }).cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         
if (estimatedminutes <=0)
{

  estimatedminutes=0;
}
         console.log("Estimated minutes to add to current time" + estimatedminutes)
         
          //The way this logic is setup I may need to just have a completion time setup
          //I could also list the number of cycles to go
          //Then list the minutes left??
         
         
         
         
         
         
         return estimatedminutes;
}



         // }

         
        

     },
  
  
  
   earnedHours: function () {
    console.log ("this is the time im trying to subscribe to" +moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD 11:mm:ss.SSS"))
     Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-04 23:mm:ss.SSS"), $lt: moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles: function () {
        //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-03 23:mm:ss.SSS"), $lt: moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * Parts.findOne().cavitation;
  
        
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
     earnedHours1: function () {
     
    // Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.findOne({hour: '07'}).cavitation / Parts.findOne({hour: '07'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles1: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.findOne({hour: '07'}).cavitation;
  
        
        
      },
      earnedHours2: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"),$lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles2: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"),$lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.findOne({hour: '13'}).cavitation;
  
        
        
      },
      earnedHours3: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * (Parts.findOne({hour: '09'}).cavitation / Parts.findOne({hour: '09'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles3: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.findOne({hour: '09'}).cavitation;
  
        
        
      },
      earnedHours4: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * (Parts.findOne({hour: '10'}).cavitation / Parts.findOne({hour: '10'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles4: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * Parts.findOne({hour: '10'}).cavitation;
  
        
        
      },
      earnedHours5: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * (Parts.findOne({hour: '11'}).cavitation / Parts.findOne({hour: '11'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles5: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * Parts.findOne({hour: '11'}).cavitation;
  
        
        
      },
      earnedHours6: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * (Parts.findOne({hour: '12'}).cavitation / Parts.findOne({hour: '12'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles6: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * Parts.findOne({hour: '12'}).cavitation;
  
        
        
      },
      earnedHours7: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * (Parts.findOne({hour: '13'}).cavitation / Parts.findOne({hour: '13'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles7: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.findOne({hour: '13'}).cavitation;
  
        
        
      },
      earnedHours8: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * (Parts.findOne({hour: '14'}).cavitation / Parts.findOne({hour: '14'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles8: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.findOne({hour: '14'}).cavitation;
  
        
        
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
    
    

    changeStatus1: function() {
      
     var earnedHoursCalc = Number(Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.findOne({hour: '07'}).cavitation / Parts.findOne({hour: '07'}).quantity));
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
        console.log ("This is the earnedHoursCal in change status 1" + earnedHoursCalc)
       if (earnedHoursCalc >=1&& Parts.findOne({hour: '07'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& Parts.findOne({hour: '07'}))
      {

        return "Yellow"
      }



    },

    changeStatus2: function() {
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
          earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& Parts.findOne({hour: '08'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& Parts.findOne({hour: '08'}))
      {

        return "Yellow"
      }




    },

    changeStatus3: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * (Parts.findOne({hour: '09'}).cavitation / Parts.findOne({hour: '09'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&& Parts.findOne({hour: '9'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& Parts.findOne({hour: '9'}))
      {

        return "Yellow"
      }




    },

    changeStatus4: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * (Parts.findOne({hour: '10'}).cavitation / Parts.findOne({hour: '10'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& Parts.findOne({hour: '10'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& Parts.findOne({hour: '10'}))
      {

        return "Yellow"
      }



    },

    changeStatus5: function() {
      
     var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * (Parts.findOne({hour: '11'}).cavitation / Parts.findOne({hour: '11'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        earnedHoursCalc= Number(earnedHoursCalc)

       if (earnedHoursCalc >=1&& Parts.findOne({hour: '11'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& Parts.findOne({hour: '11'}))
      {

        return "Yellow"
      }

      


    },

    changeStatus6: function() {
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * (Parts.findOne({hour: '12'}).cavitation / Parts.findOne({hour: '12'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&& Parts.findOne({hour: '12'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& Parts.findOne({hour: '12'}))
      {

        return "Yellow"
      }



    },

    changeStatus7: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * (Parts.findOne({hour: '13'}).cavitation / Parts.findOne({hour: '13'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& Parts.findOne({hour: '13'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& Parts.findOne({hour: '13'}))
      {

        return "Yellow"
      }




    },

    changeStatus8: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * (Parts.findOne({hour: '14'}).cavitation / Parts.findOne({hour: '14'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '14'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '14'}))
      {

        return "Yellow"
      }
},
 part: function() {
   var part =Parts.findOne({hour: '13'})


   return part.partnumber
   },
   quantity: function() {
   var part =Parts.findOne({hour: '13'})


   return part.quantity
   },
   
  part1: function ()
   {

var part =Parts.findOne({hour: '07'})


if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}



   },
   quantity1: function() {
   var part =Parts.findOne({hour: '07'})
   

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
   },
    part2: function ()
   {

  var part =Parts.findOne({hour: '08'})
  

if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}


   },
   quantity2: function() {
   var part =Parts.findOne({hour: '08'})
   

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
   },part3: function ()
   {

  var part =Parts.findOne({hour: '09'})
  

if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}




   },
   quantity3: function() {
  var part =Parts.findOne({hour: '09'})
  

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }

   },part4: function ()
   {

    var part =Parts.findOne({hour: '10'})
    

if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}



   },
   quantity4: function() {
  var part =Parts.findOne({hour: '10'})
  
   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
   },part5: function ()
   {

        var part =Parts.findOne({hour: '11'})
       

if(Number(part.partnumber) >0)
{
   


    return part.partnumber
}

 

   },
   quantity5: function() {
    var part =Parts.findOne({hour: '11'})
   

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }
 
   },part6: function ()
   {

   var part =Parts.findOne({hour: '12'})
   

if(Number(part.partnumber) >0)
{
   


    return part.partnumber
}



   },
   quantity6: function() {
    var part =Parts.findOne({hour: '12'})
    

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }
 
   },part7: function ()
   {

    var part =Parts.findOne({hour: '13'})
    

if(Number(part.partnumber) >0)
{
   


    return part.partnumber
}




   },
   quantity7: function() {
  var part =Parts.findOne({hour: '13'})
  

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }
 
   },part8: function ()
   {
    var part =Parts.findOne({hour: '14'})
    

if(Number(part.partnumber) >0)
{
   


    return part.partnumber
}



   },
   quantity8: function() {
  var part =Parts.findOne({hour: '14'})
 

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }
 
   }


 
});


//Figure out the logic for breaking up the job into 24 hours.
//after that only output 8 hour segments of the job





















// var partStats = {
//     workcenterName: Machines.findOne().machinenumber,
//      partNumber: Parts.findOne().partnumber,
//      partCycleTime: "23",
//      partsPlanned: Parts.findOne().quantity,
//      cavities: Parts.findOne().cavitation,
//      tech: Parts.findOne().initials,
//      startTime: start_time
//  };


























// Meteor.subscribe('parts-to-access', function () {
//     var test = Parts.find({workcenter: '304A'}).fetch();
//     console.log(test[0].cavitation);
// });
// Meteor.subscribe('PressCycles');
// //console.log("Getting a single entry: "+ Parts.find().count() );

// var start_time = moment().hour(7).format("YYYY-MM-DD hh:mm:ss.SSS");
// console.log(start_time);


// Template.job.helpers({
//     calculateTime: function () {
//         //calculate the amount of time needed for the job
//         var estimatedTime = (partStats.partsPlanned / partStats.cavities) * partStats.partCycleTime;
//         return displayHours = moment().startOf('day').seconds(estimatedTime).format('H:mm:ss');
//     },
//     currentTime: function () {
//         Meteor.call("getCurrentTime", {
//             onResultRecieved: function (err, result) {
//                 console.log("RESULT: " + result);
//             }
//         });
//     },
//     incomingCycles: function () {
//         //grab all cycles from today
//         Meteor.subscribe('cycles-recent', partStats.startTime);
//         return (100 * partStats.cavities);
//     },
//     partsPlanned: function () {
//         return partStats.partsPlanned;
//     },
//     partNumber: function () {
//          return partStats.partNumber;
//     },
//     earnedHours: function () {
//         var earnedHoursCalc = (1 * partStats.cavities) / partStats.partsPlanned;
//         return earnedHoursCalc;
//     },
//     parts: function() {
//     return Parts.find();
//    },
//    columns: function() {
//      // the context is a part
//      var result = _.values(this.data);
//      result.unshift(this.text);
//      return result;
// }
// });