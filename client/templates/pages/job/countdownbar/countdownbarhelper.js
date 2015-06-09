


Template.countdownbar.helpers({

 percent: function(){
      
      //This percent bar is connected with the earned hours function.
      //Basically the estimated time to completion counts down to zero
      //The 
      Meteor.subscribe('cycles-recent', moment().subtract(1, 'days').format("YYYY-MM-DD HH:MM:ss.SSS"))
      count = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment(Parts.findOne().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD H:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.findOne().quantity) - Number(count))  / Number(Parts.findOne().cavitation);

console.log ("this is the amount of cycles since time stamp" + Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: mo.now.get(Parts.findOne().timestamp.toString()).format("YYYY-MM-DD H:mm:ss.SSS")}}).count())

secondsLeft= estimatedTime * 10;   //This ten is a place holder for the time/cycle
//I will need to calculate the time/cycle at some point and have it updated constantly
max = Number(Parts.findOne().quantity) //This is the maximum number of parts to be created.  The goal essentially
max = max * 10 //This will standardize the maximum to be on a similar ratio to the secondsLeft
 

percent=secondsLeft/max;

percent = percent *100


  
        return percent;
      },

  max: function(){
      
      //max will be the parts planned

      max = Number(Parts.findOne().quantity)




  
        return max;
      }
  })



