Template.jobstatus.helpers({
//I need the logic here for the if else statement that
//decides essentially when to put the work center into green(good)
//or to put it into yellow
//so basically if I don't get cycles within x minutes put the machine into yellow
//if the machine hasn't gotten any cyles at all leave it in transparent.

//I might be able to use some of the logic for the progress bar to determine the 
//logic for the status changing
status: function(){
count=0
  
    return true;
  },




statusgreen: function(){
 
 count = Cycles.find({PressNumber: '1',CycleTimeStamp: {$gte: moment(Parts.findOne().timestamp.toString()).subtract(60,'seconds').format("YYYY-MM-DD H:mm:ss.SSS")}}).count()
 
//      now = Number(mo.now.get().format("H"));
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
 


 // if (percent >=100)
 // {
 //  percent = 100
 // }

   if (count>0)
    {
    return true
}

  },
  
// },

 statusyellow: function(){

    if (count<=0)
      {
     return true;
  }},
  statuswhite: function(){

    if (count===0)
      {
     return true;
  }


}})










