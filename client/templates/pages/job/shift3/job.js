
 

// console.log("This is your cavitation" +Parts.findOne().cavitation);



Template.job.helpers({
    
  calculateTime: function () {
         
//The calculate time function needs to always show the time for the most recently submitted job
//This current calculation does not take into account jobs that may be submitted during the same hour
//if a fetch the latest timestamp I might can use this 
//basically do a pop to get access to the most recent minute
//use this minute is my calculateTime function


        var now = Parts.find().fetch().pop();//This is the last entered parts document
         
         now=now.hour
         min=moment(Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
         //console.log ("This is the minute of the second to lastest item in collection" +moment(Parts.find({}, {sort: {hour: -1}, limit: 2}).fetch().pop().timestamp.toString()).format("mm")) //second to last item in collection
         //I'll use this for comparison to figure out if I need to create a new row 
        // console.log("This is the minute of the submitted job" + moment(Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm"))//this is the latest submitted hour
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
         //console.log("Estimated minutes to add to current time" + estimatedminutes)
         
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
   hour1pp: function () {
     //under what condition should i use and additional row?
     //if the latest minute is greater than the previous added to this row
     now=moment().format("HH") 
     count= Parts.find({hour: now}).count()
     
     if (count>2)
    {
     return "1"
   }
   },
   hour1ppp: function () {
     //under what condition should i use and additional row?
     //if the latest minute is greater than the previous added to this row
     now=moment().format("HH") 
     count= Parts.find({hour: now}).count()
     
     if (count>3)
    {
     return "1"
   }
   
   },
   hour1pppp: function () {
     //under what condition should i use and additional row?
     //if the latest minute is greater than the previous added to this row
     now=moment().format("HH") 
     count= Parts.find({hour: now}).count()
     
     if (count>4)
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
     Meteor.subscribe('machines');
      Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
 num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
       
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
 earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count===2)
      {
        //the start time is same.  The end time will be the most recent job

    var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour: now}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
  earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;

  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>2)
      {
        //the start time is same.  The end time will be the start of the second job

    var earnedHoursCalc =Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().quantity) ;
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
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
        else if (typeof Parts.findOne({hour: now})=== 'object'  && count >2)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
         var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) ;
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
      

            },
      earnedHours1pp: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
      
            
         if (typeof Parts.findOne({hour: now})=== 'object'  && count ===3)
      {

       // this will be the most recent to the end of the hour
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop()).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().quantity) ; ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
        else if (typeof Parts.findOne({hour: now})=== 'object' && count >=4)
      {
        //This should start at its time stamp (second to last) and end at the latest time stamp
        //double check if this is the second to last time stamp
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop()).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop()).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
         

      }
            },
      earnedHours1ppp: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
      
            
        
       if (typeof Parts.findOne({hour: now})=== 'object'  && count ===4)
      {
        //at this point I'll start at the time stamp and go to the end of the hour
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
      }
      else if (typeof Parts.findOne({hour: now})=== 'object'  && count ===5)
       {
       //in the instance it would start from the second to latest time stamp and end at the latest time stamp
       
     //I'm not sure if this is the second to latest time stamp
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: -1}, limit: 5}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
     //Number(Parts.find({hour: now}).fetch().pop().minute) This is the latest minute
      //Number (Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute) This is 2nd to latest entries minute
    

      }
            },
      earnedHours1pppp: function () {
      num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
      
            
        
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===5)
      //I will start from the latest time stamp and go to the end of the hour
    {
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 5}).fetch().pop()).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 5}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 5}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
     //Number(Parts.find({hour: now}).fetch().pop().minute) This is the latest minute
      //Number (Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute) This is 2nd to latest entries minute
    

      }
            },
     incomingCycles1: function () {
        //grab all cycles from today
      num= Machines.find().fetch().pop();
     num=num.machinenumber;
     hour= Parts.find().fetch().pop();
     hour=num.hour;  //this is the hour of the submitted job 
     now=moment().format("HH");
     count= Parts.find({hour: now}).count()
    //find how comparisons are made between time stamps
    //I need to figure out the time stamp that is in
// return Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count() * Parts.findOne().cavitation ;
// for some reasons the cycles find function only cares about the first argument that it sees.
 if (typeof Parts.findOne({hour: now}) === 'object' && count===1)
      {
    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count===2)
      {
        //the start time is same.  The end time will be the most recent job

    return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment().format("YYYY-MM-DD 07:00:00.000"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 1}).fetch().pop().cavitation;
  }
  else if (typeof Parts.findOne({hour: now}) === 'object' && count>2)
      {
        //the start time is same.  The end time will be the start of the second job

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
     

     
      },
      incomingCycles1pp: function () {
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
       
         
       if (typeof Parts.findOne({hour: now}) === 'object' && count===3)
      {
        //in this case I return the most recent to the end of the hour
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().cavitation;
         
        
       // Parts.find({hour: now}).fetch().pop().timestamp) this is the latest time stamp
       // Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().timestamp   this is the second to latest time stamp
      }
      else if (typeof Parts.findOne({hour: now}) === 'object' && count>=4)
      {
        //in this case the time stamp will start at its timestamp and end at the time stamp of the next job
        //the timestamp of the most recently submitted job will be 
        //
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().cavitation;
         
        
       // Parts.find({hour: now}).fetch().pop().timestamp) this is the latest time stamp
       // Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().timestamp   this is the second to latest time stamp
      }
      
    
      },
    incomingCycles1ppp: function () {
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
       
         
      
      if (typeof Parts.findOne({hour: now}) === 'object' && count===4)
      {
        //In this scenario I will start it the latest time stamp and go to the end of the hour
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().cavitation;
         
        
       // Parts.find({hour: now}).fetch().pop().timestamp) this is the latest time stamp
       // Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().timestamp   this is the second to latest time stamp
      }
       else if (typeof Parts.findOne({hour: now}) === 'object' && count>=5)
      {
       //I will start from the second to last time stamp and go to the latest time stamp
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 5}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().cavitation;
         
        
       // Parts.find({hour: now}).fetch().pop().timestamp) this is the latest time stamp
       // Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().timestamp   this is the second to latest time stamp
      }
      
    
      },
      incomingCycles1pppp: function () {
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
       
         
      
      if (typeof Parts.findOne({hour: now}) === 'object' && count===5)
      {
        //In this scenario I will start it the latest time stamp and go to the end of the hour
        return Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 5}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * Parts.find({hour:now}, {sort: {minute: 1}, limit: 5}).fetch().pop().cavitation;
         
        
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
       
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
        else if (typeof Parts.findOne({hour: now})=== 'object'  && count >=3)
      {

        //if there are three job submissions.  this should start from its time stamp and end and the most recent time stamp
        //at this point the second submission will be the second item in the collection or middle item
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop().quantity) ;
         
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
    changeStatus1pp: function() {
 //Have this function based on the 
num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
      
            
         if (typeof Parts.findOne({hour: now})=== 'object'  && count ===3)
      {

       // this will be the most recent to the end of the hour
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
        else if (typeof Parts.findOne({hour: now})=== 'object' && count >=4)
      {
        //This should start at its time stamp (second to last) and end at the latest time stamp
        //double check if this is the second to last time stamp
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
         

      }
       if (earnedHoursCalc >=1&&count>2)
      { 
         
    return "Green"
    
      }

      else if (earnedHoursCalc <1&& count>2)
  {
    return "Yellow"
   
 }
      // }
    },
    changeStatus1ppp: function() {
 //Have this function based on the 
num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
      
            
        
       if (typeof Parts.findOne({hour: now})=== 'object'  && count ===4)
      {
        //at this point I'll start at the time stamp and go to the end of the hour
        var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
      }
      else if (typeof Parts.findOne({hour: now})=== 'object'  && count ===5)
       {
       //in the instance it would start from the second to latest time stamp and end at the latest time stamp
       
     //I'm not sure if this is the second to latest time stamp
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment(Parts.find({hour: now}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().quantity) ;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
     //Number(Parts.find({hour: now}).fetch().pop().minute) This is the latest minute
      //Number (Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute) This is 2nd to latest entries minute
    

      }
       if (earnedHoursCalc >=1&&count>2)
      { 
         
    return "Green"
    
      }

      else if (earnedHoursCalc <1&& count>2)
  {
 
    return "Yellow"
   
 }
      // }
    },
    changeStatus1pppp: function() {
 //Have this function based on the 
num= Machines.find().fetch().pop();
     num=num.machinenumber
     
    //Work on the logic for 4 different submitted jobs 
    hour= Parts.find().fetch().pop();
     hour=num.hour  //this is the hour of the submitted job 
     now=moment().format("HH")
     count= Parts.find({hour: now}).count()
      
            
        
      if (typeof Parts.findOne({hour: now})=== 'object'  && count ===5)
      //I will start from the latest time stamp and go to the end of the hour
    {
     var earnedHoursCalc = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find({hour:now}, {sort: {minute: 1}, limit: 5}).fetch().pop().timestamp).format("YYYY-MM-DD 07:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD 08:00:00.000")}}).count() * (Parts.find({hour:now}, {sort: {minute: 1}, limit: 5}).fetch().pop().cavitation / Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop().quantity);
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        
     //Number(Parts.find({hour: now}).fetch().pop().minute) This is the latest minute
      //Number (Parts.find({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop().minute) This is 2nd to latest entries minute
    

      }
       
