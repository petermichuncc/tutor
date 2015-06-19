
Meteor.subscribe('parts');

// console.log("This is your cavitation" +Parts.findOne().cavitation);
Template.shift1.helpers({

   calculateTime: function () {
 num= Machines.find().fetch().pop();
     num=num.machinenumber
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         console.log("This is the count" + count)
         console.log("This is the quantity" + Number(Parts.find().fetch().pop().quantity))
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
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
     
     
     now="07"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "1"
   }
   },
   
   hour2p: function () {
   now="08"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "2"
   }
   },
   hour3p: function () {
    now="09"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "3"
   }
   },
   hour4p: function () {
    now="10"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "4"
   }
   },
   hour5p: function () {
   now="11"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "5"
   }
   },
   hour6p: function () {
    now="12"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "6"
   }
   },
   hour7p: function () {
    now="13"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "7"
   }
   },
   hour8p: function () {
    now="14"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "8"
   }
   },

     
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
    earnedHours1: function () {
 Meteor.subscribe('parts'); 
     Meteor.subscribe('machines');
      Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
     
     now="07"
     count= Parts.find({hour: now}).count()
       
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
     var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    

    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) *percent;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
  

            },
            earnedHours1p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now="07"
     count= Parts.find({hour: now}).count()
      
      var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
   
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
      else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {
        
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }  
      

            },
      
     incomingCycles1: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
     now="07"
     count= Parts.find({hour: now}).count()
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  
        
      },
      
     incomingCycles1p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
     
     now="07"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     
      },
     earnedHours2: function () {
 
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
       
 if (typeof Parts.findOne({hour: '08'}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: '08'}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
 var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * (Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) * percent;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
        },
            earnedHours2p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
     
     now="08"
     count= Parts.find({hour: '08'}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
       var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
       
      if (typeof Parts.findOne({hour: '08'})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
      if (typeof Parts.findOne({hour: '08'})=== 'object'  && count >2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment(Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * (Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }  
      

            },
      
     incomingCycles2: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
     hour= Parts.find().fetch().pop();
     hour=num.hour;  //this is the hour of the submitted job 
     now="08"
     count= Parts.find({hour: now}).count();
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: '08'}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: '08'}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
  
        
      },
      
     incomingCycles2p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: '08'}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: '08'})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: '08'})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment(Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({hour:'08'}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     
      },
earnedHours3: function () {
 
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="09"
     count= Parts.find({hour: now}).count()
       
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
 var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) * percent;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
        },
            earnedHours3p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
       
     now="09"
     count= Parts.find({hour:now}).count()
      
    var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
       
      if (typeof Parts.findOne({hour: now})=== 'object'  && count >=2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
         var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
      else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }   
      

            },
      
     incomingCycles3: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
      //this is the hour of the submitted job 
     now="09";
     count= Parts.find({hour: now}).count();
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
  
        
      },
      
     incomingCycles3p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="09"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 09:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     
      },

earnedHours4: function () {
 
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="10"
     count= Parts.find({hour: now}).count()
       
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
 var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) * percent;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
        },
            earnedHours4p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
       
     now="10"
     count= Parts.find({hour:now}).count()
      
      
      var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60)
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
         //This is the percent used in my program
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
       else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      } 
      

            },
      
     incomingCycles4: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
      //this is the hour of the submitted job 
     now="10";
     count= Parts.find({hour: now}).count();
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
  
        
      },
      
     incomingCycles4p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="10"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 10:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     
      },
earnedHours5: function () {
 
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="11"
     count= Parts.find({hour: now}).count()
       
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
 var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) * percent;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
        },
            earnedHours5p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
       
     now="11"
     count= Parts.find({hour:now}).count()
      
      
      var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60)
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
         //This is the percent used in my program
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
       else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      } 
      

            },
      
     incomingCycles5: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
      //this is the hour of the submitted job 
     now="11";
     count= Parts.find({hour: now}).count();
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
  
        
      },
      
     incomingCycles5p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="11"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 11:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     
      },
earnedHours6: function () {
 
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="12"
     count= Parts.find({hour: now}).count()
       
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
 var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) * percent;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
        },
            earnedHours6p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
       
     now="12"
     count= Parts.find({hour:now}).count()
      
      
      var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60)
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
         //This is the percent used in my program
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
       else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      } 
      

            },
      
     incomingCycles6: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
      //this is the hour of the submitted job 
     now="12";
     count= Parts.find({hour: now}).count();
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
  
        
      },
      
     incomingCycles6p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="12"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 12:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     
      },
earnedHours7: function () {
 
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="13"
     count= Parts.find({hour: now}).count()
       
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
 var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) * percent;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
        },
            earnedHours7p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
       
     now="13"
     count= Parts.find({hour:now}).count()
      
      
      var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60)
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
         //This is the percent used in my program
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
       else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      } 
      

            },
      
     incomingCycles7: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
      //this is the hour of the submitted job 
     now="13";
     count= Parts.find({hour: now}).count();
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
  
        
      },
      
     incomingCycles7p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="13"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 13:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     
      },
