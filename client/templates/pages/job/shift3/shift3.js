Meteor.subscribe('cycles-recent', moment().subtract(3, 'days').format("YYYY-MM-DD HH:MM:ss.SSS"))


// console.log("This is your cavitation" +Parts.findOne().cavitation);
console.log("This is yesterday at 11:00 " + moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))

console.log("This the start of today" +moment().format("YYYY-MM-DD 00:00:00.000") )
Template.shift3.helpers({
  calculateTime: function () {
         //calculate the amount of time needed for the job
         count = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment(Parts.findOne().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD H:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.findOne().quantity) - Number(count))  / Number(Parts.findOne().cavitation);

//I need to find a way to convert the estimated time to seconds.
//I will multiply estimatedTime by the time/cycle to get the seconds for how 
//long the project will take until it is finished.
secondsLeft= estimatedTime * 10;   //This ten is a place holder for the time/cycle
//I will need to calculate the time/cycle at some point and have it updated constantly

//Then I need to convert the seconds into minutes and hours
//Then output this to the job page
minutes= secondsLeft/60
seconds = secondsLeft%60
         estimatedminutes=parseInt(estimatedTime/60);
         console.log("Estimated minutes" + estimatedminutes)
         estimatedseconds=estimatedTime%60;
         displayHours = moment(Parts.findOne().timestamp.toString()).add(estimatedminutes, 'm').add(estimatedseconds, 's').format("H:mm:ss.SSS");
         
         
         
         
         return displayHours;

     },
  insert: function(){


  },
  parts: function() {
    return Parts.find();
   },
   columns: function() {
     // the context is a part
     var result = _.values(this.data);
     result.unshift(this.text);
     return result;
   },
   earnedHours: function () {
    
    console.log("Here is the earned hours" + Cycles.find({CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"),$lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count())
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"),$lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles: function () {
        //grab all cycles from today
      
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.

    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.findOne().cavitation;
  
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
     earnedHours17: function () {
     
    // Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))

    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"),$lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles17: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    // return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}}).count() * Parts.findOne({hour:'23'}).cavitation;
  
      return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.findOne().cavitation;
     
        
      },
      earnedHours18: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 00:00:00.000"),$lt: moment().format("YYYY-MM-DD 01:00:00.000")}}).count() * (Parts.findOne({hour:'00'}).cavitation / Parts.findOne({hour:'00'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles18: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 00:00:00.000"),$lt: moment().format("YYYY-MM-DD 01:00:00.000")}}).count() * Parts.findOne({hour:'00'}).cavitation;
  
        
        
      },
      earnedHours19: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 01:00:00.000"), $lt: moment().format("YYYY-MM-DD 02:00:00.000")}}).count() * (Parts.findOne({hour:'01'}).cavitation / Parts.findOne({hour:'01'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles19: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 01:00:00.000"), $lt: moment().format("YYYY-MM-DD 02:00:00.000")}}).count() * Parts.findOne({hour:'01'}).cavitation;
  
        
        
      },
      earnedHours20: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 02:00:00.000"), $lt: moment().format("YYYY-MM-DD 03:00:00.000")}}).count() * (Parts.findOne({hour:'02'}).cavitation / Parts.findOne({hour:'02'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles20: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 02:00:00.000"), $lt: moment().format("YYYY-MM-DD 03:00:00.000")}}).count() * Parts.findOne({hour:'02'}).cavitation;
  
        
        
      },
      earnedHours21: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 03:00:00.000"), $lt: moment().format("YYYY-MM-DD 04:00:00.000")}}).count() * (Parts.findOne({hour:'03'}).cavitation / Parts.findOne({hour:'03'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles21: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 03:00:00.000"), $lt: moment().format("YYYY-MM-DD 04:00:00.000")}}).count() * Parts.findOne({hour:'03'}).cavitation;
  
        
        
      },
      earnedHours22: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 04:00:00.000"), $lt: moment().format("YYYY-MM-DD 05:00:00.000")}}).count() * (Parts.findOne({hour:'04'}).cavitation / Parts.findOne({hour:'04'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles22: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 04:00:00.000"), $lt: moment().format("YYYY-MM-DD 05:00:00.000")}}).count() * Parts.findOne({hour:'04'}).cavitation;
  
        
        
      },
      earnedHours23: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 05:00:00.000"), $lt: moment().format("YYYY-MM-DD 06:00:00.000")}}).count() * (Parts.findOne({hour:'05'}).cavitation / Parts.findOne({hour:'05'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles23: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 05:00:00.000"), $lt: moment().format("YYYY-MM-DD 06:00:00.000")}}).count() * Parts.findOne({hour:'05'}).cavitation;
  
        
        
      },
      earnedHours24: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 06:00:00.000"), $lt: moment().format("YYYY-MM-DD 07:00:00.000")}}).count() * (Parts.findOne({hour:'06'}).cavitation / Parts.findOne({hour:'06'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles24: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    return Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 06:00:00.000"), $lt: moment().format("YYYY-MM-DD 07:00:00.000")}}).count() * Parts.findOne({hour:'06'}).cavitation;
  
        
        
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
      
     var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);

      if (earnedHoursCalc >=1&&Parts.findOne({hour: '08'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '08'}))
      {

        return "Yellow"
      }



    },

    changeStatus17: function() {
      
     var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}}).count() * (Parts.findOne({hour: '23'}).cavitation / Parts.findOne({hour: '23'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);

       if (earnedHoursCalc >=1&&Parts.findOne({hour: '23'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '23'}))
      {

        return "Yellow"
      }



    },

    changeStatus18: function() {
     var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 00:00:00.000"), $lt: moment().format("YYYY-MM-DD 01:00:00.000")}}).count() * (Parts.findOne({hour: '00'}).cavitation / Parts.findOne({hour: '00'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);

       if (earnedHoursCalc >=1&&Parts.findOne({hour: '00'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '00'}))
      {

        return "Yellow"
      }



    },

    changeStatus19: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 01:00:00.000"), $lt: moment().format("YYYY-MM-DD 02:00:00.000")}}).count() * (Parts.findOne({hour: '01'}).cavitation / Parts.findOne({hour: '01'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);

      if (earnedHoursCalc >=1&&Parts.findOne({hour: '01'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '01'}))
      {

        return "Yellow"
      }



    },

    changeStatus20: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 02:00:00.000"), $lt: moment().format("YYYY-MM-DD 03:00:00.000")}}).count() * (Parts.findOne({hour: '02'}).cavitation / Parts.findOne({hour: '02'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);

      if (earnedHoursCalc >=1&&Parts.findOne({hour: '02'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '02'}))
      {

        return "Yellow"
      }



    },

    changeStatus21: function() {
      
     var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 03:00:00.000"), $lt: moment().format("YYYY-MM-DD 04:00:00.000")}}).count() * (Parts.findOne({hour: '03'}).cavitation / Parts.findOne({hour: '03'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);

       if (earnedHoursCalc >=1&&Parts.findOne({hour: '03'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '03'}))
      {

        return "Yellow"
      }
      


    },

    changeStatus22: function() {
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 04:00:00.000"), $lt: moment().format("YYYY-MM-DD 05:00:00.000")}}).count() * (Parts.findOne({hour: '04'}).cavitation / Parts.findOne({hour: '04'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);

       if (earnedHoursCalc >=1&&Parts.findOne({hour: '04'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '04'}))
      {

        return "Yellow"
      }
      


    },

    changeStatus23: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 05:00:00.000"), $lt: moment().format("YYYY-MM-DD 06:00:00.000")}}).count() * (Parts.findOne({hour: '05'}).cavitation / Parts.findOne({hour: '05'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);

