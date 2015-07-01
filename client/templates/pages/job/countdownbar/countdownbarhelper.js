

 
// Template.countdownbar.helpers({

//  percent: function(){
//     Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
//    Meteor.subscribe('parts');
// Meteor.subscribe('machines');
    
// num= Machines.findOne();
//      num=num.machinenumber;
//  count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         
//          estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
//          //figure out cycle time
         
//         start =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).CycleTimeStamp
        
//         next =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).CycleTimeStamp
       
//         startseconds=moment(start).format("ss.SSS")
//         startminutes=moment(start).format("mm")
//         startseconds=Number(startseconds)+ Number(startminutes)*60
//         nextseconds=moment(next).format("ss.SSS")
//         nextminutes=moment(next).format("mm")
//         nextseconds=Number(nextseconds) + Number(nextminutes)*60
//         cycletime= nextseconds-startseconds

         
//          estimatedTime=estimatedTime * cycletime
//          estimatedminutes=parseInt(estimatedTime/60);
         
//           totaltime= Number(Parts.find().fetch().pop().quantity)/Number(Parts.find().fetch().pop().cavitation)
//           totaltime = totaltime*cycletime

//          totaltime= parseInt(totaltime/60);
//          if (totaltime <=0)
//          {
//           totaltime=1;

//          }
// if (estimatedminutes <=0)
// {

//   estimatedminutes=0;
// }         
        
//          percent=estimatedminutes/totaltime;
//           percent=percent*100;
//           percent=parseInt(percent)
         
//           if (percent<=0)
//           {

//            percent=0;
//           }

          
         
//           return percent;
         
        

    
      
// }
  
//   })