earnedHours8: function () {
 
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="14"
     count= Parts.find({hour: now}).count()
       
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
 var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) * percent;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
        },
            earnedHours8p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
       
     now="14"
     count= Parts.find({hour:now}).count()
      
      
      var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60)
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
         //This is the percent used in my program
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
       else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) * percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      } 
      

            },
      
     incomingCycles8: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
      //this is the hour of the submitted job 
     now="14";
     count= Parts.find({hour: now}).count();
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
  
        
      },
      
     incomingCycles8p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="14"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 14:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     
      },

    

    changeStatus1: function() {
      
     
    num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    // hour= Parts.find().fetch().pop();
    //  hour=num.hour  //this is the hour of the submitted job 
     now="07"
     count= Parts.find({hour: now}).count()
       if (typeof Parts.findOne({hour: now}) === 'object'  && count ===1)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ; ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
      
      //The end time will be the time stamp that is from the job submitted right after the first job
      //if the count is 2 then I will need to get the time stamp of the second to latest submitted job
      else if (typeof Parts.findOne({hour: now})=== 'object'  && count >=2)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
       
      }
            
       if (earnedHoursCalc >=1)
      {
        return "Green"
      }

      else if (earnedHoursCalc <1)
      {

        return "Yellow"
      }



    },
    changeStatus1p: function() {
 

 now=moment().format("YYYY-MM-DD HH:00:00.000")
     num= Machines.find().fetch().pop();
     num=num.machinenumber
     console.log("This is the machine number" + num)
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now="07"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *.5;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
       
       if (earnedHoursCalc >=1 && count>1)
      { 
         
    return "Green"
    
      }

      else if (earnedHoursCalc <1&& count>1)
  {
 
    return "Yellow"
   
 }
      // }
    },
    

    changeStatus2: function() {
        
    num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    // hour= Parts.find().fetch().pop();
    //  hour=num.hour  //this is the hour of the submitted job 
     now="08"
     count= Parts.find({hour: now}).count()
       if (typeof Parts.findOne({hour: now}) === 'object'  && count ===1)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ; ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
      
      //The end time will be the time stamp that is from the job submitted right after the first job
      //if the count is 2 then I will need to get the time stamp of the second to latest submitted job
      else if (typeof Parts.findOne({hour: now})=== 'object'  && count >=2)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
       
      }
            
       if (earnedHoursCalc >=1)
      {
        return "Green"
      }

      else if (earnedHoursCalc <1)
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
 now = "07"
var part =Parts.findOne({hour: now})

console.log ("This is the part number" + part.partnumber)
 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }

   },
   part1p: function ()
   {
      
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

now= "07"
count= Parts.find({hour: now}).count()
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }
},


   
   quantity1: function() {
    now= "07"
 var part =Parts.findOne({hour: now})

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object')
 {
         return part.quantity
   }
      }
    ,
   
   quantity1p: function() {
  
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour
now= "07"
count= Parts.find({hour: now}).count()
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.quantity
        
  }

    },

    part2: function ()
   {
 now = "08"
var part =Parts.findOne({hour: now})

console.log ("This is the part number" + part.partnumber)
 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }

   },
   part2p: function ()
   {now= "08"
      count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }

},
   
   quantity2: function() {
    now= "08"
 var part =Parts.findOne({hour: now})

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object')
 {
         return part.quantity
   }
      }
    ,
   
   quantity2p: function() {
  now= "08"
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.quantity
        
  }

    },
  part3: function ()
   {
 now = "09"
var part =Parts.findOne({hour: now})

console.log ("This is the part number" + part.partnumber)
 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }

   },
   part3p: function ()
   {now= "09"
      count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }


   },
   quantity3: function() {
    now= "09"
 var part =Parts.findOne({hour: now})

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object')
 {
         return part.quantity
   }
      }
    ,
   
   quantity3p: function() {
  now= "09"
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.quantity
        
  }

    },
  part4: function ()
   {
 now = "10"
var part =Parts.findOne({hour: now})

console.log ("This is the part number" + part.partnumber)
 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }

   },
   part4p: function ()
   {now= "10"
      count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }

},
   
   quantity4: function() {
    now= "10"
 var part =Parts.findOne({hour: now})

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object')
 {
         return part.quantity
   }
      }
    ,
   
   quantity4p: function() {
  now= "10"
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.quantity
        
  }

    }, 
   part5: function ()
   {
 now = "11"
var part =Parts.findOne({hour: now})

console.log ("This is the part number" + part.partnumber)
 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }

   },
   part5p: function ()
   {now= "11"
      count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }

},
   
   quantity5: function() {
    now= "11"
 var part =Parts.findOne({hour: now})

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object')
 {
         return part.quantity
   }
      }
    ,
   
   quantity5p: function() {
  now= "11"
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.quantity
        
  }

    },
    part6: function ()
   {
 now = "12"
var part =Parts.findOne({hour: now})

console.log ("This is the part number" + part.partnumber)
 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }

   },
   part6p: function ()
   {now= "12"
      count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }

},
   
   quantity6: function() {
    now= "12"
 var part =Parts.findOne({hour: now})

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object')
 {
         return part.quantity
   }
      }
    ,
   
   quantity6p: function() {
  now= "12"
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.quantity
        
  }

    },
    part7: function ()
   {
 now = "13"
var part =Parts.findOne({hour: now})

console.log ("This is the part number" + part.partnumber)
 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }

   },
   part7p: function ()
   {now= "13"
      count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }


   },
   quantity7: function() {
    now= "13"
 var part =Parts.findOne({hour: now})

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object')
 {
         return part.quantity
   }
      }
    ,
   
   quantity7p: function() {
  now= "13"
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.quantity
        
  }

    },
    part8: function ()
   {
 now = "14"
var part =Parts.findOne({hour: now})

console.log ("This is the part number" + part.partnumber)
 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }

   },
   part8p: function ()
   {now= "14"
      count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }


   },
   quantity8: function() {
    now= "14"
 var part =Parts.findOne({hour: now})

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 if(typeof Parts.find({hour: now}).fetch().pop() === 'object')
 {
         return part.quantity
   }
      }
    ,
   
   quantity8p: function() {
  now= "14"
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.quantity
        
  }

    },  
 
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