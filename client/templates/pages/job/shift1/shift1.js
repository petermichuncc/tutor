
 Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');

 Meteor.subscribe('hours');

Template.shift1.helpers({
   calculateTime: function () {
        
 num= Machines.find().fetch().pop().cellnum;
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
   
  
   
 endjob: function ()
 {
  //basically show the end job button if there was a submit job button pressed more recently
  //than an end job button
  if (typeof Hours.find().fetch().pop()=== 'object')
  {
  if (Hours.find().fetch().pop().timestamp<Parts.find().fetch().pop().timestamp)
{
  return true
}
}
if (typeof Hours.find().fetch().pop()==='undefined')
{
  return true

}
 } ,
 submitjob: function ()
 {
  //show the submit job button if there was an end job button clicked more recently than
  //a submit job button , or show it by default.
  if (typeof Hours.find().fetch().pop()=== 'object')
  {
if (Hours.find().fetch().pop().timestamp>Parts.find().fetch().pop().timestamp)
{
  return true
}
}
}
  

});