if (earnedHoursCalc >=1&&count>2)
      { 
         
    return "Green"
    
      }

      else if (earnedHoursCalc <1&& count>2)
  {
  
    return "Yellow"
   
      // }
    }
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
 now = moment().format("HH")
var part =Parts.findOne({hour: now})

console.log ("This is the part number" + part.partnumber)
 if(typeof Parts.findOne({hour: now}) === 'object')
 {
    return part.partnumber
 }

   },
   part1p: function ()
   {
      count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

now= moment().format('HH');
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")

if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count===2) // this is the last entered item
 {
   
    return part.partnumber
       
  }

else if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>2) // this is the last entered item
 {
  //retrieve second to last part
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.partnumber
        
  }
    },
   part1pp: function ()
   {
 count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

now= moment().format('HH');
 var part =Parts.find({hour: now}).fetch().pop();

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count===3) // this is the last entered item
 {
  //This will be the most recent part
   
    return part.partnumber
        
  }

else if (typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>3)
{
  //this will be the second to last part
     part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop()

      return part.partnumber
}
   },
part1ppp: function ()
   {
 count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

now= moment().format('HH');
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 

if (typeof Parts.find({hour: now}).fetch().pop() === 'object' && count===4)
{
    part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop()
     
      return part.partnumber
}

else if (typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>4)
{
  //I will return the second to latest item here
     part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop()
      return part.partnumber
}
   },
