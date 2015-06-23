

 
Template.countdownbar.helpers({

 percent: function(){
    Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
   
         
         
         var now = Parts.find().fetch().pop();//This is the last entered parts document
         now=now.hour
        
 num= Machines.find().fetch().pop();
     num=num.machinenumber
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
         estimatedTime=estimatedTime * 10; //This 10 is a place holder for the time per cycle
         estimatedminutes=parseInt(estimatedTime/60);
         
          totaltime= Number(Parts.find().fetch().pop().quantity)/Number(Parts.find().fetch().pop().cavitation)
          totaltime = totaltime*10;
         totaltime= parseInt(totaltime/60);
if (estimatedminutes <=0)
{

  estimatedminutes=0;
}         
        
         percent=estimatedminutes/totaltime;
          percent=percent*100;
          percent=parseInt(percent)
          
          if (percent<=0)
          {

           percent=0;
          }


         
          return percent;
         
        

    
      
}
  
  })