if (earnedHoursCalc >=1&&Parts.findOne({hour: '05'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '05'}))
      {

        return "Yellow"
      }
      



    },

    changeStatus24: function() {
      
      var earnedHoursCalc = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 06:00:00.000"), $lt: moment().format("YYYY-MM-DD 07:00:00.000")}}).count() * (Parts.findOne({hour: '06'}).cavitation / Parts.findOne({hour: '06'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);

     if (earnedHoursCalc >=1&&Parts.findOne({hour: '06'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '06'}))
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

var part =Parts.findOne({hour: '23'})
if(part.partnumber >=0)
{
   


    return part.partnumber
}

else {

return "0"

  }

   },
   quantity1: function() {
   var part =Parts.findOne({hour: '23'})
   if(part.quantity>=0)
   {
   


   return part.quantity
 }
 else
 {

  return "0"
 }
   },
    part2: function ()
   {

  var part =Parts.findOne({hour: '00'})
if(part.partnumber >=0)
{
   


    return part.partnumber
}

else {

return "0"

  }

   },
   quantity2: function() {
   var part =Parts.findOne({hour: '00'})
   if(part.quantity>=0)
   {
   


   return part.quantity
 }
 else
 {

  return "0"
 }
   },part3: function ()
   {

  var part =Parts.findOne({hour: '01'})
if(part.partnumber >=0)
{
   


    return part.partnumber
}

else {

return "0"

  }


   },
   quantity3: function() {
  var part =Parts.findOne({hour: '01'})
   if(part.quantity>=0)
   {
   


   return part.quantity
 }
 else
 {

  return "0"
 }
   },part4: function ()
   {

    var part =Parts.findOne({hour: '02'})
if(part.partnumber >=0)
{
   


    return part.partnumber
}

else {

return "0"

  }

   },
   quantity4: function() {
  var part =Parts.findOne({hour: '02'})
   if(part.quantity>=0)
   {
   


   return part.quantity
 }
 else
 {

  return "0"
 }
   },part5: function ()
   {

        var part =Parts.findOne({hour: '03'})
if(part.partnumber >0)
{
   


    return part.partnumber
}

else {

return "0"

  }

   },
   quantity5: function() {
    var part =Parts.findOne({hour: '03'})
   if(part.quantity>0)
   {
   


   return part.quantity
 }
 else
 {

  return "0"
 }
   },part6: function ()
   {

   var part =Parts.findOne({hour: '04'})
if(part.partnumber >0)
{
   


    return part.partnumber
}

else {

return "0"

  }

   },
   quantity6: function() {
    var part =Parts.findOne({hour: '04'})
   if(part.quantity>0)
   {
   


   return part.quantity
 }
 else
 {

  return "0"
 }
   },part7: function ()
   {

    var part =Parts.findOne({hour: '05'})
if(part.partnumber >0)
{
   


    return part.partnumber
}

else {

return "0"

  }


   },
   quantity7: function() {
  var part =Parts.findOne({hour: '05'})
   if(part.quantity>0)
   {
   


   return part.quantity
 }
 else
 {

  return "0"
 }
   },part8: function ()
   {
    var part =Parts.findOne({hour: '06'})
if(part.partnumber >0)
{
   


    return part.partnumber
}

else {

return "0"

  }

   },
   quantity8: function() {
  var part =Parts.findOne({hour: '06'})
   if(part.quantity>0)
   {
   


   return part.quantity
 }
 else
 {

  return "0"
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