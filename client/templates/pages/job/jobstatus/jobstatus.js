Template.jobstatus.helpers({
//I need the logic here for the if else statement that
//decides essentially when to put the work center into green(good)
//or to put it into yellow
//so basically if I don't get cycles within x minutes put the machine into yellow
//if the machine hasn't gotten any cyles at all leave it in transparent.

//I might be able to use some of the logic for the progress bar to determine the 
//logic for the status changing
statusgreen: function(){
 
     // estimatedTime = (Parts.findOne().quantity / Parts.findOne().cavitation) *"23";
     //convert estimatedTime to minutes
     estimatedTime = (Parts.findOne().quantity / Parts.findOne().cavitation) *"23";
     estimatedTime = estimatedTime/60;
     console.log ("This is the estimated time in progress function " + estimatedTime);
         // displayHours = moment().seconds(estimatedTime).format("YYYY-MM-DD HH:mm:ss.SSS");
         // displayHours = moment(Parts.findOne().timestamp.toString()).format("H");
displayHours = moment(Parts.findOne().timestamp.toString()).seconds(estimatedTime).format("H");
displayHours = displayHours*60;
displayHours = displayHours + Number(moment(Parts.findOne().timestamp.toString()).format("m"));
          
          displayHours = displayHours +estimatedTime;
          console.log("This is the display hours time in progress function "+ displayHours);
       now = moment().format("h");
        now = now*60;
       now = now + Number((moment().format("m")));
       past = moment(Parts.findOne().timestamp.toString()).format("h");
        past = past*60;
        past = past +Number(moment(Parts.findOne().timestamp.toString()).format("m"))
        numerator = now - past;
       denominator = displayHours - past;
       
       percent = new ReactiveVar();
       percent.set((numerator/denominator)*100);
       percent.get();
       console.log("this is percent" + percent)
       console.log("this is percent get" + percent.get())

        // percent = numerator/denominator;
        //  percent = percent *100;
       
      // percent = moment(Parts.findOne().timestamp.toString()).format("h")/moment(displayHours).format("h");
      //     percent = percent *100;

     //     percent=Math.round(percent)
    
console.log("This is the percent in the job status file" + percent)
    
    if (percent.get()>0)
    {
    return true
}

  },
  status: function(){

   if (percent.get()<0)
    {
    return true;
}

     




}})










