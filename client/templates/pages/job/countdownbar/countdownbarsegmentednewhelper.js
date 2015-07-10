Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');





Template.countdownbar.helpers({

 percent: function(){
    
        //change percent to be how many hours out of 24 hours
          num= Machines.find().fetch().pop().cellnum;
count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         //figure out cycle time
         // if ()
         start =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).CycleTimeStamp
         next =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).CycleTimeStamp
        startseconds=moment(start).format("ss.SSS")
        startminutes=moment(start).format("mm")
        startseconds=Number(startseconds)+ Number(startminutes)*60
        nextseconds=moment(next).format("ss.SSS")
        nextminutes=moment(next).format("mm")
        nextseconds=Number(nextseconds) + Number(nextminutes)*60
        cycletime= nextseconds-startseconds
         
         estimatedminutes=parseInt(estimatedTime/60);
         estimatedTime=estimatedTime * cycletime
         if (estimatedminutes <=0)
        {
          estimatedminutes=0;
        } 
         totaltime= Number(Parts.find().fetch().pop().quantity)/Number(Parts.find().fetch().pop().cavitation)
          totaltime = totaltime*cycletime
         totaltime= parseInt(totaltime/60);//this is minutes, I need to convert it to seconds
         totaltimehours = parseInt(totaltime/60);//this will be the total hours
         estimatedhours = estimatedminutes/60;
        estimatedhours = parseInt(estimatedhours);

         if (estimatedhours <=0)
         {
          estimatedhours=0;
         }
         estimatedhours
          percent=(estimatedhours/24) * 100
         
         if (percent<=0)
          {

           percent=0;
          }
          return percent;
   },
hour: function(){
    num= Machines.find().fetch().pop().cellnum;
count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         //figure out cycle time
         // if ()
         start =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).CycleTimeStamp
         next =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: moment(start.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).CycleTimeStamp
        startseconds=moment(start).format("ss.SSS")
        startminutes=moment(start).format("mm")
        startseconds=Number(startseconds)+ Number(startminutes)*60
        nextseconds=moment(next).format("ss.SSS")
        nextminutes=moment(next).format("mm")
        nextseconds=Number(nextseconds) + Number(nextminutes)*60
        cycletime= nextseconds-startseconds
         
         estimatedminutes=parseInt(estimatedTime/60);
         estimatedTime=estimatedTime * cycletime
         if (estimatedminutes <=0)
        {
          estimatedminutes=0;
        } 
         totaltime= Number(Parts.find().fetch().pop().quantity)/Number(Parts.find().fetch().pop().cavitation)
          totaltime = totaltime*cycletime
         totaltime= parseInt(totaltime/60);//this is minutes, I need to convert it to seconds
         totaltimehours = parseInt(totaltime/60);//this will be the total hours
         estimatedhours = estimatedminutes/60;
        estimatedhours = parseInt(estimatedhours);

         if (estimatedhours <=0)
         {
          estimatedhours=0;
         }
         estimatedhours
        //change percent to be how many hours out of 24 hours
        return estimatedhours;
   }


  })



