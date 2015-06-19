
 

// console.log("This is your cavitation" +Parts.findOne().cavitation);



Template.job.helpers({
    
  calculateTime: function () {
         
//The calculate time function needs to always show the time for the most recently submitted job
//This current calculation does not take into account jobs that may be submitted during the same hour
//if I fetch the latest timestamp I might can use this 
//basically do a pop to get access to the most recent minute
//use this minute is my calculateTime function
//Basically this calculateTime it based on the most recent job submitted.

        
         
         
         num= Machines.find().fetch().pop();
     num=num.machinenumber
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
        estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
{

  estimatedminutes=0;
}
         
         
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
     
     console.log("this is the count" + count)
     now=moment().format("HH") 
     count= Parts.find({hour: now}).count()
     //change these to be based off of a count function
     if (count>1)
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
   
     earnedHours1: function () {
 Meteor.subscribe('parts');
 Meteor.subscribe('hours'); 
     Meteor.subscribe('machines');
      Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
 num= Machines.find().fetch().pop();
     num=num.machinenumber
      
    //Work on the logic for 4 different submitted jobs 
   now="07"
     count= Parts.find({hour: now}).count()
       //These if else if statements run if there is a job that was submitted this hour
       //This will cancel a current job essentially

 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
        // I found the minutes of the 
     var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) - Number(Parts.findOne({hour: now}).minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    

    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) *percent;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
  // I need a second block of if statements that basically differ subtly.
  // This block will run if there is not a submitted job this hour AND if
  // there is a job whose calculated time is not <= 0 (meaning that it is finished)
  count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
        estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
{

  estimatedminutes=0;
}

//I need to have my count function count the last hour that there was a submission


count= Parts.find({hour: now}).count()
//These statements are for when there isn't a submitted job this hour and there is a previous job that isn't yet finished

  if (typeof (Parts.findOne({hour: now}) === 'undefined') && count===0 && estimatedminutes >=60)
      { 
    //basically I'm outputting the earned hours for the most recently submitted job for an hour.
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find().fetch().pop().cavitation / Parts.find().fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
 if (typeof (Parts.findOne({hour: now}) === 'undefined') && count===0 && estimatedminutes <60)
      { 
    //This code is not working the way it should work
    //it is updating 
    start = moment().format("YYYY-MM-DD 07:00:00.000")
   
   
      if (typeof Hours.findOne() === 'undefined')
      {
      var hour = {
      hour: moment(start).add(estimatedminutes,'minutes').format("YYYY-MM-DD HH:mm:ss.SSS")
     };
      Meteor.call('hoursInsert', hour)
      }
      var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Hours.findOne().hour).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * (Parts.find().fetch().pop().cavitation / Parts.find().fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  


            },
            earnedHours1p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    
    
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count >=2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
        var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    console.log("This is the percent"+ percent)
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
      // I need a second block of if statements that basically differ subtly.
  // This block will run if there is not a submitted job this hour AND if
  // there is a job whose calculated time is not <= 0 (meaning that it is finished)
  num= Machines.find().fetch().pop();
     num=num.machinenumber 
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
        estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
{

  estimatedminutes=0;
}
counthour= Parts.find().fetch().pop().hour
count=Parts.find({hour:counthour}).count()
  if (typeof Parts.findOne({hour: now}) === 'undefined' && count>=2 && estimatedminutes >60)
      {
        
    var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  
      

            },
      
     incomingCycles1: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
     hour= Parts.find().fetch().pop();
     hour=num.hour;  //this is the hour of the submitted job 
     now="07";
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
 
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
        estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
{

  estimatedminutes=0;
}
count= Parts.find({hour: now}).count()
//These statements are for when there isn't a submitted job this hour and there is a previous job that isn't yet finished

  if (typeof (Parts.findOne({hour: now}) === 'undefined') && count===0 && estimatedminutes >=60)
      { 
    //basically I'm outputting the earned hours for the most recently submitted job for an hour.
   return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;

    }
 
    if (typeof (Parts.findOne({hour: now}) === 'undefined') && count===0 && estimatedminutes <60)
      { 
    //This function will execute when the estimated minutes are less than 60
    //meaning that the latest job will end during this hour.
    start = moment().format("YYYY-MM-DD 07:00:00.000")
   
      if (typeof Hours.findOne() === 'undefined')
      {
      var hour = {
      hour: moment(start).add(estimatedminutes,'minutes').format("YYYY-MM-DD HH:mm:ss.SSS")
     };
      Meteor.call('hoursInsert', hour)
      }
      incomecycles = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Hours.findOne().hour).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * (Parts.find().fetch().pop().cavitation);
     incomecycles = incomecycles.toFixed(2);
     return incomecycles
  }
  
      },
      
     incomingCycles1p: function () {
        //grab all cycles from today
        
       //Is the logic of the incoming cycles the same as the earn hours?
       //It should be
        num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
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
    num= Machines.find().fetch().pop();
     num=num.machinenumber
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
        estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
{

  estimatedminutes=0;
}

count=Parts.find({hour: now}).count()
  if (typeof Parts.findOne({hour: now}) === 'undefined' && count===2&& estimatedminutes >=60)
      {

        //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         }
  else if (typeof Parts.findOne({hour: now}) === 'undefined' && count===2&& estimatedminutes <60)
      {
        //I need to figure out the code for how to determine if the estimated minutes need to be calculated
        //at this location or not

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       }

     
      },
     
      earnedHours2: function () {
 Meteor.subscribe('parts'); 
     Meteor.subscribe('machines');
      Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
   now="08"
     count= Parts.find({hour: now}).count()
       //These if else if statements run if there is a job that was submitted this hour
       //This will cancel a current job essentially

 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job
        // I found the minutes of the 
     var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) - Number(Parts.findOne({hour: now}).minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    

    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) *percent;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
  // I need a second block of if statements that basically differ subtly.
  // This block will run if there is not a submitted job this hour AND if
  // there is a job whose calculated time is not <= 0 (meaning that it is finished)
  count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
        estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
{

  estimatedminutes=0;
}

//I need to have my count function count the last hour that there was a submission


count= Parts.find({hour: now}).count()
//These statements are for when there isn't a submitted job this hour and there is a previous job that isn't yet finished

  if (typeof (Parts.findOne({hour: now}) === 'undefined') && count===0 && estimatedminutes >=60)
      { 
    //basically I'm outputting the earned hours for the most recently submitted job for an hour.
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find().fetch().pop().cavitation / Parts.find().fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
 // if (typeof (Parts.findOne({hour: now}) === 'undefined') && count===0 && estimatedminutes <60)
 //      { 
 //    //This function will execute when the estimated minutes are less than 60
 //    //meaning that the latest job will end during this hour.

 //    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 07:00:00.000").add(estimatedminutes, 'minutes')}}).count() * (Parts.find().fetch().pop().cavitation / Parts.find().fetch().pop().quantity) ;
 // earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
 //        return earnedHoursCalc;
 //  }
  


            },
            earnedHours2p: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    
     now="08"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count >=2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
        var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    console.log("This is the percent"+ percent)
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *percent;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
      // I need a second block of if statements that basically differ subtly.
  // This block will run if there is not a submitted job this hour AND if
  // there is a job whose calculated time is not <= 0 (meaning that it is finished)
  num= Machines.find().fetch().pop();
     num=num.machinenumber 
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
        estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
{

  estimatedminutes=0;
}
counthour= Parts.find().fetch().pop().hour
count=Parts.find({hour:counthour}).count()
  if (typeof Parts.findOne({hour: now}) === 'undefined' && count>=2 && estimatedminutes >60)
      {
        
    var minutes = Number(60) - Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) 
    var percent = minutes/Number(60) //This is the percent used in my program
    
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *percent;
         
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
     now="08";
     count= Parts.find({hour: now}).count()
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
        estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
{

  estimatedminutes=0;
}
count= Parts.find({hour: now}).count()
//These statements are for when there isn't a submitted job this hour and there is a previous job that isn't yet finished

  if (typeof (Parts.findOne({hour: now}) === 'undefined') && count===0 && estimatedminutes >=60)
      { 
    //basically I'm outputting the earned hours for the most recently submitted job for an hour.
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;

    }
 // if (typeof (Parts.findOne({hour: now}) === 'undefined') && count===0 && estimatedminutes <60)
 //      { 
 //    //This function will execute when the estimated minutes are less than 60
 //    //meaning that the latest job will end during this hour.
 //    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000").add(estimatedminutes, 'minutes')}}).count() * (Parts.find().fetch().pop().cavitation / Parts.find().fetch().pop().quantity) ;
 
    
 //  }    
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
     now="08"
     count= Parts.find({hour: now}).count()
      
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
    num= Machines.find().fetch().pop();
     num=num.machinenumber
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
        estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
{

  estimatedminutes=0;
}
counthour= Parts.find().fetch().pop().hour
count=Parts.find({hour:counthour}).count()
  if (typeof Parts.findOne({hour: now}) === 'undefined' && count===2&& estimatedminutes >0)
      {
        //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         }
  else if (typeof Parts.findOne({hour: now}) === 'undefined' && count>2&& estimatedminutes >0)
      {
        //the start time is same.  The end time will be the start of the second job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       }

     
      },      
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
  
     changeStatus1: function() {
      
     now=moment().format("HH")
    num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
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
       counthour= Parts.find().fetch().pop().hour
count=Parts.find({hour:counthour}).count()

  if (typeof (Parts.findOne({hour: now}) === 'undefined') && count===1 && estimatedminutes >60)
      { 
    
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find().fetch().pop().cavitation / Parts.find().fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
  }
  else if (typeof Parts.findOne({hour: now}) === 'undefined' && count>=2 && estimatedminutes >60)
      { 
        //the start time is same.  The end time will be the most recent job
     var minutes = Number(Parts.find({hour: now}, {sort: {minute: 1}, limit: 2}).fetch().pop().minute) -(Number(Parts.findOne({hour: now}).minute)) 
    var percent = minutes/Number(60) //This is the percent used in my program
    

    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) *percent;
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
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
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

    
     
   part1: function ()
   {
 now = "07"
var part =Parts.findOne({hour: now})


 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }
 if(typeof Parts.find({hour: now}).fetch().pop() === 'undefined')
 {       
  part =Parts.find().fetch().pop();
         return part.partnumber
   }
   },
   part1p: function ()
   {
     now= "07"
count= Parts.find({hour: now}).count()
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' &&count >=2)
 {
         return part.partnumber
   }
  if(typeof Parts.find({hour: now}).fetch().pop() === 'undefined'&&count >=2)
 {     
  part =Parts.find().fetch().pop();
  
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
  if(typeof Parts.find({hour: now}).fetch().pop() === 'undefined')
 {     
  part =Parts.find().fetch().pop();
  
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
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' &&count >=2)
 {
         return part.quantity
   }
  if(typeof Parts.find({hour: now}).fetch().pop() === 'undefined'&&count >=2)
 {     
  part =Parts.find().fetch().pop();
  
         return part.quantity
   }
      },

 
 
    

   
   part2: function ()
   {
 now = "08"
var part =Parts.findOne({hour: now})


 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }
 if(typeof Parts.find({hour: now}).fetch().pop() === 'undefined')
 {       
  part =Parts.find().fetch().pop();
         return part.partnumber
   }
   },
   part2p: function ()
   {
     now= "08"
count= Parts.find({hour: now}).count()
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' &&count >=2)
 {
         return part.partnumber
   }
  if(typeof Parts.find({hour: now}).fetch().pop() === 'undefined'&&count >=2)
 {     
  part =Parts.find().fetch().pop();
  
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
  if(typeof Parts.find({hour: now}).fetch().pop() === 'undefined')
 {     
  part =Parts.find().fetch().pop();
  
         return part.quantity
   }
      }
    ,
   
   quantity2p: function() {
  
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour
now= "08"
count= Parts.find({hour: now}).count()
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' &&count >=2)
 {
         return part.quantity
   }
  if(typeof Parts.find({hour: now}).fetch().pop() === 'undefined'&&count >=2)
 {     
  part =Parts.find().fetch().pop();
  
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