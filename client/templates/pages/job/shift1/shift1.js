//put any reusable code up here in javascript
//any data/vars or functions that aren't getting sent directly to the html code can be calculated
//in a javascript function
 Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');
Meteor.subscribe('entries');
Meteor.subscribe('hours');

function incomingcycles1() {
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
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
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
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }   
        
      }
   
     function incomingcycles1p () {
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
          
    
      function incomingcycles2 () {
        //grab all cycles from today
       num= Machines.findOne();
     num=num.machinenumber
     now="08"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment().format("YYYY-MM-DD 09:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }   
        
      }
      
     function incomingcycles2p () {
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

    function incomingcycles3 () {
         //grab all cycles from today
       num= Machines.findOne();
     num=num.machinenumber
     now="09";
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment().format("YYYY-MM-DD 10:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }   
        
      }
      
      function incomingcycles3p() {
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
      
      function incomingcycles4() {
         //grab all cycles from today
        num= Machines.findOne();
     num=num.machinenumber
     now="10";
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
  if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment().format("YYYY-MM-DD 11:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }   
        
      }
      function incomingcycles4p() {
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
      
      function incomingcycles5() {
        num= Machines.findOne();
     num=num.machinenumber
     now="11";
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
  if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment().format("YYYY-MM-DD 12:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }   
        
      }
      
     function incomingcycles5p() {
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
      
      function incomingcycles6() {
//         //grab all cycles from today
     num= Machines.findOne();
     num=num.machinenumber
     now="12"
   month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment().format("YYYY-MM-DD 13:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }   
        
      }
      
     function  incomingcycles6p() {
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
     
      function incomingcycles7() {
        num= Machines.findOne();
     num=num.machinenumber
     now="13";
    month=moment().format("MM")
    day=moment().format("DD")
      
      if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }   
        
      }
      
     function incomingcycles7p() {
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
      
      function incomingcycles8() {
         num= Machines.findOne();
     num=num.machinenumber
      now="14"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'undefined')
{
//all this is activated whenever a job is submitted in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment().format("YYYY-MM-DD 15:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }
 if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is an end job in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }   
        
      }
      function incomingcycles8p() {
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
 function earnedhours1() {
          //get actual
          //I need the cycle time that is located in the Entries db
          now="14"
    month=moment().format("MM")
    day=moment().format("DD")

          count= Parts.find({hour: now, month:month, day:day}).count()

          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles1()/planned
             
             return earnedhours      
            }
function earnedhours1p() {
      cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles1p()/planned
          return earnedhours
            }
function earnedhours2() {
          //get actual
          //I need the cycle time that is located in the Entries db
          
          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles2()/planned
                return earnedhours   
            }
function earnedhours2p() {
      
          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles2p()/planned
          return earnedhours
            }
function earnedhours3() {
          //get actual
          //I need the cycle time that is located in the Entries db
          
          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
         
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles3()/planned
            return earnedhours       
            }
function earnedhours3p() {
       cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles3p()/planned
          return earnedhours
            }
function earnedHours4() {
          //get actual
          //I need the cycle time that is located in the Entries db
          
          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
         
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles4()/planned
              return earnedhours     
            }
function earnedhours4p() {
      cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles4p()/planned
          return earnedhours
            }
            function earnedHours5() {
          //get actual
          //I need the cycle time that is located in the Entries db
          
          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles5()/planned
                return earnedhours   
            }
function earnedhours5p() {
      cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles5p()/planned
          return earnedhours
            }
            function earnedHours6() {
          //get actual
          //I need the cycle time that is located in the Entries db
          
          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles6()/planned
                 return earnedhours  
            }
function earnedhours6p() {
      cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
          
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles6p()/planned
          return earnedhours
            }
            function earnedHours7() {
          //get actual
          //I need the cycle time that is located in the Entries db
          
          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles7()/planned
                return earnedhours   
            }
function earnedhours7p() {
      cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
          
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles7p()/planned
          return earnedhours
            }
            function earnedHours8() {
          //get actual
          //I need the cycle time that is located in the Entries db
          
          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
        
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles8()/planned
                 return earnedhours  
            }
function earnedhours8p() {
       cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           console.log("This is the cycle time for this partnumber" + cycletime)
          planned=1000/Number(cycletime)
          earnedhours = incomingcycles8p()/planned
          return earnedhours
            }
function earnedhourstotal() {
            total= earnedhours1()+earnedhours2()+earnedhours3()+earnedhours4()+earnedhours5()+earnedhours6()+earnedhours7()+earnedhours8()+earnedhours1p()+earnedhours2p()+earnedhours3p()+earnedhours4p()+earnedhours5p()+earnedhours6p()+earnedhours7p()+earnedhours8p()
            return total
            }
function incomingc1(){

now="07"
//if no job was submitted this hour and there was not a endjob submitted 
//after the previous job submission
//Then show all the count from the previous time stamp to the end of the hour
Hours.find({hour: now, month:month, day:day}).fetch().pop().timestamp //this will find the time stamp of when the latest job was ended
if (Parts.find().fetch().pop()!=now && Hours.find() )
}
function incomingc2(){
now="08"
 total= incomingcycles1()+incomingcycles2()
 if (total >=0){
return total
}
}
function incomingc3(){
now="09"
total= incomingcycles1()+incomingcycles2()+incomingcycles3()
 if (total >=0){
return total
}
  
}
function incomingc4(){
now="10"
total= incomingcycles1()+incomingcycles2()+incomingcycles3()+incomingcycles4()
 if (total >=0){
return total
}
  
}
function incomingc5(){
now="11"
total= incomingcycles1()+incomingcycles2()+incomingcycles3()+incomingcycles4()+incomingcycles5()
 if (total >=0){
return total
}
  
}
function incomingc6(){
now="12"
total= incomingcycles1()+incomingcycles2()+incomingcycles3()+incomingcycles4()+incomingcycles5()+incomingcycles6()
 if (total >=0){
return total
}
  
}
function incomingc7(){
now="13"
total= incomingcycles1()+incomingcycles2()+incomingcycles3()+incomingcycles4()+incomingcycles5()+incomingcycles6()+incomingcycles7()
 if (total >=0){
return total
}
  
}
function incomingc8(){
now="14"
total= incomingcycles1()+incomingcycles2()+incomingcycles3()+incomingcycles4()+incomingcycles5()+incomingcycles6()+incomingcycles7()+incomingcycles8()
 if (total >=0){
return total
}
  
}

function earnedc1(){
total=earnedhours1()
if (total >=0){
return total
}
}
function earnedc2(){

 total= earnedhours1()+earnedhours2()
 if (total >=0){
return total
}
}
function earnedc3(){
total= earnedhours1()+earnedhours2()+earnedhours3()
 if (total >=0){
return total
}
  
}
function earnedc4(){
total= earnedhours1()+earnedhours2()+earnedhours3()+earnedhours4()
 if (total >=0){
return total
}
  
}
function earnedc5(){
total= earnedhours1()+earnedhours2()+earnedhours3()+earnedhours4()+earnedhours5()
 if (total >=0){
return total
}
  
}
function earnedc6(){
total= earnedhours1()+earnedhours2()+earnedhours3()+earnedhours4()+earnedhours5()+earnedhours6()
 if (total >=0){
return total
}
  
}
function earnedc7(){
total= earnedhours1()+earnedhours2()+earnedhours3()+earnedhours4()+earnedhours5()+earnedhours6()+earnedhours7()
 if (total >=0){
return total
}
  
}
function earnedc8(){
total= earnedhours1()+earnedhours2()+earnedhours3()+earnedhours4()+earnedhours5()+earnedhours6()+earnedhours7()+earnedhours8()
 if (total >=0){
return total
}
  
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
     if (earnedhours1()>=0)
     {
     return earnedhours1()
   }},
     earnedhours1p: function () {
     if (earnedhours1p()>=0)
     {
     return earnedhours1p()
   }},
     earnedhours2: function () {
     if (earnedhours2()>=0)
     {
     return earnedhours2()
   }},
     earnedhours2p: function () {
      if (earnedhours2p()>=0)
     {
     return earnedhours2p()
   }},
     earnedhours3: function () {
      if (earnedhours3()>=0)
     {
     return earnedhours3()
   }},
     earnedhours3p: function () {
      if (earnedhours3p()>=0)
     {
     return earnedhours3p()
   }},
     earnedhours4: function () {
      if (earnedhours4()>=0)
     {
     return earnedhours4()
   }},
     earnedhours4p: function () {
      if (earnedhours4p()>=0)
     {
     return earnedhours4p()
   }},
     earnedhours5: function () {
      if (earnedhours5()>=0)
     {
     return earnedhours5()
   }},
     earnedhours5p: function () {
      if (earnedhours5p()>=0)
     {
     return earnedhours5p()
   }},
     earnedhours6: function () {
      if (earnedhours6()>=0)
     {
     return earnedhours6()
   }},
     earnedhours6p: function () {
      if (earnedhours6p()>=0)
     {
     return earnedhours6p()
   }},
     earnedhours7: function () {
      if (earnedhours7()>=0)
     {
     return earnedhours7()
   }},
     earnedhours7p: function () {
      if (earnedhours7p()>=0)
     {
     return earnedhours7p()
   }},
     earnedhours8: function () {
      if (earnedhours8()>=0)
     {
     return earnedhours8()
   }},
     earnedhours8p: function () {
      if (earnedhours8p()>=0)
     {
     return earnedhours8p()
   }},

    incomingc1: function(){
      return incomingc1();},
      incomingc2: function(){
      return incomingc2();},
      incomingc3: function(){
      return incomingc3();},
      incomingc4: function(){
      return incomingc4();},
      incomingc5: function(){
      return incomingc5();},
      incomingc6: function(){
      return incomingc6();},
      incomingc7: function(){
      return incomingc7();},
      incomingc8: function(){
      return incomingc8();},
    incomingc1p: function(){
      return incomingc1p();},
      incomingc2p: function(){
      return incomingc2p();},
      incomingc3p: function(){
      return incomingc3p();},
      incomingc4p: function(){
      return incomingc4p();},
      incomingc5p: function(){
      return incomingc5p();},
      incomingc6p: function(){
      return incomingc6p();},
      incomingc7p: function(){
      return incomingc7p();},
      incomingc8p: function(){
      return incomingc8p();},
    

     changeStatus1: function() {
      
            
        if (earnedhours1() >=1)
       {
         return "Green"
      }
      else if (earnedhours1() <1)
       {

        return "Yellow"
       }



     },
    changeStatus1p: function() {
     
       
       if (earnedhours1p() >=1 && count>1)
      { 
         
    return "Green"
    
      }

      else if (earnedhours1p() <1&& count>1)
  {
 
    return "Yellow"
   
 }
      // }
    },
    

    changeStatus2: function() {
     
            
       if (earnedhours2() >=1)
      {
        return "Green"
      }

      else if (earnedhours2() <1)
      {

        return "Yellow"
      }




    },
changeStatus2p: function() {
 
     
       
       if (earnedhours2p() >=1 && count>1)
      { 
         
    return "Green"
    
      }

      else if (earnedhours2p() <1&& count>1)
  {
 
    return "Yellow"
   
 }
      // }
    },
changeStatus3: function() {
        
   
            
       if (earnedhours3() >=1)
      {
        return "Green"
      }

      else if (earnedhours3() <1)
      {

        return "Yellow"
      }




    },
changeStatus3p: function() {
   
       
       if (earnedhours3p() >=1)
      { 
         
    return "Green"
    
      }

      else if (earnedhours3p() <1)
  {
 
    return "Yellow"
   
 }
      // }
    },
changeStatus4: function() {
    
            
       if (earnedhours4() >=1)
      {
        return "Green"
      }

      else if (earnedhours4() <1)
      {

        return "Yellow"
      }




    },
changeStatus4p: function() {
  
       
       if (earnedhours4p() >=1)
      { 
         
    return "Green"
    
      }

      else if (earnedhours4p() <1&& count>1)
  {
 
    return "Yellow"
   
 }
      // }
    },

changeStatus5: function() {
      
            
       if (earnedhours5() >=1)
      {
        return "Green"
      }

      else if (earnedhours5() <1)
      {

        return "Yellow"
      }




    },
changeStatus5p: function() {
  
       
       if (earnedhours5p() >=1)
      { 
         
    return "Green"
    
      }

      else if (earnedhours5p() <1)
  {
 
    return "Yellow"
   
 }
      // }
    },
changeStatus6: function() {
   
            
       if (earnedhours6() >=1)
      {
        return "Green"
      }

      else if (earnedhours6() <1)
      {

        return "Yellow"
      }




    },
changeStatus6p: function() {
 
 
       
       if (earnedhours6p())
      { 
         
    return "Green"
    
      }

      else if (earnedhours6p() <1)
  {
 
    return "Yellow"
   
 }
      // }
    },
 changeStatus7: function() {
    
            
       if (earnedhours7() >=1)
      {
        return "Green"
      }

      else if (earnedhours7() <1)
      {

        return "Yellow"
      }




    },
changeStatus7p: function() {
 
 
       
       if (earnedhours7p() >=1)
      { 
         
    return "Green"
    
      }

      else if (earnedhours7p() <1)
  {
 
    return "Yellow"
   
 }
      // }
    },
  changeStatus8: function() {
   
            
       if (earnedhours8() >=1)
      {
        return "Green"
      }

      else if (earnedhours8() <1)
      {

        return "Yellow"
      }




    },
changeStatus8p: function() {
 
 
       
       if (earnedhours8p() >=1)
      { 
         
    return "Green"
    
      }

      else if (earnedhours8p() <1)
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

 var part =Parts.find({hour: now, month:month, day:day}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now, month:month, day:day}).fetch().pop() === 'object' && count>=2) // this is the last entered item
 {
   part = Parts.find({hour: now, month:month, day:day}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
       
  }


   }
   
});
