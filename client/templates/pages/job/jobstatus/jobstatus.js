// Template.jobstatus.helpers({
// status: function(){
//     // setInterval(function(){     
// return true

// },
// statusgreen: function(){
  
//     num= Machines.find().fetch().pop();
//      num=num.machinenumber

//     //code goes here that will be run every 5 seconds.    
// recent =Cycles.findOne({PressNumber: num},{sort: {CycleTimeStamp: -1}}, {limit:1}).CycleTimeStamp
// // past = Cycles.find({PressNumber: num},{sort: {CycleTimeStamp: -1}, limit: 2}).fetch().pop().CycleTimeStamp

// // recent =Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}},{sort: {CycleTimeStamp: -1}, limit: 1}).fetch().pop().CycleTimeStamp
// //  past = Cycles.find({PressNumber: num, CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}},{sort: {CycleTimeStamp: -1}, limit: 2}).fetch().pop().CycleTimeStamp
// console.log("this is the past" + " This is the recent" + recent)

 

// recentseconds=moment(recent).format("ss.SSS")
// pastseconds=moment(past).format("ss.SSS")
// cycletime= recentseconds-pastseconds
// console.log ("This is the cycletime "+ cycletime)
// stdcycletime= Number(10)
// // setInterval(function(){ 
//     //code goes here that will be run every 5 seconds.
    
//     //code goes here that will be run every 5 seconds.    

// if (cycletime>=stdcycletime)
//     {
//     return true
//   }

// // }, 1000);
   
// },


//  statusyellow: function(){
//     // setInterval(function(){     
// if (cycletime<stdcycletime && cycletime >0)
//     {
//     return true
//   }
//   // }, 1000);
// },
//   statuswhite: function(){
//     // setInterval(function(){ 
//      if (cycletime<=0)
//     {
//     return true
//   }
//   // }, 1000);


// }})










