Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
Meteor.subscribe('machines');
 Meteor.subscribe('parts');
 Template.jobstatus.helpers({

statusgreen: function(){
   
   num= Machines.find().fetch().pop().cellnum;
     count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: moment().subtract(75,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment().subtract(100,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
        
        //I should always compare with the most recently submitted job
        
            cycletimeH=Parts.find().fetch().pop().cycletimeH
            cycletimeP=Parts.find().fetch().pop().cycletimeP
            cycletimeQ=Parts.find().fetch().pop().cycletimeQ
           
            if (cycletimeH>0 )
            {
              cycletime=cycletimeH
              console.log("H selected")
            }

            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              console.log("P selected")
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              console.log("Q selected")
            }
           


startseconds=moment(start).format("ss.SSS")
startminutes=moment(start).format("mm")
startseconds=Number(startseconds)+ Number(startminutes)*60
prevseconds=moment(prev).format("ss.SSS")
prevminutes=moment(prev).format("mm")
prevseconds=Number(prevseconds) + Number(prevminutes)*60
cycletimeNow= startseconds-prevseconds
// console.log("This is the cycletime" + cycletime)
 
 if (cycletimeNow>=cycletime)
     {
     return true
   }
   else
   {
    return false
   }

// // }, 1000);
   
 },


 statusyellow: function(){
   num= Machines.find().fetch().pop().cellnum;
     count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: moment().subtract(75,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment().subtract(100,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
        cycletimeH=Parts.find().fetch().pop().cycletimeH
            cycletimeP=Parts.find().fetch().pop().cycletimeP
            cycletimeQ=Parts.find().fetch().pop().cycletimeQ
             if (cycletimeH>0)
            {
              cycletime=cycletimeH
              console.log("H selected")
            }


            if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
            }
            if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
            }
            

startseconds=moment(start).format("ss.SSS")
startminutes=moment(start).format("mm")
startseconds=Number(startseconds)+ Number(startminutes)*60
prevseconds=moment(prev).format("ss.SSS")
prevminutes=moment(prev).format("mm")
prevseconds=Number(prevseconds) + Number(prevminutes)*60
cycletimeNow= startseconds-prevseconds
// console.log("This is the cycletime" + cycletime)
stdcycletime= Number(10.5)
 if (cycletimeNow<cycletime )
     {
     return true
   }
   else
   {
    return false
   }
   // }, 1000);
 },
   statuswhite: function(){
     // setInterval(function(){ 
    num= Machines.find().fetch().pop().cellnum;
     count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: moment().subtract(75,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment().subtract(100,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
        cycletimeH=Parts.find().fetch().pop().cycletimeH
            cycletimeP=Parts.find().fetch().pop().cycletimeP
            cycletimeQ=Parts.find().fetch().pop().cycletimeQ
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
            

startseconds=moment(start).format("ss.SSS")
startminutes=moment(start).format("mm")
startseconds=Number(startseconds)+ Number(startminutes)*60
prevseconds=moment(prev).format("ss.SSS")
prevminutes=moment(prev).format("mm")
prevseconds=Number(prevseconds) + Number(prevminutes)*60
cycletimeNow= startseconds-prevseconds
// console.log("This is the cycletime" + cycletime)


      if (!(cycletimeNow>=cycletime) && !(cycletimeNow<cycletime))
     {
     return true
   }
   else
   {
    return false
   }
//   // }, 1000);


 }})










