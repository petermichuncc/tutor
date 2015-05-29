// Helper for the parts template that feeds it data
Meteor.subscribe('parts');
Meteor.subscribe('PressCycles');
   start_time = moment().format("YYYY-MM-DD hh:mm:ss.SSS");
  // start_time = Parts.find().timestamp;
  console.log("This is the current time "+ start_time);
 //var start_time = Parts.findOne().timeStamp;
// console.log("This is the time stamp " +moment().Parts.find().timeStamp.format("YYYY-MM-DD hh:mm:ss.SSS"));

console.log(start_time);
// console.log("This is your cavitation" +Parts.findOne().cavitation);

Template.job.helpers({
  calculateTime: function () {
         //calculate the amount of time needed for the job
         estimatedTime = (Parts.findOne().quantity / Parts.findOne().cavitation) *"23";
         displayHours = moment(Parts.findOne().timestamp.toString()).seconds(estimatedTime).format("hh:mm:ss.SSS");
         
         
         console.log ("This is the estimated time " + estimatedTime);
         console.log ("This is the time stamp time" + Parts.findOne().timestamp.toString());
         console.log("This is the display hours time "+ displayHours);
         
         return displayHours;

     },
  parts: function() {
    return Parts.find();
   },
   columns: function() {
     // the context is a part
     var result = _.values(this.data);
     result.unshift(this.text);
     return result;
   },
   earnedHours: function () {
    
        var earnedHoursCalc = ((Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count()) * Parts.findOne().cavitation) / Parts.findOne().quantity;
         console.log("This is the cycles  "+ (Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count()));
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         console.log("This is the earned hours "+ earnedHoursCalc);
        return earnedHoursCalc;
            },
     incomingCycles: function () {
        //grab all cycles from today
    if (moment().format("hh:mm:ss.SSS") < displayHours) {
         Meteor.subscribe('cycles-recent', Parts.findOne().timestamp.toString());
     }
             return (Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count()) * Parts.findOne().cavitation ;
        // console.log("This is the cycles find"+Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count());
      },
        returnTimeStamp: function () {
        //calculate the amount of time needed for the job
         console.log("This is the time stamp "+ Parts.findOne().timestamp.toString());
        
       },
    progressBar: function () {
        //calculate the amount of time needed for the job
        //This function will require converting the string to a number
        //Then converting the number to minutes, then dividing the minutes 
        //I will try to use this for the changing the progress bar
        console.log("This is the formatted data" +moment(displayHours).format("h"));
        var percent = moment(Parts.findOne().timestamp.toString()).format("h")/moment(displayHours).format("h");
        percent = percent *100;

         return  Math.round(percent);
         
    },

    changeStatus: function() {
      //convert this if else statement to change the 

      // $("#status").css("background-color", "black");

    },
    changeBar: function() {
      //convert this if else statement to change the 
      var a=5;
      if (a>4)
      {
       is100:true
      }
      
},
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

});


//Figure out the logic for breaking up the job into 24 hours.
//after that only output 8 hour segments of the job





















// var partStats = {
//     workcenterName: Machines.findOne().machinenumber,
//      partNumber: Parts.findOne().partnumber,
//      partCycleTime: "23",
//      partsPlanned: Parts.findOne().quantity,
//      cavities: Parts.findOne().cavitation,
//      tech: Parts.findOne().initials,
//      startTime: start_time
//  };


























// Meteor.subscribe('parts-to-access', function () {
//     var test = Parts.find({workcenter: '304A'}).fetch();
//     console.log(test[0].cavitation);
// });
// Meteor.subscribe('PressCycles');
// //console.log("Getting a single entry: "+ Parts.find().count() );

// var start_time = moment().hour(7).format("YYYY-MM-DD hh:mm:ss.SSS");
// console.log(start_time);


// Template.job.helpers({
//     calculateTime: function () {
//         //calculate the amount of time needed for the job
//         var estimatedTime = (partStats.partsPlanned / partStats.cavities) * partStats.partCycleTime;
//         return displayHours = moment().startOf('day').seconds(estimatedTime).format('H:mm:ss');
//     },
//     currentTime: function () {
//         Meteor.call("getCurrentTime", {
//             onResultRecieved: function (err, result) {
//                 console.log("RESULT: " + result);
//             }
//         });
//     },
//     incomingCycles: function () {
//         //grab all cycles from today
//         Meteor.subscribe('cycles-recent', partStats.startTime);
//         return (100 * partStats.cavities);
//     },
//     partsPlanned: function () {
//         return partStats.partsPlanned;
//     },
//     partNumber: function () {
//          return partStats.partNumber;
//     },
//     earnedHours: function () {
//         var earnedHoursCalc = (1 * partStats.cavities) / partStats.partsPlanned;
//         return earnedHoursCalc;
//     },
//     parts: function() {
//     return Parts.find();
//    },
//    columns: function() {
//      // the context is a part
//      var result = _.values(this.data);
//      result.unshift(this.text);
//      return result;
// }
// });
