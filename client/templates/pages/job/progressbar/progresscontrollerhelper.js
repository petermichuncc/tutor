
// Console.log ("This is outside the is100 function");
Template.progresscontroller.helpers({

'is100': function(){
 
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
       
        percent = numerator/denominator;
         percent = percent *100;
       
      // percent = moment(Parts.findOne().timestamp.toString()).format("h")/moment(displayHours).format("h");
      //     percent = percent *100;

     //     percent=Math.round(percent)
     console.log ("This is the now" + now)
     console.log ("This is the past" + past)
     console.log ("This is the numerator" + numerator)
     console.log ("This is the denominator" + denominator)
console.log("This is the percent" + percent)
    
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








