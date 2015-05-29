
// Console.log ("This is outside the is100 function");
Template.progresscontroller.helpers({

'is100': function(){
  Tracker.autorun(function() {
     estimatedTime = (Parts.findOne().quantity / Parts.findOne().cavitation) *"23";
         displayHours = moment().seconds(estimatedTime).format("YYYY-MM-DD HH:mm:ss.SSS");
         //After calculating the updated time I need to find the amount of hours relative to 
         //the time of day
         //If the 
         displayHours = moment(displayHours).format("H");
         displayHours = displayHours *60;
         displayHours = displayHours + Number(moment(displayHours).format("m"));

       now = moment().format("h");
        now = now*60;
       now = now + Number((moment().format("m")));
       past = moment(Parts.findOne().timestamp.toString()).format("h");
       past = past*60;
       past = past +Number(moment(Parts.findOne().timestamp.toString()).format("m"))
       numerator = now - past;
       denominator = displayHours - past;
       
        percent = numerator/denominator;
        percent = percent *100;
       
      
      // percent = moment(Parts.findOne().timestamp.toString()).format("h")/moment(displayHours).format("h");
      //     percent = percent *100;

     //     percent=Math.round(percent)
 console.log ("This is the percent is " + numerator);
});
//The if statement works and outputs only when the percent is 100 percent
    if (percent>90)
    {
    return true;
}
  },
  'is90': function(){
   if (percent>80)
    {
    return true;
}
  },
'is80': function(){
    if (percent>70)
    {
    return true;
}
  },
  'is70': function(){
    if (percent>60)
    {
    return true;
}
  },
  'is60': function(){
    if (percent>50)
    {
    return true;
}
  },
  'is50': function(){
    if (percent>40)
    {
    return true;
}
  },
  'is40': function(){
    if (percent>30)
    {
    return true;
}
  },
  'is30': function(){
    if (percent>20)
    {
    return true;
}
  },
  'is20': function(){
    if (percent>10)
    {
    return true;
}
  },
  'is10': function(){
    if (percent>0)
    {
    return true;
}
  },
  'is0': function(){
    if (percent===0)
    {
    return true;
}
  }

 
})








