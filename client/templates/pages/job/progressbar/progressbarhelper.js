Template.progressbar.helpers({

 percent: function(){
      //I may edit the code to use seconds instead of minutes for obtaining the percent.
      //This will make the program more fine tuned
      //
now = Number(mo.now.get().format("H"));
console.log("This is the now hours" +Number(mo.now.get().format("H")) )

         now = now*60;
       now = now + Number((mo.now.get().format("m")));
       console.log("This is the minutes now" + now);
estimatedTime = Number((Parts.findOne().quantity / Parts.findOne().cavitation) *"23");
      estimatedTimeMinutes = estimatedTime/60;//This is the additional estimated time in minutes
      console.log("This is the estimated time minutes" + estimatedTimeMinutes);
      estimatedTimeSeconds= estimatedTime%60;//This is the additional estimated time in seconds
       //displayHours needs to be still, so it has time stamp from the collection
  //displayHours has the estimatedTime added to it      
 displayHours = Number(moment(Parts.findOne().timestamp.toString()).format("H"));
 
 console.log("This is the displayHours hour amount" + displayHours)
  displayHours = displayHours*60; //This converts the hours to minutes
  console.log("This is the displayHours minute amount" + displayHours)
//This code will add minutes from the time stamp to the calculated minutes from the hours component
 displayHours = displayHours + Number(moment(Parts.findOne().timestamp.toString()).format("m"))
//This code will add the estimated time to complete to the minutes
console.log("This is the display hours before estimated time added" + displayHours);
 displayHours = displayHours + estimatedTimeMinutes //This adds minutes from estimated time
 console.log("This is the display hours after estimated time added" + displayHours);
           //Remove the minutes in the time stamp from both the numerator and denominator for the percent

  past= Number(moment(Parts.findOne().timestamp.toString()).format("H"));
  
  past = past*60;
  past = past + Number(moment(Parts.findOne().timestamp.toString()).format("m"))
  
  numerator=now-past;
  denominator=displayHours-past;
  console.log("Numerator " + numerator + " denominator " + denominator)
 percent = numerator/denominator
 percent = percent*100;
 percent = parseInt(percent);
 if (percent >=100)
 {
  percent = 100
 }
  
       
       
       
       

        // percent = numerator/denominator;
        //  percent = percent *100;
       
      // percent = moment(Parts.findOne().timestamp.toString()).format("h")/moment(displayHours).format("h");
      //     percent = percent *100;

     //     percent=Math.round(percent)
  
        return percent;
      }
  })


