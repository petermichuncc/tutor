
// Console.log ("This is outside the is100 function");
Template.progresscontroller.helpers({

'is100': function(){
     estimatedTime = (Parts.findOne().quantity / Parts.findOne().cavitation) *"23";
         displayHours = moment().seconds(estimatedTime).format("YYYY-MM-DD hh:mm:ss.SSS");
         displayHours = moment(displayHours).format("h");
         displayHours = displayHours *60;
         displayHours = displayHours + moment(displayHours).format("m");

       now = moment().format("h");
       now = now*60;
       now = now + moment().format("m");

       var percent = displayHours/displayHours;
       percent=percent*100;
     // percent = moment(Parts.findOne().timestamp.toString()).format("h")/moment(displayHours).format("h");
     //     percent = percent *100;

     //     percent=Math.round(percent)
 console.log ("This is the percent used in the is100");
//The if statement works and outputs only when the percent is 100 percent
    if (percent<=100)
    {
    return true;
}
  },

  'is75': function(){
    if (5<5)
    {
    return true;
}
  },
  'is50': function(){
    if (5<5)
    {
    return true;
}
  },
  'is25': function(){
    if (5<5)
    {
    return true;
}
  },
  'is0': function(){
    if (5<5)
    {
    return true;
}
  }

  // is100: true


//  is75: true
// is50: true
//  is25: true



})








