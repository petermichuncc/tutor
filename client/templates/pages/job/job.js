// Helper for the parts template that feeds it data
Meteor.subscribe('parts');

   start_time = moment().hour(23).format("2015-06-01 H:mm:ss.SSS");
   hour2_time= moment().hour(24).format("2015-06-01 H:mm:ss.SSS");
   test = moment().format("2015-06-01 H:mm:ss.SSS");
console.log("this is the test amount"+ test);
    //This is the 
  // start_time = Parts.find().timestamp;
  console.log("This is the start time from 11:00 pm i think "+ start_time);
 //var start_time = Parts.findOne().timeStamp;
// console.log("This is the time stamp " +moment().Parts.find().timeStamp.format("YYYY-MM-DD hh:mm:ss.SSS"));

console.log(start_time);
// console.log("This is your cavitation" +Parts.findOne().cavitation);

Template.job.helpers({
  calculateTime: function () {
         //calculate the amount of time needed for the job
         estimatedTime = (Parts.findOne().quantity / Parts.findOne().cavitation) *"23";
         estimatedminutes=parseInt(estimatedTime/60);

         console.log("Estimated minutes" + estimatedminutes)
         estimatedseconds=estimatedTime%60;
         displayHours = moment(Parts.findOne().timestamp.toString()).add(estimatedminutes, 'm').add(estimatedseconds, 's').format("hh:mm:ss.SSS");
         
         
         
         console.log ("This is the estimated time " + estimatedTime);
         console.log ("This is the current time" + moment().format("hh:mm:ss.SSS"));
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
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles: function () {
        //grab all cycles from today
      
         Meteor.subscribe('cycles-recent', Parts.findOne().timestamp.toString());
         
    
          var cycles = (Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count()) * Parts.findOne().cavitation ;
     
            return cycles;
        // console.log("This is the cycles find"+Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count());
      },
      //Cycles.find({CycleTimeStamp: { $gte: startTime}})
      //this will retrieve all cyles greater than or equal to this start time
      //so this will be 
      earnedHours1: function () {
    //endTime=moment().hour(0).format("YYYY-MM-DD hh:mm:ss.SSS");
    

         Meteor.subscribe('cycles-recent', start_time);
       while (test<displayHours){
        // var earnedHoursCalc = ((Cycles.find({PressNumber: '1'},{CycleTimeStamp: { $lte: test}}).count()) * Parts.findOne().cavitation) / Parts.findOne().quantity;
       var earnedHoursCalc = ((Cycles.find({PressNumber: '1'},{CycleTimeStamp: { $lte: test}}).count()) * Parts.findOne().cavitation) / Parts.findOne().quantity;
       }
        while (test<displayHours){
        console.log ("this is the earned hours since now" + (Cycles.find({PressNumber: '1'},{CycleTimeStamp: { $gte: test}}).count()) * (Parts.findOne().cavitation / Parts.findOne().quantity))
        }
        // console.log ("this is the earned hours since now" + (Cycles.find({PressNumber: '1'},{CycleTimeStamp: { $gte: test}}).count()) * (Parts.findOne().cavitation / Parts.findOne().quantity))
         
        return earnedHoursCalc;
            },
     incomingCycles1: function () {
        //grab all cycles from today
     
         
      
             return (Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count()) * Parts.findOne().cavitation ;
        // console.log("This is the cycles find"+Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count());
      },
      earnedHours2: function () {
    if (moment().format("hh:mm:ss.SSS") < displayHours) {
      newStart = moment().hour(0).format("YYYY-MM-DD hh:mm:ss.SSS");
         
      }
        var earnedHoursCalc = ((Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}, {CycleTimeStamp: { $gte: hour2_time}}).count()) * Parts.findOne().cavitation) / Parts.findOne().quantity;
         
        earnedHoursCalc = earnedHoursCalc.toFixed(2);
         
        return earnedHoursCalc;
            },
     incomingCycles2: function () {
        //grab all cycles from today
     
        
      
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
 is100: function(){
 
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
     console.log ("This is the now" + now)
     console.log ("This is the past" + past)
     console.log ("This is the numerator" + numerator)
     console.log ("This is the denominator" + denominator)
console.log("This is the percent" + percent)
    
    if (percent.get()>90)
    {
    return true;
}

  },
  is90: function(){

   if (percent.get()>80)
    {
    return true;
}
  },
is80: function(){
    if (percent.get()>70)
    {
    return true;
}
  },
  is70: function(){
    if (percent.get()>60)
    {
    return true;
}
  },
  is60: function(){
    if (percent.get()>50)
    {
    return true;
}
  },
  is50: function(){
    if (percent.get()>40)
    {
    return true;
}
  },
  is40: function(){
    if (percent.get()>30)
    {
    return true;
}
  },
  is30: function(){
    if (percent.get()>20)
    {
    return true;
}
  },
  is20: function(){
    if (percent.get()>10)
    {
    return true;
}
  },
  is10: function(){
    if (percent.get()>0)
    {
    return true;
}
  },
  is0: function(){
    if (percent.get()===0)
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
