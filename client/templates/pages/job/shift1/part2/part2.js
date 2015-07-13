Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');

 Meteor.subscribe('hours');

 Template.part2.helpers({




hour4p: function () {
     num= Machines.find().fetch().pop().cellnum;
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
     num= Machines.find().fetch().pop().cellnum;
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
      num= Machines.find().fetch().pop().cellnum;
     now="12"
    month=moment().format("MM")
    day=moment().format("DD")
      
     count= Parts.find({hour: now, month:month, day:day}).count()
     if (count>1)
    {
     return "6"
   }
   },
planned4: function(){
   now="10"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 10:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
             cycletimeH=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
              
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           timestamp= moment().format("YYYY-MM-DD 10:59:00.000")

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined')
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            cycletimeH=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
              
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
          
},
planned5: function(){
   now="11"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 11:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
             cycletimeH=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
              
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           timestamp= moment().format("YYYY-MM-DD 11:59:00.000")

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined')
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            cycletimeH=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
            
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
          
},
planned6: function(){
   now="12"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 12:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
             cycletimeH=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
              
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           timestamp= moment().format("YYYY-MM-DD 12:59:00.000")

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined')
          {
            //I need to retrieve the cycle time for the job submitted prior to this hour
            //so find  $lte than the entire time stamp!
            cycletimeH=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
              
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
          
},
plannedc4: function(){
   now="10"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 10:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
             cycletimeH=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           timestamp= moment().format("YYYY-MM-DD 10:59:00.000")

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined')
          {
             timeDays=Number(Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().day)
            timeHour=Number(Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().hour)  + (Number(timeDays)*24)
             nowDays=Number(moment().format("DD"))
             nowHours=Number(now) + (Number(nowDays)*24)
             
            multiplier=nowHours - timeHour
            cycletimeH=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)*multiplier
           }
          
},
plannedc5: function(){
   now="11"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 11:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
             cycletimeH=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           timestamp= moment().format("YYYY-MM-DD 11:59:00.000")

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined')
          {
             timeDays=Number(Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().day)
            timeHour=Number(Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().hour)  + (Number(timeDays)*24)
             nowDays=Number(moment().format("DD"))
             nowHours=Number(now) + (Number(nowDays)*24)
             
            multiplier=nowHours - timeHour
            cycletimeH=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
            
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)*multiplier
           }
          
},
plannedc6: function(){
   now="12"
          month=moment().format("MM")
          day=moment().format("DD")
         timestamp= moment().format("YYYY-MM-DD 12:59:00.000")
          if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='object')
          {
          //I need if statements that determine what to set the cycletime equal time
             cycletimeH=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day}).fetch().pop().cycletimeQ
           if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
            
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)
           }
           //no job submitted this hour and the end job hasn't been clicked after the last just was submitted
           //I need to setup that logic.
           timestamp= moment().format("YYYY-MM-DD 12:59:00.000")

     //part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  

            if(typeof Parts.findOne({hour:now, month:month, day:day}) ==='undefined')
          {
             timeDays=Number(Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().day)
            timeHour=Number(Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().hour)  + (Number(timeDays)*24)
             nowDays=Number(moment().format("DD"))
             nowHours=Number(now) + (Number(nowDays)*24)
             
            multiplier=nowHours - timeHour
            cycletimeH=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeH
          cycletimeP=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeP
          cycletimeQ=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop().cycletimeQ
          if (cycletimeH>0)
            {
              cycletime=cycletimeH
              
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
             
                      planned=1000/Number(cycletime)
          
              
             return parseInt(planned)*multiplier
           }
          
},

  incomingcycles4: function () {
         //grab all cycles from today
        num= Machines.find().fetch().pop().cellnum;
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
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' && Parts.find().fetch().pop().hour < now && moment().format("HH") >=now)
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
 


 if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined'&& moment().format("HH") >=now)
{
  //This needs to be setup to multiply the cycles by the last submitted Part so fetch().pop()
     return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 10:00:00.000"), $lt: moment(Hours.findOne({hour: now, month:month, day:day})).format("YYYY-MM-DD 10:mm:ss.SSS")}}).count() * Parts.find({month: {$lte: month },day: {$lte: day}, hour: {$lte: now}}).fetch().pop().cavitation
  
    }
    }   
     },   
      
      incomingcycles4p: function () {
       num= Machines.find().fetch().pop().cellnum;
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
     

     
       },
      
      incomingcycles5: function () {
         num= Machines.find().fetch().pop().cellnum;
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
        
      },
      
     incomingcycles5p: function () {
         num= Machines.find().fetch().pop().cellnum;
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
     

     
       },
 
      
      incomingcycles6: function () {
//         //grab all cycles from today
      num= Machines.find().fetch().pop().cellnum;
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
        
      },
      
     incomingcycles6p: function () {
         num= Machines.find().fetch().pop().cellnum;
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
     

     
       },

       incomingc4:function(){
now="10"

  
},
 incomingc5:function(){
now="11"

  
},
 incomingc6:function(){
now="12"

  
},

earnedhours4: function() {
          //get actual
         
         
          planned=planned=planned4()
          earnedhours = Number(incomingcycles4())/planned
              
             return earnedhours
          
            },
earnedhours4p: function() {
      planned=planned4p()
          earnedhours = Number(incomingcycles4p())/planned
         
            },
earnedhours5: function() {
          //get actual
        
          
          planned=planned=planned5()
          earnedhours = Number(incomingcycles5())/planned
            
         
            },
earnedhours5p: function() {
      planned=planned5p()
          earnedhours = Number(incomingcycles5p())/planned
         
            },
  earnedhours6: function() {
          //get actual
        
          planned=planned=planned6()
          earnedhours = Number(incomingcycles6())/planned
           return earnedhours
           
            },
earnedhours6p: function() {
      planned=planned6p()
          earnedhours = Number(incomingcycles6p())/planned
         
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

    part4: function ()
   {

     num= Machines.find().fetch().pop().cellnum;
     now = "10"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 10:59:00.000")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
     part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
  return part.partnumber

   }

   },
   part4p: function ()
   {
  num= Machines.find().fetch().pop().cellnum;
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
      num= Machines.find().fetch().pop().cellnum;
     now = "11"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 11:59:00.000")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
    part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  return part.partnumber

   }

   },
   part5p: function ()
   {  num= Machines.find().fetch().pop().cellnum;
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
   {  num= Machines.find().fetch().pop().cellnum;
     now = "12"
    month=moment().format("MM")
    day=moment().format("DD")
    timestamp= moment().format("YYYY-MM-DD 12:59:00.000")
var part =Parts.findOne({hour: now, month:month, day:day})


 if(typeof Parts.findOne({hour: now, month:month, day:day}) === 'object')
 {
    return part.partnumber
 }
if (typeof Parts.findOne({hour: now, month:month, day:day}) === 'undefined' )
{
  //fetch the latest part from the job that happened before this month day and hour
  //CycleTimeStamp: {$gte: startTime}
     part=Parts.find({timestamp: {$lt: timestamp}}).fetch().pop()
     
  return part.partnumber

   }
 }

   ,
   part6p: function ()
   {  num= Machines.find().fetch().pop().cellnum;
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
 	})