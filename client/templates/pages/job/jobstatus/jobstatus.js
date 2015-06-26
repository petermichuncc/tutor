 Template.jobstatus.helpers({
 status: function(){
     // setInterval(function(){     
 return true

 },
statusgreen: function(){
  
     num= Machines.find().fetch().pop();
     num=num.machinenumber
 count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: moment().subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
        console.log("This is the most recent" + start)
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment().subtract(90,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
       console.log("This is the second most recent " + prev)
   
   //This finds the time stamp of the cycle happening at the job submission     
// start =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).CycleTimeStamp
    //This finds the time stamp of the cycle happening right after the time stamp     
//  next =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).CycleTimeStamp
        


startseconds=moment(start).format("ss.SSS")
startminutes=moment(start).format("mm")
startseconds=Number(startseconds)+ Number(startminutes)*60
prevseconds=moment(prev).format("ss.SSS")
prevminutes=moment(prev).format("mm")
prevseconds=Number(prevseconds) + Number(prevminutes)*60
cycletime= startseconds-prevseconds
console.log("This is the cycletime" + cycletime)
stdcycletime= Number(10)
// // setInterval(function(){ 
//     //code goes here that will be run every 5 seconds.
    
//     //code goes here that will be run every 5 seconds.    

 if (cycletime>=stdcycletime)
     {
     return true
   }

// // }, 1000);
   
 },


 statusyellow: function(){
     // setInterval(function(){     
 if (cycletime<stdcycletime && cycletime >0)
     {
     return true
   }
   // }, 1000);
 },
   statuswhite: function(){
     // setInterval(function(){ 
      if (cycletime<=0)
     {
     return true
   }
//   // }, 1000);


 }})










