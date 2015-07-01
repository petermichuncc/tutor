//put any reusable code up here in javascript
//any data/vars or functions that aren't getting sent directly to the html code can be calculated
//in a javascript function
 Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');
Meteor.subscribe('entries');
Meteor.subscribe('hours');

function incomingCycles1 () {
        //grab all cycles from today
      num= Machines.findOne();
     num=num.machinenumber
      now="07"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
           
   //Basically I need code to be run if there was NOT a end job submitted this hour
if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }   
        
      }
   
     function incomingCycles1p () {
       num= Machines.findOne();
     num=num.machinenumber
     now="07"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
     

     
      }
          
    
      function incomingCycles2 () {
        //grab all cycles from today
       num= Machines.findOne();
     num=num.machinenumber
     now="08"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     
 if (typeof Hours.find({hour:now, month:month, day:day})=== 'undefined')
      {
 if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num, AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num, AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
   
    if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined'&& Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
  if (typeof Hours.find({hour:now, month:month, day:day})=== 'object')
      {
 if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num, AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day})).format("YYYY-MM-DD 08:mm:ss.SSS").fetch().pop().timestamp}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num, AutoStatus: "1",CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
   
    if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined'&& Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
        
      }
      
     function incomingCycles2p () {
        num= Machines.findOne();
     num=num.machinenumber
       now="08"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
      //The start time will be time stamp of the most recent job
      //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        return Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
      }
        else if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        return Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
      }
    
      }

    function incomingCycles3 () {
         //grab all cycles from today
       num= Machines.findOne();
     num=num.machinenumber
     now="09";
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (typeof Hours.find({hour:now, month:month, day:day})=== 'undefined')
      {
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
  }
  if (typeof Hours.find({hour:now, month:month, day:day})=== 'object')
      {
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
  }      
       }
      
      function incomingCycles3p() {
          num= Machines.findOne();
     num=num.machinenumber
     now="09"
   month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count ===2)
       {
         //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
         //I need the time stamp of the most recently submitted job
         //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 09:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
       }
         else if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count >2)
       {

         //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
         //at this point the second submission will be the second item in the collection or middle item
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
       }
     

     
       }
      
      function incomingCycles4() {
         //grab all cycles from today
        num= Machines.findOne();
     num=num.machinenumber
     now="10";
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
  if (typeof Hours.find({hour:now, month:month, day:day})=== 'undefined')
      {
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
    if (typeof Hours.find({hour:now, month:month, day:day})=== 'object')
      {
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
        
       }
      
      function incomingCycles4p() {
      num= Machines.findOne();
     num=num.machinenumber
     now="10"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count ===2)
       {
         //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
         //I need the time stamp of the most recently submitted job
         //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 10:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
       }
         else if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count >2)
       {

         //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
         //at this point the second submission will be the second item in the collection or middle item
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
       }
     

     
       }
      
      function incomingCycles5() {
        num= Machines.findOne();
     num=num.machinenumber
     now="11";
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
  if (typeof Hours.find({hour:now, month:month, day:day})=== 'undefined')
      {
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
    if (typeof Hours.find({hour:now, month:month, day:day})=== 'object')
      {
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
        
       }
      
     function incomingCycles5p() {
        num= Machines.findOne();
     num=num.machinenumber
     now="11"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       //the time stamp of the most recent job will be 
       if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count ===2)
       {
         //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
         //I need the time stamp of the most recently submitted job
         //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 11:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
       }
         else if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count >2)
       {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
         //at this point the second submission will be the second item in the collection or middle item
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
       }
     

     
       }
 // earnedHours6: function () {
 


     //         },
      
      function incomingCycles6() {
//         //grab all cycles from today
     num= Machines.findOne();
     num=num.machinenumber
     now="12"
   month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
 if (typeof Hours.find({hour:now, month:month, day:day})=== 'undefined')
      {
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
    if (typeof Hours.find({hour:now, month:month, day:day})=== 'object')
      {
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
                 }
      
     function  incomingCycles6p() {
        num= Machines.findOne();
     num=num.machinenumber
     now="12"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count ===2)
      {
         //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
         //I need the time stamp of the most recently submitted job
         //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 12:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
       }
         else if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count >2)
       {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
         //at this point the second submission will be the second item in the collection or middle item
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
       }
     

     
       }
     
      function incomingCycles7() {
        num= Machines.findOne();
     num=num.machinenumber
     now="13";
    month=moment().format("MM")
    day=moment().format("DD")
      
      if (typeof Hours.find({hour:now, month:month, day:day})=== 'undefined')
      {
     count= Parts.find({hour: now, month:month, day:day}).count()
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 
   if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
} 
//This next bit of code will be executed if there is a job 

 if (typeof Hours.find({hour:now, month:month, day:day})=== 'object')
      {
     count= Parts.find({hour: now, month:month, day:day}).count()
     //if the count is 1 run this until the time stamp of Hours.find

  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:dd.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 
   if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:dd.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
} 
       }
      
     function incomingCycles7p() {
        num= Machines.findOne();
     num=num.machinenumber
     now="13"
   month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       //the end time will be the end of the hour
      //the time stamp of the most recent job will be 
       if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count ===2)
       {
         //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
         //I need the time stamp of the most recently submitted job
         //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 13:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
       }
         else if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count >2)
      {

         //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
         //at this point the second submission will be the second item in the collection or middle item
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
       }
     

     
      }
      
      function incomingCycles8() {
         num= Machines.findOne();
     num=num.machinenumber
      now="14"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
 if (typeof Hours.find({hour:now, month:month, day:day})=== 'undefined')
      {
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
    if (typeof Hours.find({hour:now, month:month, day:day})=== 'object')
      {
  if (typeof Parts.findOne({hour:now, month: month, day: day}) === 'object' && count===1)
       {
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
         //the start time is same.  The end time will be the most recent job

     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Hours.find({hour:now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }   
       }
      
      function incomingCycles8p() {
        num= Machines.findOne();
     num=num.machinenumber
      now="14"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count ===2)
       {
         //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
         //I need the time stamp of the most recently submitted job
         //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop()).format("YYYY-MM-DD 14:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
         
       
       }
         else if (typeof Parts.findOne({hour:now, month: month, day: day})=== 'object'  && count >2)
       {

         //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
         //at this point the second submission will be the second item in the collection or middle item
         return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation;
       
       }
         
       }
 function earnedHours1() {
          //get actual
          //I need the cycle time that is located in the Entries db
          console.log("This is the partnumber for this job" + Parts.find().fetch().pop().partnumber)
          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
          console.log("This is the cycle time for this partnumber" + cycletime)
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles1()/planned
                   
            }
function earnedHours1p() {
      

            }
// console.log("This is your cavitation" +Parts.findOne().cavitation);
Template.shift1.helpers({
   calculateTime: function () {
        
num= Machines.findOne();
     num=num.machinenumber;
 count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         
         // estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
          estimatedTime = (Number(Parts.find().fetch().pop().quantity)) / Number(Parts.find().fetch().pop().cavitation);
         
         // //basically take the quantity divided by cavitation and multiply this by 
        start =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).CycleTimeStamp
       next =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).CycleTimeStamp
        startseconds=moment(start).format("ss.SSS")
        startminutes=moment(start).format("mm")
        startseconds=Number(startseconds)+ Number(startminutes)*60
        nextseconds=moment(next).format("ss.SSS")
        nextminutes=moment(next).format("mm")
        nextseconds=Number(nextseconds) + Number(nextminutes)*60
        cycletime= nextseconds-startseconds
   estimatedTime=estimatedTime * cycletime

         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
         {
          totaltime=0;
         }
         //convert this to show when the job will end 
         //  totaltime= Number(Parts.find().fetch().pop().quantity)/Number(Parts.find().fetch().pop().cavitation)
         //  totaltime = totaltime*cycletime

         // totaltime= parseInt(totaltime/60); 
         // if (totaltime <=0)
         // {
         //  totaltime=0;
         // }
// if (estimatedminutes <=0)
// {

//   estimatedminutes=0;
// }         
        estimatedhours = estimatedminutes/60;
        estimatedhours = parseInt(estimatedhours)
       estimatedminutesleft=estimatedminutes%60;
      finishtime=moment(Parts.find().fetch().pop().timestamp.toString()).add(estimatedhours, 'hours').format("YYYY-MM-DD HH:mm:ss.SSS")
      finishtime = moment(finishtime).add(estimatedminutesleft, 'minutes').format("YYYY-MM-DD HH:mm:ss.SSS")
      
//        if (estimatedhours===1)
//          {
//          return estimatedhours.toString().concat(" hour left and ",estimatedminutesleft," minutes left");
// }
 return finishtime.toString();


     },
   hour1p: function () {
     num= Machines.findOne();
     num=num.machinenumber
     now="07"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     //change these to be based off of a count function
     if (count>1)
    {
     return "1"
   }
   },
   
   hour2p: function () {
   num= Machines.findOne();
     num=num.machinenumber
     now="08"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (count>1)
    {
     return "2"
   }
   },
   hour3p: function () {
     num= Machines.findOne();
     num=num.machinenumber
     now="09"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (count>1)
    {
     return "3"
   }
   },
   hour4p: function () {
    num= Machines.findOne();
     num=num.machinenumber
     now="10"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (count>1)
    {
     return "4"
   }
   },
   hour5p: function () {
    num= Machines.findOne();
     num=num.machinenumber
     now="11"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (count>1)
    {
     return "5"
   }
   },
   hour6p: function () {
     num= Machines.findOne();
     num=num.machinenumber
     now="12"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (count>1)
    {
     return "6"
   }
   },
   hour7p: function () {
     num= Machines.findOne();
     num=num.machinenumber
     now="13"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (count>1)
    {
     return "7"
   }
   },
   hour8p: function () {
     num= Machines.findOne();
     num=num.machinenumber
     now="14"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (count>1)
    {
     return "8"
   }
   },
    incomingcycles1: function () {
     return incomingcycles1()},
     incomingcycles1p: function () {
     return incomingcycles1p()},
     incomingcycles2: function () {
     return incomingcycles2()},
     incomingcycles2p: function () {
     return incomingcycles2p()},
     incomingcycles3: function () {
     return incomingcycles3()},
     incomingcycles3p: function () {
     return incomingcycles3p()},
     incomingcycles4: function () {
     return incomingcycles4()},
     incomingcycles4p: function () {
     return incomingcycles4p()},
     incomingcycles5: function () {
     return incomingcycles5()},
     incomingcycles5p: function () {
     return incomingcycles5p()},
     incomingcycles6: function () {
     return incomingcycles6()},
     incomingcycles6p: function () {
     return incomingcycles6p()},
     incomingcycles7: function () {
     return incomingcycles7()},
     incomingcycles7p: function () {
     return incomingcycles7p()},
     incomingcycles8: function () {
     return incomingcycles8()},
     incomingcycles8p: function () {
     return incomingcycles8p()},
   
   earnedhours1: function () {
     return incomingcycles1()},
     earnedhours1p: function () {
     return incomingcycles1p()},
     earnedhours2: function () {
     return incomingcycles2()},
     earnedhours2p: function () {
     return incomingcycles2p()},
     earnedhours3: function () {
     return incomingcycles3()},
     earnedhours3p: function () {
     return incomingcycles3p()},
     earnedhours4: function () {
     return incomingcycles4()},
     earnedhours4p: function () {
     return incomingcycles4p()},
     earnedhours5: function () {
     return incomingcycles5()},
     earnedhours5p: function () {
     return incomingcycles5p()},
     earnedhours6: function () {
     return incomingcycles6()},
     earnedhours6p: function () {
     return incomingcycles6p()},
     earnedhours7: function () {
     return incomingcycles7()},
     earnedhours7p: function () {
     return incomingcycles7p()},
     earnedhours8: function () {
     return incomingcycles8()},
     earnedhours8p: function () {
     return incomingcycles8p()},

    

    

     changeStatus1: function() {
       num= Machines.findOne();
     num=num.machinenumber
     now="07"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
        if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object'  && count ===1)
       {
         var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ; 
         
         earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
       }
      
      //The end time will be the time stamp that is from the job submitted right after the first job
       //if the count is 2 then I will need to get the time stamp of the second to latest submitted job
      else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >=2)
       {
         var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
         
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
      num= Machines.findOne();
     num=num.machinenumber
     now="07"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
      if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *.5;
         
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
     num= Machines.findOne();
     num=num.machinenumber
     now="08"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       if (typeof Parts.findOne({hour: now}) === 'object'  && count ===1)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ; ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
      
      //The end time will be the time stamp that is from the job submitted right after the first job
      //if the count is 2 then I will need to get the time stamp of the second to latest submitted job
      else if (typeof Parts.findOne({hour: now})=== 'object'  && count >=2)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
         
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
changeStatus2p: function() {
 
     num= Machines.findOne();
     num=num.machinenumber
     now="08"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
      if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *.5;
         
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
changeStatus3: function() {
        
    num= Machines.findOne();
     num=num.machinenumber
     now="09"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object'  && count ===1)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ; 
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
      
     
      else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >=2)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
         
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
changeStatus3p: function() {
    num= Machines.findOne();
     num=num.machinenumber
     now="09"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
      if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *.5;
         
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
changeStatus4: function() {
    num= Machines.findOne();
     num=num.machinenumber
     now="10"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object'  && count ===1)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ; ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
      
      //The end time will be the time stamp that is from the job submitted right after the first job
      //if the count is 2 then I will need to get the time stamp of the second to latest submitted job
      else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >=2)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
         
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
changeStatus4p: function() {
  num= Machines.findOne();
     num=num.machinenumber
     now="10"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *.5;
         
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

changeStatus5: function() {
        num= Machines.findOne();
     num=num.machinenumber
     now="11"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       if (typeof Parts.findOne({hour: now}) === 'object'  && count ===1)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ; 
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
      
      //The end time will be the time stamp that is from the job submitted right after the first job
      //if the count is 2 then I will need to get the time stamp of the second to latest submitted job
      else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >=2)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
         
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
changeStatus5p: function() {
  num= Machines.findOne();
     num=num.machinenumber
     now="11"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *.5;
         
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
changeStatus6: function() {
    num= Machines.findOne();
     num=num.machinenumber
     now="12"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object'  && count ===1)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ; ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
      
      //The end time will be the time stamp that is from the job submitted right after the first job
      //if the count is 2 then I will need to get the time stamp of the second to latest submitted job
      else if (typeof Parts.findOne({hour: now, month:month, day:day})=== 'object'  && count >=2)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
         
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
changeStatus6p: function() {
 
 num= Machines.findOne();
     num=num.machinenumber
     now="12"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *.5;
         
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
 changeStatus7: function() {
    num= Machines.findOne();
     num=num.machinenumber
     now="13"
   month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object'  && count ===1)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ; ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
      
      //The end time will be the time stamp that is from the job submitted right after the first job
      //if the count is 2 then I will need to get the time stamp of the second to latest submitted job
      else if (typeof Parts.findOne({hour: now})=== 'object'  && count >=2)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
         
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
changeStatus7p: function() {
 
 num= Machines.findOne();
     num=num.machinenumber
     now="13"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *.5;
         
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
  changeStatus8: function() {
   num= Machines.findOne();
     num=num.machinenumber
     now="14"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
       if (typeof Parts.findOne({hour: now}) === 'object'  && count ===1)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ; ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
      
      //The end time will be the time stamp that is from the job submitted right after the first job
      //if the count is 2 then I will need to get the time stamp of the second to latest submitted job
      else if (typeof Parts.findOne({hour: now})=== 'object'  && count >=2)
      {
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
         
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
changeStatus8p: function() {
 
 num= Machines.findOne();
     num=num.machinenumber
     now="14"
     month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
      //the time stamp of the most recent job will be 
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===2)
      {
        //Part = Parts.find({hour: '12'}).fetch().pop().timestamp
        //I need the time stamp of the most recently submitted job
        //if there are 2 jobs submitted then this 2nd job will start at its time stamp and end at the end of the hour
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) *.5;
         
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
  part1: function ()
   {

  num= Machines.findOne();
     num=num.machinenumber
     now = "07"
    month=moment().format("MM")
    day=moment().format("DD")
    
 //find the current day
 
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
    
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     
      
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //Just fetch the most recently submitted job  
    part=Parts.find().fetch().pop()
     
  return part.partnumber

   }
     },
   part1p: function ()
   {
   num= Machines.findOne();
     num=num.machinenumber
     now= "07"
    month=moment().format("MM")
    day=moment().format("DD")

count= Parts.find({hour: now, month:month, day:day}).count()
 var part =Parts.find({hour: now, month:month, day:day}).fetch().pop()

if(typeof Parts.find({hour: now, month:month, day:day}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }
},


   
   
   
   

    part2: function ()
   {
  num= Machines.findOne();
     num=num.machinenumber
     now = "08"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //Just fetch the most recently submitted job  
    part=Parts.find().fetch().pop()
     
  return part.partnumber

   }
   },
   part2p: function ()
   {
 num= Machines.findOne();
     num=num.machinenumber
     now= "08"
     month=moment().format("MM")
    day=moment().format("DD")
    
      count= Parts.find({hour: now, month:month, day:day}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now, month:month, day:day}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }

},
   
   
  part3: function ()
   {
     num= Machines.findOne();
     num=num.machinenumber
     now = "09"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //Just fetch the most recently submitted job  
    part=Parts.find().fetch().pop()
     
  return part.partnumber

   }

   },
   part3p: function ()
   {
 num= Machines.findOne();
     num=num.machinenumber
     now= "09"
     month=moment().format("MM")
    day=moment().format("DD")
    
      count= Parts.find({hour: now, month:month, day:day}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now, month:month, day:day}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }


   },
   
  part4: function ()
   {

    num= Machines.findOne();
     num=num.machinenumber
     now = "10"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //Just fetch the most recently submitted job  
    part=Parts.find().fetch().pop()
     
  return part.partnumber

   }

   },
   part4p: function ()
   {
 num= Machines.findOne();
     num=num.machinenumber
     now= "10"
      month=moment().format("MM")
    day=moment().format("DD")
    
      count= Parts.find({hour: now, month:month, day:day}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now, month:month, day:day}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }

},
   
   
   part5: function ()
   {
     num= Machines.findOne();
     num=num.machinenumber
     now = "11"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //Just fetch the most recently submitted job  
    part=Parts.find().fetch().pop()
     
  return part.partnumber

   }

   },
   part5p: function ()
   { num= Machines.findOne();
     num=num.machinenumber
     now= "11"
     month=moment().format("MM")
    day=moment().format("DD")

    
      count= Parts.find({hour: now, month:month, day:day}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now, month:month, day:day}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }

},
   
   
    part6: function ()
   { num= Machines.findOne();
     num=num.machinenumber
     now = "12"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined'&& Parts.find().fetch().pop().hour < now )
{
  //Just fetch the most recently submitted job  
    part=Parts.find().fetch().pop()
     
  return part.partnumber

   }
 }

   ,
   part6p: function ()
   { num= Machines.findOne();
     num=num.machinenumber
     now= "12"
    month=moment().format("MM")
    day=moment().format("DD")

    
      count= Parts.find({hour: now, month:month, day:day}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now, month:month, day:day}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }

},
   
  
    part7: function ()
   {
     num= Machines.findOne();
     num=num.machinenumber
     now = "13"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined'&& Parts.find().fetch().pop().hour < now )
{
  //Just fetch the most recently submitted job  
    part=Parts.find().fetch().pop()
     
  return part.partnumber

   }

   },
   part7p: function ()
   { num= Machines.findOne();
     num=num.machinenumber
     now= "13"
    month=moment().format("MM")
    day=moment().format("DD")

    
      count= Parts.find({hour: now, month:month, day:day}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now, month:month, day:day}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }


   },
  
    part8: function ()
   { num= Machines.findOne();
     num=num.machinenumber
     now = "14"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now )
{
  //Just fetch the most recently submitted job  
    part=Parts.find().fetch().pop()
     
  return part.partnumber

   }
 },
   part8p: function ()
   {
num= Machines.findOne();
     num=num.machinenumber
     now= "14"
    month=moment().format("MM")
    day=moment().format("DD")
    
      count= Parts.find({hour: now, month:month, day:day}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour


 var part =Parts.find({hour: now, month:month, day:day}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }


   }
   
 
});
