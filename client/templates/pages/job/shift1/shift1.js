//put any reusable code up here in javascript
//any data/vars or functions that aren't getting sent directly to the html code can be calculated
//in a javascript function
 Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');
Meteor.subscribe('workcenters');
Meteor.subscribe('entries');
Meteor.subscribe('hours');

function pressnumber(){
//basically I need to have num equal the CellNum of the Workcenter that was selected

num= Workcenters.find({CellID: Machines.find().fetch().pop().machinenumber}).fetch().pop().CellNum;
return num

}
function cycletime(){
//I want the cycle time for the job submitted for this workcenter!
//
//I need if statements that determine what to set the cycletime equal time
cycletime=Entries.find({partnumber:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
if ( )

}
function planned1(){
          now="07"
          month=moment().format("MM")
          day=moment().format("DD")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          cycletime=Entries.find({partnumber:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          
              
             return planned
           }
            if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined')
          {
          cycletime=Entries.find({partnumber:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          
              
             return planned
           }
}
function planned2(){
   
   return planned
}
function planned3(){
   
   return planned
}
function planned4(){
   
   return planned
}
function planned5(){
   
   return planned
}
function planned6(){
   
   return planned
}
function planned7(){
   
   return planned
}
function planned8(){
   
   return planned
}
function plannedc1(){

  return planned
}
function plannedc2(){
   
   return planned
}
function plannedc3(){
   
   return planned
}
function plannedc4(){
   
   return planned
}
function plannedc5(){
   
   return planned
}
function plannedc6(){
   
   return planned
}
function plannedc7(){
   
   return planned
}
function plannedc8(){
   
   return planned
}
function incomingcycles1() {
        //grab all cycles from today
      num= pressnumber();
    
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
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("mm") >=now)
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
 

//Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop()
//This find the last submitted part prior to this hour

 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined')
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop().cavitation;
  
    }
    }   
        
      }
   
     function incomingcycles1p () {
        num= pressnumber();
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
        num= pressnumber();
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
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("mm") >=now)
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
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 08:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 08:mm:ss.SSS")}}).count() * Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop().cavitation
  
    }
    }   
        
      }
      
     function incomingcycles2p () {
        num= pressnumber();
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
        num= pressnumber();
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
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("mm") >=now)
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
 

//This code won't work when there is a newer submitted job and there was not a job submitted this hour.
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 09:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 09:mm:ss.SSS")}}).count() * Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop().cavitation
  
    }
    }   
        
      }
      
      function incomingcycles3p() {
           num= pressnumber();
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
        num= pressnumber();
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
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("mm") >=now)
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
{
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
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop().cavitation
  
    }
    }   
     }   
      
      function incomingcycles4p() {
       num= pressnumber();
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
         num= pressnumber();
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
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("mm") >=now)
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
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 11:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 11:mm:ss.SSS")}}).count() * Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop().cavitation
  
    }
    }   
        
      }
      
     function incomingcycles5p() {
         num= pressnumber();
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
      num= pressnumber();
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
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("mm") >=now)
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
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 12:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 12:mm:ss.SSS")}}).count() * Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop().cavitation
  
    }
    }   
        
      }
      
     function  incomingcycles6p() {
         num= pressnumber();
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
         num= pressnumber();
     now="13";
    month=moment().format("MM")
    day=moment().format("DD")
    count= Parts.find({hour: now, month:month, day:day}).count()
      //This is finding out if there was an end job press
      
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
 

//This code is basically finding out if there is a job submitted in the previous hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("mm") >=now)
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
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 13:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop().cavitation
  
    }
    }   
        
      }
      
     function incomingcycles7p() {
         num= pressnumber();
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
          num= pressnumber();
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
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("mm") >=now)
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
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 14:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD 14:mm:ss.SSS")}}).count() * Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop().cavitation
  
    }
    }   
        
      }
      function incomingcycles8p() {
         num= pressnumber();
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
         now="07"
          month=moment().format("MM")
          day=moment().format("DD")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          cycletime=Entries.find({partnum:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles2())/planned
              
             return earnedhours
           }       
            }
function earnedhours1p() {
      cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles1p())/planned
          if(earnedhours >= 0)
             {
             return earnedhours
             } 
            }