part1pppp: function ()
   {
 count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

now= moment().format('HH');
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 

if (typeof Parts.find({hour: now}).fetch().pop() === 'object' && count===5)
{
  //this will be the second to last part
     part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 5}).fetch().pop()
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
   
   quantity1p: function() {
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour
now= moment().format('HH');
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count===2) // this is the last entered item
 {
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.quantity
        
  }

else if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>2) // this is the last entered item
 {
  //retrieve second to last part
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 2}).fetch().pop()
    return part.quantity
        
  }

 
 
    },

   quantity1pp: function() {
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

now= moment().format('HH');
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if(typeof Parts.find({hour: now}).fetch().pop() === 'object' && count===3) // this is the last entered item
 {
  //This will be the second to latest 
   part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop()     
   return part.quantity
       }

else if (typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>3)
{
  //this will be the most recent returned

    part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 3}).fetch().pop()
      return part.quantity
}
  
   },
  quantity1ppp: function() {
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

now= moment().format('HH');
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if (typeof Parts.find({hour: now}).fetch().pop() === 'object' && count===4)
{
  part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop()
     return part.quantity
}
else if (typeof Parts.find({hour: now}).fetch().pop() === 'object' && count>4)
{
  //Here I will the second to last item
     part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 4}).fetch().pop()
     return part.quantity
}
   },
  quantity1pppp: function() {
  count= Parts.find({hour: now}).count()
//basically I need logic that determines which part number to present.
//This will be easier since I won't be looking at cycles only the position of the part number
//in the parts database each hour

now= moment().format('HH');
 var part =Parts.find({hour: now}).fetch().pop()

// Parts.find({hour: now}).fetch().pop().timestamp.toString()).format("mm")
 
if (typeof Parts.find({hour: now}).fetch().pop() === 'object' && count===5)
{
  part = Parts.find({hour:now}, {sort: {minute: 1}, limit: 5}).fetch().pop()
     return part.quantity
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