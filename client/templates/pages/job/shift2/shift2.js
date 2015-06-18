


// console.log("This is your cavitation" +Parts.findOne().cavitation);

Template.shift2.helpers({
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
  hour9p: function () {
     //under what condition should i use and additional row?
     //if the latest minute is greater than the previous added to this row
     
     
     now="15"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "9"
   }
   },
   
   hour10p: function () {
     
     now="16"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "9"
   }
   },
   hour11p: function () {
     
     now="17"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "9"
   }
   },
   hour12p: function () {
     
     now="18"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "9"
   }
   },
   hour13p: function () {
     
     now="19"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "9"
   }
   },
   hour14p: function () {
     
     now="20"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "9"
   }
   },
   hour15p: function () {
     
     now="21"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "9"
   }
   },
   hour16p: function () {
     
     now="22"
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "9"
   }
   },
  parts: function() {
    return Parts.find();
   },
    earnedHours9: function () {
 Meteor.subscribe('parts'); 
     Meteor.subscribe('machines');
      Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now="15"
     count= Parts.find({hour: now}).count()
       
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 15:00:00.000"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 15:00:00.000"), $lt: moment(Parts.find({hour: now}).fetch().pop().timestamp).format("YYYY-MM-DD 15:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) *.5;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
  

            },
            earnedHours9p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now="15"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count >=2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 15:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *.5;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
        
      

            },
      
     incomingCycles9: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
     hour= Parts.find().fetch().pop();
     hour=num.hour;  //this is the hour of the submitted job 
     now="15"
     count= Parts.find({hour: now}).count()
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 15:00:00.000"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 15:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 15:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
  
        
      },
      
     incomingCycles9p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now="15"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count >=2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 15:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        
     

     
      },
     
      earnedHours10: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 16:00:00.000"), $lt: moment().format("YYYY-MM-DD 17:00:00.000")}}).count() * (Parts.findOne({hour: '16'}).cavitation / Parts.findOne({hour: '16'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles10: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 16:00:00.000"), $lt: moment().format("YYYY-MM-DD 17:00:00.000")}}).count() * Parts.findOne({hour: '16'}).cavitation;
  
        
        
      },
      earnedHours11: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 17:00:00.000"), $lt: moment().format("YYYY-MM-DD 18:00:00.000")}}).count() * (Parts.findOne({hour: '17'}).cavitation / Parts.findOne({hour: '17'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles11: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 17:00:00.000"), $lt: moment().format("YYYY-MM-DD 18:00:00.000")}}).count() * Parts.findOne({hour: '17'}).cavitation;
  
        
        
      },
      earnedHours12: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 18:00:00.000"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * (Parts.findOne({hour: '18'}).cavitation / Parts.findOne({hour: '18'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles12: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 18:00:00.000"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * Parts.findOne({hour: '18'}).cavitation;
  
        
        
      },
      earnedHours13: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 19:00:00.000"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * (Parts.findOne({hour: '19'}).cavitation / Parts.findOne({hour: '19'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles13: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 19:00:00.000"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * Parts.findOne({hour: '19'}).cavitation;
  
        
        
      },
      earnedHours14: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 20:00:00.000"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * (Parts.findOne({hour: '20'}).cavitation / Parts.findOne({hour: '20'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles14: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 20:00:00.000"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * Parts.findOne({hour: '20'}).cavitation;
  
        
        
      },
      earnedHours15: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 21:00:00.000"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * (Parts.findOne({hour: '21'}).cavitation / Parts.findOne({hour: '21'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles15: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 21:00:00.000"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * Parts.findOne({hour: '21'}).cavitation;
  
        
        
      },
      earnedHours16: function () {
     
    //Meteor.subscribe('Presscycles')
    //The Cycles find only looks at the first thing you send in to it.
    num= Machines.find().fetch().pop();
     num=num.machinenumber
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 22:00:00.000"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * (Parts.findOne({hour: '22'}).cavitation / Parts.findOne({hour: '22'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles16: function () {
            //grab all cycles from today
      // Meteor.subscribe('cycles-recent', moment(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS"))
       
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
num= Machines.find().fetch().pop();
     num=num.machinenumber
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 22:00:00.000"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * Parts.findOne({hour: '22'}).cavitation;
  
        
        
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
    
    

    changeStatus9: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 15:00:00.000"), $lt: moment().format("YYYY-MM-DD 16:00:00.000")}}).count() * (Parts.findOne({hour: '15'}).cavitation / Parts.findOne({hour: '15'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '15'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '15'}))
      {

        return "Yellow"
      }



    },

    changeStatus10: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 16:00:00.000"), $lt: moment().format("YYYY-MM-DD 17:00:00.000")}}).count() * (Parts.findOne({hour: '16'}).cavitation / Parts.findOne({hour: '16'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
          earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '16'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '16'}))
      {

        return "Yellow"
      }



    },

    changeStatus11: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 17:00:00.000"), $lt: moment().format("YYYY-MM-DD 18:00:00.000")}}).count() * (Parts.findOne({hour: '17'}).cavitation / Parts.findOne({hour: '17'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '17'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '17'}))
      {

        return "Yellow"
      }


    },

    changeStatus12: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 18:00:00.000"), $lt: moment().format("YYYY-MM-DD 19:00:00.000")}}).count() * (Parts.findOne({hour: '18'}).cavitation / Parts.findOne({hour: '18'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '18'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '18'}))
      {

        return "Yellow"
      }



    },

    changeStatus13: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 19:00:00.000"), $lt: moment().format("YYYY-MM-DD 20:00:00.000")}}).count() * (Parts.findOne({hour: '19'}).cavitation / Parts.findOne({hour: '19'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '19'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '19'}))
      {

        return "Yellow"
      }


    },

    changeStatus14: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 20:00:00.000"), $lt: moment().format("YYYY-MM-DD 21:00:00.000")}}).count() * (Parts.findOne({hour: '20'}).cavitation / Parts.findOne({hour: '20'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '20'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '20'}))
      {

        return "Yellow"
      }



    },

    changeStatus15: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 21:00:00.000"), $lt: moment().format("YYYY-MM-DD 22:00:00.000")}}).count() * (Parts.findOne({hour: '21'}).cavitation / Parts.findOne({hour: '21'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
      if (earnedHoursCalc >=1&&Parts.findOne({hour: '21'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '21'}))
      {

        return "Yellow"
      }



    },

    changeStatus16: function() {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 22:00:00.000"), $lt: moment().format("YYYY-MM-DD 23:00:00.000")}}).count() * (Parts.findOne({hour: '22'}).cavitation / Parts.findOne({hour: '22'}).quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
        earnedHoursCalc= Number(earnedHoursCalc)
       if (earnedHoursCalc >=1&&Parts.findOne({hour: '22'}))
      {
        return "Green"
      }

      else if (earnedHoursCalc <1&&Parts.findOne({hour: '22'}))
      {

        return "Yellow"
      }

 },

  
   part9: function ()
   {

var part =Parts.findOne({hour: '15'})


if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}



   },
   quantity9: function() {
   var part =Parts.findOne({hour: '15'})
   

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
   },
    part10: function ()
   {

  var part =Parts.findOne({hour: '16'})
  part = Number(part)

if(part.partnumber >=0)
{
   


    return part.partnumber
}



   },
   quantity10: function() {
   var part =Parts.findOne({hour: '16'})
  

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
   },part11: function ()
   {

  var part =Parts.findOne({hour: '17'})
  

if(Number(part.partnumber) >=0)
{
   


    return part.partnumber
}




   },
   quantity11: function() {
  var part =Parts.findOne({hour: '17'})
 

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
 
   },part12: function ()
   {

    var part =Parts.findOne({hour: '18'})
    

if(Number(part.partnumber)>=0)
{
   


    return part.partnumber
}


  

   },
   quantity12: function() {
  var part =Parts.findOne({hour: '18'})
 

   if(Number(part.partnumber)>=0)
   {
   


   return part.quantity
 }
 
 
   },part13: function ()
   {

        var part =Parts.findOne({hour: '19'})
       

if(Number(part.partnumber) >0)
{
   


    return part.partnumber
}



   },
   quantity13: function() {
    var part =Parts.findOne({hour: '19'})
    

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }
 

   },part14: function ()
   {

   var part =Parts.findOne({hour: '20'})
   

if(Number(part.partnumber)>0)
{
   


    return part.partnumber
}



   },
   quantity14: function() {
    var part =Parts.findOne({hour: '20'})
    

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }

   },part15: function ()
   {

    var part =Parts.findOne({hour: '21'})
   

if(Number(part.partnumber) >0)
{
   


    return part.partnumber
}



   },
   quantity15: function() {
  var part =Parts.findOne({hour: '21'})
 

   if(Number(part.partnumber)>0)
   {
   


   return part.quantity
 }
 
   },part16: function ()
   {
    var part =Parts.findOne({hour: '22'})
    

if(Number(part.partnumber) >0)
{
   


    return part.partnumber
}



   },
   quantity16: function() {
  var part =Parts.findOne({hour: '22'})
  

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