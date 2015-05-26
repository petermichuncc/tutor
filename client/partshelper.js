// Helper for the parts template that feeds it data
Meteor.subscribe('parts');
Meteor.subscribe('PressCycles');
  var start_time = moment().hour(7).format("YYYY-MM-DD hh:mm:ss.SSS");
 //var start_time = Parts.findOne().timeStamp;
// console.log("This is the time stamp " +moment().Parts.find().timeStamp.format("YYYY-MM-DD hh:mm:ss.SSS"));

console.log(start_time);
// console.log("This is your cavitation" +Parts.findOne().cavitation);

Template.job.helpers({
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
        return earnedHoursCalc;
        
    },
     incomingCycles: function () {
        //grab all cycles from today

         Meteor.subscribe('cycles-recent', start_time);
        return (Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count()) * Parts.findOne().cavitation ;
        console.log("This is the cycles find"+Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count());
    },
    calculateTime: function () {
        //calculate the amount of time needed for the job
        var estimatedTime = (Parts.findOne().quantity / Parts.findOne().cavitation) * "23";
        return displayHours = moment().startOf('day').seconds(estimatedTime).format('H:mm:ss');
   
    },
    returnTimeStamp: function () {
        //calculate the amount of time needed for the job
        var timeStamp = parts.findOne().timeStamp;
        return timeStamp;
   
    }

});


// var partStats = {
//     workcenterName: Machines.findOne().machinenumber,
//      partNumber: Parts.findOne().partnumber,
//      partCycleTime: "23",
//      partsPlanned: Parts.findOne().quantity,
//      cavities: Parts.findOne().cavitation,
//      tech: Parts.findOne().initials,
//      startTime: start_time
//  };
