Template.countdownbar.helpers({

 percent: function(){
      
      //This percent bar is connected with the earned hours function.
      //Basically the estimated time to completion counts down to zero
      //The 
      count = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment(Parts.findOne().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD H:mm:ss.SSS")}}).count()
         estimatedTime = (Number(Parts.findOne().quantity) - Number(count))  / Number(Parts.findOne().cavitation);

//I need to find a way to convert the estimated time to seconds.
//I will multiply estimatedTime by the time/cycle to get the seconds for how 
//long the project will take until it is finished.


secondsLeft= estimatedTime * 10;   //This ten is a place holder for the time/cycle
//I will need to calculate the time/cycle at some point and have it updated constantly


 if (secondsLeft===0)
          {
              secondsLeft=0;

          }

percent=secondsLeft;







         
// now = Number(mo.now.get().format("H"));


//          now = now*60;
//        now = now + Number((mo.now.get().format("m")));
       
// estimatedTime = Number((Parts.findOne().quantity / Parts.findOne().cavitation) *"23");
//       estimatedTimeMinutes = estimatedTime/60;//This is the additional estimated time in minutes
      
//       estimatedTimeSeconds= estimatedTime%60;//This is the additional estimated time in seconds
//        //displayHours needs to be still, so it has time stamp from the collection
//   //displayHours has the estimatedTime added to it      
//  displayHours = Number(moment(Parts.findOne().timestamp.toString()).format("H"));
 
 
//   displayHours = displayHours*60; //This converts the hours to minutes
  
// //This code will add minutes from the time stamp to the calculated minutes from the hours component
//  displayHours = displayHours + Number(moment(Parts.findOne().timestamp.toString()).format("m"))
// //This code will add the estimated time to complete to the minutes

//  displayHours = displayHours + estimatedTimeMinutes //This adds minutes from estimated time
 
//            //Remove the minutes in the time stamp from both the numerator and denominator for the percent

//   past= Number(moment(Parts.findOne().timestamp.toString()).format("H"));
  
//   past = past*60;
//   past = past + Number(moment(Parts.findOne().timestamp.toString()).format("m"))
  
//   numerator=now-past;
//   denominator=displayHours-past;
 
//  percent = numerator/denominator
//  percent = percent*100;
//  percent = parseInt(percent);
 
  
       
       
       
       

        // percent = numerator/denominator;
        //  percent = percent *100;
       
      // percent = moment(Parts.findOne().timestamp.toString()).format("h")/moment(displayHours).format("h");
      //     percent = percent *100;

     //     percent=Math.round(percent)
  
        return percent;
      }
  })



