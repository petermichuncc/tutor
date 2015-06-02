Template.progressbar.helpers({

percent: function(){
 
     // estimatedTime = (Parts.findOne().quantity / Parts.findOne().cavitation) *"23";
     //convert estimatedTime to minutes
     estimatedTime = (Parts.findOne().quantity / Parts.findOne().cavitation) *"23";
     estimatedTime = estimatedTime/60;
    
         // displayHours = moment().seconds(estimatedTime).format("YYYY-MM-DD HH:mm:ss.SSS");
         // displayHours = moment(Parts.findOne().timestamp.toString()).format("H");
displayHours = moment(Parts.findOne().timestamp.toString()).minutes(estimatedTime).format("H");
displayHours = displayHours*60;
displayHours = displayHours + Number(moment(Parts.findOne().timestamp.toString()).minutes(estimatedTime).format("m"));
          
          
          
       now = moment().format("h");
        now = now*60;
       now = now + Number((moment().format("m")));
       past = moment(Parts.findOne().timestamp.toString()).format("H");
        past = past*60;
        past = past +Number(moment(Parts.findOne().timestamp.toString()).format("m"))
        numerator = now - past;
       denominator = displayHours - past;
       percent = parseInt((numerator/denominator)*100);
       // percent = new ReactiveVar();
       // percent.set(percent);
       
       
       

        // percent = numerator/denominator;
        //  percent = percent *100;
       
      // percent = moment(Parts.findOne().timestamp.toString()).format("h")/moment(displayHours).format("h");
      //     percent = percent *100;

     //     percent=Math.round(percent)
     console.log ("This is the now" + now)
     console.log ("This is the past" + past)
     console.log ("This is the numerator" + numerator)
     console.log ("This is the denominator" + denominator)
console.log("This is the percent in the progress helper" + percent)
        return percent;
  }




 
})

