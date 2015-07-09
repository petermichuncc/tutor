Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
Meteor.subscribe('workcenters');
 Meteor.subscribe('parts');
 Template.jobstatus.helpers({

statusgreen: function(){
   
   num= Workcenters.find({CellID: Machines.find().fetch().pop().machinenumber}).fetch().pop().CellNum;
     count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: moment().subtract(75,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment().subtract(100,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
  
            cycletimeH=Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber.cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber.cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber.cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
            }

            if ((cycletimeH<=0 || cyletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
            }
            if ((cycletimeH<=0 || cyletimeH=="") && (cycletimeP<=0 || cyletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
            }
            else
            {
              cycletime = 0
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
   num= Workcenters.find({CellID: Machines.find().fetch().pop().machinenumber}).fetch().pop().CellNum;
     count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: moment().subtract(75,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment().subtract(100,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
      
   cycletimeH=Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber.cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber.cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber.cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
            }

            if ((cycletimeH<=0 || cyletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
            }
            if ((cycletimeH<=0 || cyletimeH=="") && (cycletimeP<=0 || cyletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
            }
            else
            {
              cycletime = 0
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
    num= Workcenters.find({CellID: Machines.find().fetch().pop().machinenumber}).fetch().pop().CellNum;
     count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: moment().subtract(75,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment().subtract(100,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().CycleTimeStamp
      
   cycletimeH=Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber.cycletimeH
            cycletimeP=Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber.cycletimeP
            cycletimeQ=Parts.find({hour:now, month:month, day:day},{sort: {minute: 1}, limit: 1}).fetch().pop().partnumber.cycletimeQ
            if (cycletimeH>0)
            {
              cycletime=cycletimeH
            }

            if ((cycletimeH<=0 || cyletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
            }
            if ((cycletimeH<=0 || cyletimeH=="") && (cycletimeP<=0 || cyletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
            }
            else
            {
              cycletime = 0
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










