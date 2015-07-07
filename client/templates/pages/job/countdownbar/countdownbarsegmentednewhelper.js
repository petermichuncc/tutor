Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');
function pressnumber(){
//basically I need to have num equal the CellNum of the Workcenter that was selected

num= Workcenters.find({CellID: Machines.find().fetch().pop().machinenumber}).fetch().pop().CellNum;
return num

}


function calcTime()
{
  num= pressnumber()
count = Cycles.find({PressNumber: num, AutoStatus: "1", CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         //figure out cycle time
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
         if (estimatedminutes <=0)
        {
          estimatedminutes=0;
        } 
         estimatedminutes=parseInt(estimatedTime/60);
         totaltime= Number(Parts.find().fetch().pop().quantity)/Number(Parts.find().fetch().pop().cavitation)
          totaltime = totaltime*cycletime
         totaltime= parseInt(totaltime/60);//this is minutes, I need to convert it to seconds
         totaltimehours = parseInt(totaltime/60);//this will be the total hours
         estimatedhours = estimatedminutes/60;
        estimatedhours = parseInt(estimatedhours);

         if (totaltime <=0)
         {
          totaltime=1;
         }
         return estimatedhours
         
}

Template.countdownbar.helpers({

 percent: function(){
    
        //change percent to be how many hours out of 24 hours
          
          percent=(calcTime()/24) * 100
         
         if (percent<=0)
          {

           percent=0;
          }
          return percent;
   },
hour: function(){
    
        //change percent to be how many hours out of 24 hours
        return calcTime();
   }


  })