function earnedhours2() {
          //I need to show the cycle time for the job that was submitted during this hour
          //
          //
          now="08"
          month=moment().format("MM")
          day=moment().format("DD")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          cycletime=Entries.find({partnum:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles2())/planned
              
             return earnedhours
           }

           if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined' && incomingcycles2()>=0)
          {
          cycletime=Entries.find({partnum:Parts.find({month:month}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles2())/planned
              
             return earnedhours
           }   
            }
function earnedhours2p() {
      
          cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles2p())/planned
          if(earnedhours >= 0)
             {
             return earnedhours
             } 
            }
function earnedhours3() {
          //get actual
          //I need the cycle time that is located in the Entries db
          
          now="09"
          month=moment().format("MM")
          day=moment().format("DD")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          cycletime=Entries.find({partnum:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles2())/planned
              
             return earnedhours
           } 
            if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined' && incomingcycles3()>=0)
          {
          cycletime=Entries.find({partnum:Parts.find({month:month}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles3())/planned
              
             return earnedhours
           }         
            }
function earnedhours3p() {
       cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles3p())/planned
          if(earnedhours >= 0)
             {
             return earnedhours
             } 
            }
function earnedhours4() {
          //get actual
          //I need the cycle time that is located in the Entries db
         now="10"
          month=moment().format("MM")
          day=moment().format("DD")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          cycletime=Entries.find({partnum:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles4())/planned
              
             return earnedhours
           } 
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined' && incomingcycles4()>=0)
          {
          cycletime=Entries.find({partnum:Parts.find({month:month}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles3())/planned
              
             return earnedhours
           }  
            }
function earnedhours4p() {
      cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles4p())/planned
         if(earnedhours >= 0)
             {
             return earnedhours
             } 
            }
function earnedhours5() {
          //get actual
          //I need the cycle time that is located in the Entries db
          now="11"
          month=moment().format("MM")
          day=moment().format("DD")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          cycletime=Entries.find({partnum:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles5())/planned
              
             return earnedhours
           } 
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined' && incomingcycles5()>=0)
          {
          cycletime=Entries.find({partnum:Parts.find({month:month}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles5())/planned
              
             return earnedhours
           }   
            }
function earnedhours5p() {
      cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles5p())/planned
          if(earnedhours >= 0)
             {
             return earnedhours
             } 
            }
  function earnedhours6() {
          //get actual
          //I need the cycle time that is located in the Entries db
          now="12"
          month=moment().format("MM")
          day=moment().format("DD")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          cycletime=Entries.find({partnum:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles6())/planned
              
             return earnedhours
           } 
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined' && incomingcycles6()>=0)
          {
          cycletime=Entries.find({partnum:Parts.find({month:month}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles6())/planned
              
             return earnedhours
           }     
            }
function earnedhours6p() {
      cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
          
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles6p())/planned
          if(earnedhours >= 0)
             {
             return earnedhours
             } 
            }
function earnedhours7() {
        now="13"
          month=moment().format("MM")
          day=moment().format("DD")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          cycletime=Entries.find({partnum:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles7())/planned
              
             return earnedhours
           } 
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined' && incomingcycles7()>=0)
          {
          cycletime=Entries.find({partnum:Parts.find({month:month}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles7())/planned
              
             return earnedhours
           }     
            }
function earnedhours7p() {
      cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
          
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles7p())/planned
          if(earnedhours >= 0)
             {
             return earnedhours
             } 
            }
  function earnedhours8() {
         now="14"
          month=moment().format("MM")
          day=moment().format("DD")
         
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          cycletime=Entries.find({partnum:Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles8())/planned
              
             return earnedhours
           }
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined' && incomingcycles8()>=0)
          {
          cycletime=Entries.find({partnum:Parts.find({month:month}).fetch().pop().partnumber}).fetch().pop().cycletime1
           
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles8())/planned
              
             return earnedhours
           }     
            }
function earnedhours8p() {
       cycletime=Entries.find({partnum:Parts.find().fetch().pop().partnumber}).cycletime1
           console.log("This is the cycle time for this partnumber" + cycletime)
          planned=1000/Number(cycletime)
          earnedhours = Number(incomingcycles8p())/planned
          if(earnedhours >= 0)
             {
             return earnedhours
             } 
            }
function earnedhourstotal() {
            total= Number(earnedhours1()+earnedhours2()+earnedhours3()+earnedhours4()+earnedhours5()+earnedhours6()+earnedhours7()+earnedhours8()+earnedhours1p()+earnedhours2p()+earnedhours3p()+earnedhours4p()+earnedhours5p()+earnedhours6p()+earnedhours7p()+earnedhours8p())
            if(total >= 0)
             {
             return earnedhours
             } 
            }
function incomingc1(){

now="07"
Hours.find({hour: now, month:month, day:day}).fetch().pop().timestamp //this will find the time stamp of when the latest job was ended

//basically show all the count since the job began this hour
num= pressnumber();
    
      now="07"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
  //If ther was a job submitted this hour then
  if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'undefined')
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
       {
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("mm") >=now)
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     total= Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
     }
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment.format("mm")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    total= Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }  
  
return total
}
function incomingc2(){
now="08"

}
function incomingc3(){
now="09"

  
}
function incomingc4(){
now="10"

  
}
function incomingc5(){
now="11"

  
}
function incomingc6(){
now="12"

  
}
function incomingc7(){
now="13"
Hours.find({hour: now, month:month, day:day}).fetch().pop().timestamp //this will find the time stamp of when the latest job was ended

//basically show all the count since the job began this hour
num= pressnumber();
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
  //If ther was a job submitted this hour then
  if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'undefined')
 {
//all this is activated whenever a job is submitted in this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
       {
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
   else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
       {
         //the start time is same.  The end time will be the most recent job

    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
   }
 

//This bit of code is different
//so there is no job this hour
  if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("mm") >=now)
 {
   //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     total= Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 14:00:00.000")}}).count() * Parts.find().fetch().pop().cavitation;
  
     }
     }
//This code is run if there is an end job sent
if (typeof Hours.findOne({hour: now, month:month, day:day}) === 'object')
 {
//run this code when there is a job started in this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count===1)
      {
    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'object' && count>=2)
      {
        //the start time is same.  The end time will be the most recent job

    total= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 1}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Parts.find({hour:now, month: month, day: day}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
 

//if there is not a job submitted this hour
 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment.format("mm")>now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
    total= Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp).format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 13:mm:ss.SSS")}}).count() * Parts.find().fetch().pop().cavitation;
  
    }
    }  
  
return total//basically show all the parts produced since 
  
}
function incomingc8(){
now="14"

  
}
function incomingc1p(){

now="07"

}
function incomingc2p(){
now="08"

}
function incomingc3p(){
now="09"

  
}
function incomingc4p(){
now="10"

  
}
function incomingc5p(){
now="11"

  
}
function incomingc6p(){
now="12"

  
}
function incomingc7p(){
now="13"

}
function incomingc8p(){
now="14"

  
}

