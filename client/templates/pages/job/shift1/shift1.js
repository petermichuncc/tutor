
Meteor.subscribe('parts');

// console.log("This is your cavitation" +Parts.findOne().cavitation);
Template.shift1.helpers({

   calculateTime: function () {
         
//The calculate time function needs to always show the time for the most recently submitted job
//This current calculation does not take into account jobs that may be submitted during the same hour
//if a fetch the latest timestamp I might can use this 
//basically do a pop to get access to the most recent minute
//use this minute is my calculateTime function


          var now = Parts.find().fetch().pop();//This is the last entered parts document
         
         now=now.hour
         min=moment(Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
         console.log("This is the minute of the submitted job" + moment(Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm"))//this is the latest submitted hour
         num= Machines.find().fetch().pop();
     num=num.machinenumber
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.findOne({hour: now , minute: min}).timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.findOne({hour: now, minute: min }).quantity) - Number(count))  / Number(Parts.findOne({hour: now , minute: min}).cavitation);
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
  hour1p: function () {
     //under what condition should i use and additional row?
     //if the latest minute is greater than the previous add this row
     var now = Parts.find().fetch().pop();//This is the last entered parts document
         
         now=now.hour
         min=moment(Parts.find({hour: '07'}).fetch().pop().timestamp.toString()).format("mm")
         
         console.log("This is the minute of the submitted job" + moment(Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm"))//this is the latest submitted hour
         //basically this logic finds out if the newest submitted job has a greater minute than the previous submitted job for that hour
         //the purpose is to figure out if I need to put a new hour row because there was a new job submitted during that hour
if (Number(moment(Parts.find({hour: '07'}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:'07'}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )

     return "1"
   },
   hour2p: function () {
    
         
if (Number(moment(Parts.find({hour: '08'}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:'08'}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )

     return "2"
   },
   hour3p: function () {
    
         
if (Number(moment(Parts.find({hour: '09'}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:'09'}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )

     return "3"
   },
   hour4p: function () {
    if (Number(moment(Parts.find({hour: '10'}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:'11'}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )

     return "4"
   },
   hour5p: function () {
   if (Number(moment(Parts.find({hour: '11'}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:'12'}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )

     return "5"
   },
   hour6p: function () {
    if (Number(moment(Parts.find({hour: '12'}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:'13'}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )

     return "6"
   },
   hour7p: function () {
    if (Number(moment(Parts.find({hour: '13'}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:'14'}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )

     return "7"
   },
   hour8p: function () {
    if (Number(moment(Parts.find({hour: '14'}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:'15'}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )

     return "8"
   },
     
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
     earnedHours1: function () {
     
    // Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '07'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.findOne({hour: '07'}).cavitation / Parts.findOne({hour: '07'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles1: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '07'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.findOne({hour: '07'}).cavitation;
  }
        
        
      },
      earnedHours2: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
          if (typeof Parts.findOne({hour: '08'}) === 'object')
      {
         var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"),$lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles2: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '08'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"),$lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.findOne({hour: '13'}).cavitation;
  
        }
        
      },
      earnedHours3: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '09'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * (Parts.findOne({hour: '09'}).cavitation / Parts.findOne({hour: '09'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles3: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '09'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.findOne({hour: '09'}).cavitation;
  
        }
        
      },
      earnedHours4: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '10'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * (Parts.findOne({hour: '10'}).cavitation / Parts.findOne({hour: '10'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles4: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '10'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * Parts.findOne({hour: '10'}).cavitation;
  }
        
        
      },
      earnedHours5: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '11'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * (Parts.findOne({hour: '11'}).cavitation / Parts.findOne({hour: '11'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles5: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '11'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * Parts.findOne({hour: '11'}).cavitation;
  }
        
        
      },
      earnedHours6: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '12'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * (Parts.findOne({hour: '12'}).cavitation / Parts.findOne({hour: '12'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles6: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '12'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * Parts.findOne({hour: '12'}).cavitation;
  }
        
        
      },
      earnedHours7: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '13'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * (Parts.findOne({hour: '13'}).cavitation / Parts.findOne({hour: '13'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles7: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '13'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.findOne({hour: '13'}).cavitation;
  }
        
        
      },
      earnedHours8: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
       num= Machines.find().fetch().pop();
     num=num.machinenumber
        if (typeof Parts.findOne({hour: '14'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * (Parts.findOne({hour: '14'}).cavitation / Parts.findOne({hour: '14'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles8: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '14'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.findOne({hour: '14'}).cavitation;
  }
        
        
      },

     earnedHours1p: function () {
     
    // Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '07'}) === 'object')
      {
        if (Number(moment(Parts.find({hour: '07'}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:'07'}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )
      {
    
   
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.findOne({hour: '07'}).cavitation / Parts.findOne({hour: '07'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
      }
            },
     incomingCycles1p: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '07'}) === 'object')
      {

        if (Number(moment(Parts.find({hour: '07'}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:'07'}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )

    {
   
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.findOne({hour: '07'}).cavitation;
    }  
  }
        
        
      },
      earnedHours2p: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
          if (typeof Parts.findOne({hour: '08'}) === 'object')
      {
         var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"),$lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles2p: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '08'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"),$lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.findOne({hour: '13'}).cavitation;
  
        }
        
      },
      earnedHours3p: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '09'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * (Parts.findOne({hour: '09'}).cavitation / Parts.findOne({hour: '09'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles3p: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '09'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.findOne({hour: '09'}).cavitation;
  
        }
        
      },
      earnedHours4p: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '10'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * (Parts.findOne({hour: '10'}).cavitation / Parts.findOne({hour: '10'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles4p: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '10'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * Parts.findOne({hour: '10'}).cavitation;
  }
        
        
      },
      earnedHours5p: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '11'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * (Parts.findOne({hour: '11'}).cavitation / Parts.findOne({hour: '11'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles5p: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '11'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * Parts.findOne({hour: '11'}).cavitation;
  }
        
        
      },
      earnedHours6p: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
        num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '12'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * (Parts.findOne({hour: '12'}).cavitation / Parts.findOne({hour: '12'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles6p: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '12'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * Parts.findOne({hour: '12'}).cavitation;
  }
        
        
      },
      earnedHours7p: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         num= Machines.find().fetch().pop();
     num=num.machinenumber
         if (typeof Parts.findOne({hour: '13'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * (Parts.findOne({hour: '13'}).cavitation / Parts.findOne({hour: '13'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles7p: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '13'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.findOne({hour: '13'}).cavitation;
  }
        
        
      },
      earnedHours8p: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
       num= Machines.find().fetch().pop();
     num=num.machinenumber
        if (typeof Parts.findOne({hour: '14'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * (Parts.findOne({hour: '14'}).cavitation / Parts.findOne({hour: '14'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
            },
     incomingCycles8p: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     if (typeof Parts.findOne({hour: '14'}) === 'object')
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.findOne({hour: '14'}).cavitation;
  }
        
        
      }, 
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
    
    

    changeStatus1: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     var earnedHoursCalc = Number(Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.findOne({hour: '07'}).cavitation / Parts.findOne({hour: '07'}).quantity));
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
        console.log ("This is the earnedHoursCal in change status 1" + earnedHoursCalc)
       if (earnedHoursCalc >=1&& typeof Parts.findOne({hour: '07'}) === 'object')
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& typeof Parts.findOne({hour: '07'}) === 'object')
      {

        return "Yellow"
      }



    },
     changeStatus1p: function() {
 
num= Machines.find().fetch().pop();
     num=num.machinenumber
 
     var earnedHoursCalc = Number(Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity));
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& typeof Parts.find({hour: '07'}).fetch().pop() === 'object')
      { 
         if (Number(Parts.find({hour: '07'}).fetch().pop().minute) >  Number (Parts.find({hour:'07'}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute))
     {
    return "Green"
    }
      }

      else if (earnedHoursCalc <1&& typeof Parts.find({hour: '07'}).fetch().pop() === 'object')
  {
  if (Number(Parts.find({hour: '07'}).fetch().pop().minute) >  Number (Parts.find({hour:'07'}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute))
     {
    return "Yellow"
   }
 }
      // }
    },

    changeStatus2: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.findOne({hour: '08'}).cavitation / Parts.findOne({hour: '08'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
          earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& typeof Parts.findOne({hour: '08'}) === 'object')
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& typeof Parts.findOne({hour: '08'}) === 'object')
      {

        return "Yellow"
      }




    },

    changeStatus3: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * (Parts.findOne({hour: '09'}).cavitation / Parts.findOne({hour: '09'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
     if (earnedHoursCalc >=1&& typeof Parts.findOne({hour: '09'}) === 'object')
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& typeof Parts.findOne({hour: '09'}) === 'object')
      {

        return "Yellow"
      }




    },

    changeStatus4: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * (Parts.findOne({hour: '10'}).cavitation / Parts.findOne({hour: '10'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& typeof Parts.findOne({hour: '10'}) === 'object')
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& typeof Parts.findOne({hour: '10'}) === 'object')
      {

        return "Yellow"
      }



    },

    changeStatus5: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * (Parts.findOne({hour: '11'}).cavitation / Parts.findOne({hour: '11'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        earnedHoursCalc= Number(earnedHoursCalc)

       if (earnedHoursCalc >=1&& typeof Parts.findOne({hour: '11'}) === 'object')
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& typeof Parts.findOne({hour: '11'}) === 'object')
      {

        return "Yellow"
      }


      


    },

    changeStatus6: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * (Parts.findOne({hour: '12'}).cavitation / Parts.findOne({hour: '12'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&& typeof Parts.findOne({hour: '12'}) === 'object')
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& typeof Parts.findOne({hour: '12'}) === 'object')
      {

        return "Yellow"
      }




    },

    changeStatus7: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * (Parts.findOne({hour: '13'}).cavitation / Parts.findOne({hour: '13'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& typeof Parts.findOne({hour: '13'}) === 'object')
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& typeof Parts.findOne({hour: '13'}) === 'object')
      {

        return "Yellow"
      }





    },

    changeStatus8: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * (Parts.findOne({hour: '14'}).cavitation / Parts.findOne({hour: '14'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& typeof Parts.findOne({hour: '14'}) === 'object')
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& typeof Parts.findOne({hour: '14'}) === 'object')
      {

        return "Yellow"
      }

},

  part1: function ()
   {

var part =Parts.findOne({hour: '07'})


if(typeof Parts.findOne({hour: '07'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity1: function() {
   var part =Parts.findOne({hour: '07'})
   

   if(typeof Parts.findOne({hour: '07'}) === 'object')
   {
   


   return part.quantity
 }
 
   },
    part2: function ()
   {

  var part =Parts.findOne({hour: '08'})
  

if(typeof Parts.findOne({hour: '08'}) === 'object')
{
   


    return part.partnumber
}


   },
   quantity2: function() {
   var part =Parts.findOne({hour: '08'})
   

   if(typeof Parts.findOne({hour: '08'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part3: function ()
   {

  var part =Parts.findOne({hour: '09'})
  

if(typeof Parts.findOne({hour: '09'}) === 'object')
{
   


    return part.partnumber
}




   },
   quantity3: function() {
  var part =Parts.findOne({hour: '09'})
  

   if(typeof Parts.findOne({hour: '09'}) === 'object')
   {
   


   return part.quantity
 }

   },part4: function ()
   {

    var part =Parts.findOne({hour: '10'})
    

if(typeof Parts.findOne({hour: '10'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity4: function() {
  var part =Parts.findOne({hour: '10'})
  
   if(typeof Parts.findOne({hour: '10'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part5: function ()
   {

        var part =Parts.findOne({hour: '11'})
       

if(typeof Parts.findOne({hour: '11'}) === 'object')
{
   


    return part.partnumber
}

 

   },
   quantity5: function() {
    var part =Parts.findOne({hour: '11'})
   

   if(typeof Parts.findOne({hour: '11'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part6: function ()
   {

   var part =Parts.findOne({hour: '12'})
   

if(typeof Parts.findOne({hour: '12'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity6: function() {
    var part =Parts.findOne({hour: '12'})
    

   if(typeof Parts.findOne({hour: '12'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part7: function ()
   {

    var part =Parts.findOne({hour: '13'})
    

if(typeof Parts.findOne({hour: '13'}) === 'object')
{
   


    return part.partnumber
}




   },
   quantity7: function() {
  var part =Parts.findOne({hour: '13'})
  

   if(typeof Parts.findOne({hour: '13'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part8: function ()
   {
    var part =Parts.findOne({hour: '14'})
    

if(typeof Parts.findOne({hour: '14'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity8: function() {
  var part =Parts.findOne({hour: '14'})
 

   if(typeof Parts.findOne({hour: '14'}) === 'object')
   {
   


   return part.quantity
 }
 
   },


  part1p: function ()
   {

var part =Parts.findOne({hour: '07'})


if(typeof Parts.findOne({hour: '07'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity1p: function() {
   var part =Parts.findOne({hour: '07'})
   

   if(typeof Parts.findOne({hour: '07'}) === 'object')
   {
   


   return part.quantity
 }
 
   },
    part2p: function ()
   {

  var part =Parts.findOne({hour: '08'})
  

if(typeof Parts.findOne({hour: '08'}) === 'object')
{
   


    return part.partnumber
}


   },
   quantity2p: function() {
   var part =Parts.findOne({hour: '08'})
   

   if(typeof Parts.findOne({hour: '08'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part3p: function ()
   {

  var part =Parts.findOne({hour: '09'})
  

if(typeof Parts.findOne({hour: '09'}) === 'object')
{
   


    return part.partnumber
}




   },
   quantity3p: function() {
  var part =Parts.findOne({hour: '09'})
  

   if(typeof Parts.findOne({hour: '09'}) === 'object')
   {
   


   return part.quantity
 }

   },part4p: function ()
   {

    var part =Parts.findOne({hour: '10'})
    

if(typeof Parts.findOne({hour: '10'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity4p: function() {
  var part =Parts.findOne({hour: '10'})
  
   if(typeof Parts.findOne({hour: '10'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part5p: function ()
   {

        var part =Parts.findOne({hour: '11'})
       

if(typeof Parts.findOne({hour: '11'}) === 'object')
{
   


    return part.partnumber
}

 

   },
   quantity5p: function() {
    var part =Parts.findOne({hour: '11'})
   

   if(typeof Parts.findOne({hour: '11'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part6p: function ()
   {

   var part =Parts.findOne({hour: '12'})
   

if(typeof Parts.findOne({hour: '12'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity6p: function() {
    var part =Parts.findOne({hour: '12'})
    

   if(typeof Parts.findOne({hour: '12'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part7p: function ()
   {

    var part =Parts.findOne({hour: '13'})
    

if(typeof Parts.findOne({hour: '13'}) === 'object')
{
   


    return part.partnumber
}




   },
   quantity7p: function() {
  var part =Parts.findOne({hour: '13'})
  

   if(typeof Parts.findOne({hour: '13'}) === 'object')
   {
   


   return part.quantity
 }
 
   },part8p: function ()
   {
    var part =Parts.findOne({hour: '14'})
    

if(typeof Parts.findOne({hour: '14'}) === 'object')
{
   


    return part.partnumber
}



   },
   quantity8p: function() {
  var part =Parts.findOne({hour: '14'})
 

   if(typeof Parts.findOne({hour: '14'}) === 'object')
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