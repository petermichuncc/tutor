
 

// console.log("This is your cavitation" +Parts.findOne().cavitation);



Template.job.helpers({
    
  calculateTime: function () {
         

//I need to have submitted jobs calculate time using the collection for that submitted job
//until the estimated minutes are up then use the next submitted job if there is one
//
//take the hour of the current time stamp
//I could have only one job saved at at time then it is erased
//or I could have an additional collection that is used only as an hour recorder
//for the current job.  Once a new job is submitted this hour recorder is erased
//I think that is the best option
          var now = Parts.find().fetch().pop();//This is the last entered parts document
         console.log("This is a test")
         console.log("this is the current submitted job hour" + now.hour)
         now=now.hour
         
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
         
       estimatedhours = estimatedminutes/60;
       estimatedhours = parseInt(estimatedhours)
       estimatedminutes=estimatedminutes%60;

         
         
       if (estimatedhours===1)
         {
         return estimatedhours.toString().concat(" hour left and ",estimatedminutes," minutes left");

}
else 
{
  return estimatedhours.toString().concat(" hours left and ",estimatedminutes," minutes left");
}


         // }

         
        

     },
   hour: function () {
    return "Total"
   },
   hour1: function () {
    return "1"
   },
   hour2: function () {
    return "2"
   },
   hour3: function () {
    return "3"
   },
   hour4: function () {
    return "4"
   },
   hour5: function () {
    return "5"
   },
   hour6: function () {
    return "6"
   },
   hour7: function () {
    return "7"
   },
   hour8: function () {
    return "8"
   },
   earnedHours: function () {
    
     Meteor.subscribe('parts'); 
     Meteor.subscribe('machines');
      Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
     num= Machines.find().fetch().pop();
     num=num.machinenumber
    console.log("Here is the earned hours" + Cycles.find({CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"),$lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count())
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         if (typeof Parts.findOne({hour: '14'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"),$lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * (Parts.findOne({hour: '11'}).cavitation / Parts.findOne({hour: '11'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles: function () {
        //grab all cycles from today
      
       num= Machines.find().fetch().pop();
     num=num.machinenumber
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: '14'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.findOne({hour: '11'}).cavitation;
  }
        
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
     earnedHours1: function () {

    // Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
    
    //The Cycles find only looks at the first thing you send in to it.
         if (typeof Parts.findOne({hour: '23'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}}).count() * (Parts.findOne({hour: '23'}).cavitation / Parts.findOne({hour: '23'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles1: function () {
        //grab all cycles from today
      
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: '23'}) === 'object')
      {
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}}).count() * Parts.findOne({hour: '23'}).cavitation;
  }
        
      },
      earnedHours2: function () {
    
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 00:00:00.000"), $lt: moment().format("YYYY-MM-DD 01:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 00:00:00.000"), $lt: moment().format("YYYY-MM-DD 01:00:00.000")}}).count() * Parts.findOne().cavitation;
  
        
        
      },
      earnedHours3: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 01:00:00.000"), $lt: moment().format("YYYY-MM-DD 02:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 01:00:00.000"), $lt: moment().format("YYYY-MM-DD 02:00:00.000")}}).count() * Parts.findOne().cavitation;
  
        
        
      },
      earnedHours4: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 02:00:00.000"), $lt: moment().format("YYYY-MM-DD 03:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 02:00:00.000"), $lt: moment().format("YYYY-MM-DD 03:00:00.000")}}).count() * Parts.findOne().cavitation;
  
        
        
      },
      earnedHours5: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 03:00:00.000"), $lt: moment().format("YYYY-MM-DD 04:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 03:00:00.000"), $lt: moment().format("YYYY-MM-DD 04:00:00.000")}}).count() * Parts.findOne().cavitation;
  
        
        
      },
      earnedHours6: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 04:00:00.000"), $lt: moment().format("YYYY-MM-DD 05:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 04:00:00.000"), $lt: moment().format("YYYY-MM-DD 05:00:00.000")}}).count() * Parts.findOne().cavitation;
  
        
        
      },
      earnedHours7: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 05:00:00.000"), $lt: moment().format("YYYY-MM-DD 06:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 05:00:00.000"), $lt: moment().format("YYYY-MM-DD 06:00:00.000")}}).count() * Parts.findOne().cavitation;
  
        
        
      },
      earnedHours8: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 06:00:00.000"), $lt: moment().format("YYYY-MM-DD 07:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 06:00:00.000"), $lt: moment().format("YYYY-MM-DD 07:00:00.000")}}).count() * Parts.findOne().cavitation;
  
        
        
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
    progressBar: function () {
        //calculate the amount of time needed for the job
        //This function will require converting the string to a number
        //Then converting the number to minutes, then dividing the minutes 
        //I will try to use this for the changing the progress bar
        console.log("This is the formatted data" +moment(displayHours).format("h"));
        var percent = moment(Parts.findOne().timestamp.toString()).format("h")/moment(displayHours).format("h");
        percent = percent *100;

         return  Math.round(percent);
         
    },
    changeStatus: function() {
      //add if statements like these to get rid of the error messages that pop up on each page.
      if (typeof Parts.findOne({hour: '08'}) === 'object')
      {
     var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >1&& typeof Parts.findOne({hour: '08'}) === 'object')
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& typeof Parts.findOne({hour: '08'}) === 'object')
      {

        return "Yellow"
      }

}
    },

     changeStatus1: function() {
      
     var earnedHoursCalc = Number(Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity));
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& Parts.findOne({hour: '23'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& Parts.findOne({hour: '23'}))
      {

        return "Yellow"
      }



    },

    changeStatus2: function() {
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& Parts.findOne({hour: '8'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& Parts.findOne({hour: '8'}))
      {

        return "Yellow"
      }




    },

    changeStatus3: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
      
     var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity);
         
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
     part: function ()
   {

var part =Parts.findOne({hour: '08'})


if(typeof Parts.findOne({hour: '08'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity: function() {
   var part =Parts.findOne({hour: '08'})
   

   if(typeof Parts.findOne({hour: '08'}) === 'object')
   {
   


   return part.quantity
 }
 
   },
   
   part1: function ()
   {

var part =Parts.findOne({hour: '23'})


if(typeof Parts.findOne({hour: '23'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity1: function() {
   var part =Parts.findOne({hour: '23'})
   

   if(typeof Parts.findOne({hour: '23'}) === 'object')
   {
   


   return part.quantity
 }
 
   },
    part2: function ()
   {

  var part =Parts.findOne({hour: '00'})


if(typeof Parts.findOne({hour: '00'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity2: function() {
   var part =Parts.findOne({hour: '00'})
   

   (typeof Parts.findOne({hour: '00'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part3: function ()
   {

  var part =Parts.findOne({hour: '01'})
  

if(typeof Parts.findOne({hour: '01'}) === 'object')
{
   


    return part.partnumber
}




   },
   quantity3: function() {
  var part =Parts.findOne({hour: '01'})
  

   if(typeof Parts.findOne({hour: '01'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part4: function ()
   {

    var part =Parts.findOne({hour: '02'})
    

if(typeof Parts.findOne({hour: '02'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity4: function() {
  var part =Parts.findOne({hour: '02'})
  

   if(typeof Parts.findOne({hour: '02'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part5: function ()
   {

        var part =Parts.findOne({hour: '03'})
        

if(typeof Parts.findOne({hour: '03'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity5: function() {
    var part =Parts.findOne({hour: '03'})
    

   if(typeof Parts.findOne({hour: '03'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part6: function ()
   {

   var part =Parts.findOne({hour: '04'})
   

if(typeof Parts.findOne({hour: '04'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity6: function() {
    var part =Parts.findOne({hour: '04'})
    

   if(typeof Parts.findOne({hour: '04'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part7: function ()
   {

    var part =Parts.findOne({hour: '05'})
    

if(typeof Parts.findOne({hour: '05'}) === 'object')
{
   


    return part.partnumber
}




   },
   quantity7: function() {
  var part =Parts.findOne({hour: '05'})
  

   if(typeof Parts.findOne({hour: '05'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part8: function ()
   {
    var part =Parts.findOne({hour: '06'})
    

if(typeof Parts.findOne({hour: '06'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity8: function() {
  var part =Parts.findOne({hour: '06'})
  

   if(typeof Parts.findOne({hour: '06'}) === 'object')
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