// console.log("This is your cavitation" +Parts.findOne().cavitation);
Template.shift1.helpers({
   calculateTime: function () {
        
 num= pressnumber();
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
      num= pressnumber();
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
    num= pressnumber();
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
      num= pressnumber();
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
     num= pressnumber();
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
     num= pressnumber();
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
      num= pressnumber();
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
      num= pressnumber();
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
      num= pressnumber();
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
     incomingcycles1: function () {
     return incomingcycles1()},
    

    incomingc1: function () {
     return incomingcycles1()},
     incomingc1p: function () {
     return incomingcycles1p()},
     incomingc2: function () {
     return incomingcycles2()},
     incomingc2p: function () {
     return incomingcycles2p()},
     incomingc3: function () {
     return incomingcycles3()},
     incomingc3p: function () {
     return incomingcycles3p()},
     incomingc4: function () {
     return incomingcycles4()},
     incomingc4p: function () {
     return incomingcycles4p()},
     incomingc5: function () {
     return incomingcycles5()},
     incomingc5p: function () {
     return incomingcycles5p()},
     incomingc6: function () {
     return incomingcycles6()},
     incomingc6p: function () {
     return incomingcycles6p()},
     incomingc7: function () {
     return incomingcycles7()},
     incomingc7p: function () {
     return incomingcycles7p()},
     incomingc8: function () {
     return incomingcycles8()},
     incomingc8p: function () {
     return incomingcycles8p()},
   
   earnedhours1: function () {
     if (earnedhours1()>=Number(0))
     {
     return earnedhours1()
   }},
     earnedhours1p: function () {
     if (earnedhours1p()>=Number(0))
     {
     return earnedhours1p()
   }},
     earnedhours2: function () {
     if (earnedhours2()>=Number(0))
     {
     return earnedhours2()
   }},
     earnedhours2p: function () {
      if (earnedhours2p()>=Number(0))
     {
     return earnedhours2p()
   }},
     earnedhours3: function () {
      if (earnedhours3()>=Number(0))
     {
     return earnedhours3()
   }},
     earnedhours3p: function () {
      if (earnedhours3p()>=Number(0))
     {
     return earnedhours3p()
   }},
     earnedhours4: function () {
      if (earnedhours4()>=Number(0))
     {
     return earnedhours4()
   }},
     earnedhours4p: function () {
      if (earnedhours4p()>=Number(0))
     {
     return earnedhours4p()
   }},
     earnedhours5: function () {
      if (earnedhours5()>=Number(0))
     {
     return earnedhours5()
   }},
     earnedhours5p: function () {
      if (earnedhours5p()>=Number(0))
     {
     return earnedhours5p()
   }},
     earnedhours6: function () {
      if (earnedhours6()>=Number(0))
     {
     return earnedhours6()
   }},
     earnedhours6p: function () {
      if (earnedhours6p()>=Number(0))
     {
     return earnedhours6p()
   }},
     earnedhours7: function () {
      if (earnedhours7()>=Number(0))
     {
     return earnedhours7()
   }},
     earnedhours7p: function () {
      if (earnedhours7p()>=Number(0))
     {
     return earnedhours7p()
   }},
     earnedhours8: function () {
      if (earnedhours8()>=Number(0))
     {
     return earnedhours8()
   }},
     earnedhours8p: function () {
      if (earnedhours8p()>=Number(0))
     {
     return earnedhours8p()
   }},
// earnedhourstotal: function () {
//       if (earnedhourstotal()>=Number(0))
//      {
//      return earnedhourstotal()
//    }},
   

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
   num= pressnumber();
     now = "07"
    month=moment().format("MM")
    day=moment().format("DD")
    
 //find the current day
 
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
   //set this up to only list if there was not an end job submitted
   //after the job submitted before this hour 
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this hour
  
    part=Parts.find({month: month ,day: {$lte: day}, hour: {$lte: now}}).fetch().pop()
     
  return part.partnumber

   }
     },
   part1p: function ()
   {
   num= pressnumber();
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
  num= pressnumber();
     now = "08"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
    part=Parts.find({month: month ,day: {$lte: day}, hour: {$lte: now}}).fetch().pop()
     
  return part.partnumber

   }
   },
   part2p: function ()
   {
  num= pressnumber();
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
      num= pressnumber();
     now = "09"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
    part=Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop()
     
  return part.partnumber

   }

   },
   part3p: function ()
   {
  num= pressnumber();
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

     num= pressnumber();
     now = "10"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
    part=Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop()
     
  return part.partnumber

   }

   },
   part4p: function ()
   {
  num= pressnumber();
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
      num= pressnumber();
     now = "11"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
    part=Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop()
     
  return part.partnumber

   }

   },
   part5p: function ()
   {  num= pressnumber();
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
   {  num= pressnumber();
     now = "12"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
    part=Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop()
     
  return part.partnumber

   }
 }

   ,
   part6p: function ()
   {  num= pressnumber();
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
      num= pressnumber();
     now = "13"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})

 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
    part=Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop()
     
  return part.partnumber

   }

   },
   part7p: function ()
   {  num= pressnumber();
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
   { num= pressnumber();
     now = "14"
    month=moment().format("MM")
    day=moment().format("DD")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
    part=Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop()
     
  return part.partnumber

   }
 },
   part8p: function ()
   {
 num= pressnumber();
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


   },
   
 endjob: function ()
 {
  //basically show the end job button if there was a submit job button pressed more recently
  //than an end job button
  if (Hours.find().fetch().pop().timestamp<Parts.find().fetch().pop().timestamp)
{
  return true
}
 } ,
 submitjob: function ()
 {
  //show the submit job button if there was an end job button clicked more recently than
  //a submit job button , or show it by default.
  //
if (Hours.find().fetch().pop().timestamp>Parts.find().fetch().pop().timestamp)
{
  return true
}
},

hour1second: function()
 {//if the part count for this hour is <=2 then return true
   now="07"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day}).count() >=2)
  {
    return true
  }

 },
 hour2second: function()
 {
now="08"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day}).count() >=2)
  {
    return true
  }
 } , 
 hour3second: function()
 {
now="09"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day}).count() >=2)
  {
    return true
  }
 } , 
 hour4second: function()
 {
now="10"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day}).count() >=2)
  {
    return true
  }
 } , 
 hour5second: function()
 {
now="11"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day}).count() >=2)
  {
    return true
  }
 } , 
 hour6second: function()
 {
now="12"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day}).count() >=2)
  {
    return true
  }
 } , 
 hour7second: function()
 {
now="13"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day}).count() >=2)
  {
    return true
  }
 }, 
 hour8second: function()
 {
now="14"
    month=moment().format("MM")
    day=moment().format("DD")
  if (Parts.find({hour:now, month:month, day:day}).count() >=2)
  {
    return true
  }
 } ,   

});
