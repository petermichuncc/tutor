
 

// console.log("This is your cavitation" +Parts.findOne().cavitation);



Template.job.helpers({
    
  calculateTime: function () {
         
//The calculate time function needs to always show the time for the most recently submitted job
//This current calculation does not take into account jobs that may be submitted during the same hour
//if a fetch the latest timestamp I might can use this 
//basically do a pop to get access to the most recent minute
//use this minute is my calculateTime function


          var now = Parts.find().fetch().pop();//This is the last entered parts document
         console.log("This is a test")
         console.log("this is the current submitted job hour" + now.hour)
         now=now.hour
         min=moment(Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
         console.log ("This is the minute of the second to lastest item in collection" +moment(Parts.find({}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) //second to last item in collection
         //I'll use this for comparison to figure out if I need to create a new row 
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
     //if the latest minute is greater than the previous added to this row
     now= moment().format('HH');
     if (Number(Parts.find({hour: now}).fetch().pop().minute) >  Number (Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute))
    {
     return "1"
   }
   },
   hour2p: function () {
    return "2"
   },
   hour3p: function () {
    return "3"
   },
   hour4p: function () {
    return "4"
   },
   hour5p: function () {
    return "5"
   },
   hour6p: function () {
    return "6"
   },
   hour7p: function () {
    return "7"
   },
   hour8p: function () {
    return "8"
   },
   earnedHours: function () {
    
     Meteor.subscribe('parts'); 
     Meteor.subscribe('machines');
      Meteor.subscribe('cycles-recent', moment().subtract(3, 'days').format("YYYY-MM-DD 23:00:00.000"))
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     now=moment().format("YYYY-MM-DD HH:00:00.000")
     nowh=moment().format("HH")
     later= moment.add(1, 'hours').format("YYYY-MM-DD HH:00:00.000");
    console.log("Here is the earned hours" + Cycles.find({CycleTimeStamp: {$gte: now,$lt: later}}).count())
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
         if (typeof Parts.findOne({hour: 'now'}) === 'object')
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: now,$lt: later}}).count() * (Parts.findOne({hour: nowh}).cavitation / Parts.findOne({hour: nowh}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }

      else
      {

 var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: now,$lt: later}}).count() ;
         
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
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.findOne({hour: '14'}).cavitation;
  }
  else
      {

 return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count()

      }
        
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
     earnedHours1: function () {

    // Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
    //this code should start the from time stamp of the job occuring in this particular hour range
    //this hour range is from 11pmyesterday to midnight yesterday
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
         if (typeof Parts.findOne({hour: now}) === 'object'  && count ===1)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-13 09:00:00.000"), $lt: moment().add(1,'hours').format("YYYY-MM-13 10:00:00.000")}}).count() * (Parts.findOne({hour: now}).cavitation / Parts.findOne({hour: now}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
      //I need to have the start time be the same
      //The end time will be the time stamp that is from the job submitted right after the first job
      //if the count is 2 then I will need to get the time stamp of the second to latest submitted job
      else if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-13 09:00:00.000"), $lt: moment(Parts.find({hour: now}).fetch().pop().timestamp).add(1,'hours').format("YYYY-MM-13 10:00:00.000")}}).count() * (Parts.findOne({hour: now}).cavitation / Parts.findOne({hour: now}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
         //under what condition should i use and additional row?
     //if the latest minute is greater than the previous added to this row
     
     //Number(Parts.find({hour: now}).fetch().pop().minute) This is the latest minute
      //Number (Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute) This is 2nd to latest entries minute
    

      }
            },
     incomingCycles1: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber
       now=moment().format("HH")
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-13 09:00:00.000"), $lt: moment().format("YYYY-MM-13 10:00:00.000")}}).count() * Parts.findOne({hour: now}).cavitation;
  }
        
      },
      earnedHours1p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
     console.log("This is the amount of jobs submitted in this hour" + count)
         if (typeof Parts.findOne({hour: now}) === 'object' && count===2)
      {
        //this second job will go from its start time from the time stamp of the latest entry and will continue until the end of the hour
        console.log("This is the count of cycles here " + Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-13 09:00:00.000"), $lt: moment().format("YYYY-MM-13 10:00:00.000")}}).count() )
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-13 09:00:00.000"), $lt: moment().format("YYYY-MM-13 10:00:00.000")}}).count() * (Parts.findOne({hour: now}).cavitation / Parts.findOne({hour: now}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
       else if (typeof Parts.findOne({hour: now}) === 'object' && count>=3)
      {
        //in this case the time stamp will start at its timestamp and end at the time stamp of the next job
        //the timestamp of the most recently submitted job will be 
        //
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-13 09:00:00.000"), $lt: moment(Parts.find({hour: now}).fetch().pop().timestamp).format("YYYY-MM-13 10:00:00.000")}}).count() * (Parts.findOne({hour: now}).cavitation / Parts.findOne({hour: now}).quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
       // Parts.find({hour: now}).fetch().pop().timestamp) this is the latest time stamp
       // Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().timestamp   this is the second to latest time stamp
      }
            },
     incomingCycles1p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber;
     hour= Parts.find().fetch().pop();
     hour=num.hour;  //this is the hour of the submitted job 
     now=moment().format("HH");
     count= Parts.find({hour: now}).count()
     console.log("This is the amount of jobs submitted in this hour" + count)
        if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-13 09:00:00.000"), $lt: moment().format("YYYY-MM-13 10:00:00.000")}}).count() * Parts.findOne({hour: now}).cavitation;
  }

         if (typeof Parts.findOne({hour: now}) === 'object' && count===2)
      {
        //this second job will go from its start time from the time stamp of the latest entry and will continue until the end of the hour
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-13 09:00:00.000"), $lt: moment().format("YYYY-MM-13 10:00:00.000")}}).count() * Parts.findOne({hour: now}).cavitation;
                 
       
      }
       else if (typeof Parts.findOne({hour: now}) === 'object' && count>=3)
      {
        //in this case the time stamp will start at its timestamp and end at the time stamp of the next job
        //the timestamp of the most recently submitted job will be 
        //
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-13 09:00:00.000"), $lt: moment(Parts.find({hour: now}).fetch().pop().timestamp).format("YYYY-MM-13 10:00:00.000")}}).count() * (Parts.findOne({hour: now}).cavitation)
         
       
       // Parts.find({hour: now}).fetch().pop().timestamp) this is the latest time stamp
       // Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().timestamp   this is the second to latest time stamp
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
      now=moment().format("YYYY-MM-DD HH:00:00.000")
     nowh=moment().format("HH")
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     later= moment().add(1, 'hours').format("YYYY-MM-DD HH:00:00.000");
     var earnedHoursCalc = Number(Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: now, $lt: later}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity));
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& Parts.findOne({hour: nowh}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&& Parts.findOne({hour: nowh}))
      {

        return "Yellow"
      }



    },
    changeStatus1p: function() {
 
num= Machines.find().fetch().pop();
     num=num.machinenumber
 now=moment().format("YYYY-MM-DD HH:00:00.000")
     nowh=moment().format("HH")
     later= moment().add(1, 'hours').format("YYYY-MM-DD HH:00:00.000");
     var earnedHoursCalc = Number(Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: now, $lt: later}}).count() * (Parts.findOne().cavitation / Parts.findOne().quantity));
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&& typeof Parts.find({hour: nowh}).fetch().pop() === 'object')
      { 
         if (Number(Parts.find({hour: nowh}).fetch().pop().minute) >  Number (Parts.find({hour:nowh}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute))
     {
    return "Green"
    }
      }

      else if (earnedHoursCalc <1&& typeof Parts.find({hour: nowh}).fetch().pop() === 'object')
  {
  if (Number(Parts.find({hour: nowh}).fetch().pop().minute) >  Number (Parts.find({hour:nowh}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute))
     {
    return "Yellow"
   }
 }
      // }
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
 now = moment().format("HH")
var part =Parts.findOne({hour: now})

console.log ("This is the part number" + part.partnumber)
 if(typeof Parts.findOne({hour: now}) === 'object')
 {
   


    return part.partnumber
 }



   },
   quantity1: function() {
    now= moment().format('HH');
 var part =Parts.findOne({hour: now})

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object')
 {
     
    return part.quantity
   }
     
 }
 
   ,
   part1p: function ()
   {
// num= Machines.find().fetch().pop();
//      num=num.machinenumber;
//      hour= Parts.find().fetch().pop();
//      hour=num.hour;  //this is the hour of the submitted job 
//      now=moment().format("HH");
//      count= Parts.find({hour: now}).count()
//      console.log("This is the amount of jobs submitted in this hour" + count)
//         if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
//       {
//     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-13 09:00:00.000"), $lt: moment().format("YYYY-MM-13 10:00:00.000")}}).count() * Parts.findOne({hour: now}).cavitation;
//   }

//          if (typeof Parts.findOne({hour: now}) === 'object' && count===2)
//       {
//         //this second job will go from its start time from the time stamp of the latest entry and will continue until the end of the hour
//         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-13 09:00:00.000"), $lt: moment().format("YYYY-MM-13 10:00:00.000")}}).count() * Parts.findOne({hour: now}).cavitation;
                 
       
//       }
//        else if (typeof Parts.findOne({hour: now}) === 'object' && count>=3)
//       {
//         //in this case the time stamp will start at its timestamp and end at the time stamp of the next job
//         //the timestamp of the most recently submitted job will be 
//         //
//         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-13 09:00:00.000"), $lt: moment(Parts.find({hour: now}).fetch().pop().timestamp).format("YYYY-MM-13 10:00:00.000")}}).count() * (Parts.findOne({hour: now}).cavitation)
         
       
//        // Parts.find({hour: now}).fetch().pop().timestamp) this is the latest time stamp
//        // Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().timestamp   this is the second to latest time stamp
//       }





//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

now= moment().format('HH');
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count===1) // this is the last entered item
 {
   
    return part.partnumber
   
     
  }
 



   },
   part1pp: function ()
   {
now= moment().format('HH');
 var part =Parts.findOne({hour: now})


 if(typeof Parts.findOne({hour: now}) === 'object')
 {
   
  if (Number(moment(Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")) >  Number (moment(Parts.find({hour:now}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) )
  {
    

     return part.partnumber
  }
 }



   },
   quantity1p: function() {
  now= moment().format('HH');
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object')
 {
   
   if (Number(Parts.find({hour: now}).fetch().pop().minute) >  Number (Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute))
    {
    return part.quantity
   }
     
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