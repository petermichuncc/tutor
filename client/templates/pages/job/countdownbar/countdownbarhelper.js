

 
Template.countdownbar.helpers({

 percent: function(){
    Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000"))
    Meteor.subscribe('hours')
         
         //var now = Parts.findOne(); this is the first entered parts document
         var now = Parts.find().fetch().pop();//This is the last entered parts document
         
         now=now.hour
          // only recalculate if there is a new job
          // That is what this if statement is doing essentially
          // I need 
 num= Machines.find().fetch().pop();
     num=num.machinenumber
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
         console.log("This is the count" + count)
         console.log("This is the quantity" + Number(Parts.find().fetch().pop().quantity))
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
         
           //The way this logic is setup I may need to just have a completion time setup
           //I could also list the number of cycles to go
           //Then list the minutes left??
         
         
         percent=estimatedminutes/totaltime;
          percent=percent*100;
          percent=parseInt(percent)
          console.log("This is the percent" + percent)
          if (percent<=0)
          {

           percent=0;
          }


         
          return percent;
         
        

    
      
}
  
  })



