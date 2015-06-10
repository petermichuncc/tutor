

 Meteor.subscribe('cycles-recent', moment().subtract(3, 'days').format("YYYY-MM-DD HH:MM:ss.SSS"))
Template.countdownbar.helpers({

 percent: function(){
     
      //This percent bar is connected with the earned hours function.
      //Basically the estimated time to completion counts down to zero
      //The 
      
      count = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: mo.now.get(Parts.findOne().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD H:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.findOne().quantity) - Number(count))  / Number(Parts.findOne().cavitation);

// console.log ("this is the amount of cycles since time stamp" + Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: mo.now.get(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS")}}).count())

secondsLeft = estimatedTime * 10;   //This ten is a place holder for the time/cycle
//I will need to calculate the time/cycle at some point and have it updated constantly

//total seconds is equal to  planned/cavitation
totalseconds= Number(Parts.findOne().quantity) / Number(Parts.findOne().cavitation);
totalseconds = totalseconds*10
console.log("This is the total seconds the job will take" + totalseconds)
console.log("This is the seconds left the job will take" + secondsLeft)
if (secondsLeft<=0)

{

  secondsLeft=0;
}

percent=secondsLeft/totalseconds;
percent=percent*100;

  
        return percent;
      }

  
  })



