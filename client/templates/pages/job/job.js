//Meteor.subscribe('cycles-recent');

// Meteor.methods({
//   getCurrentTime: function () {
//     var currentTime = moment().format("h:mm:ss a");
//     console.log("result from client SON " + currentTime);
//     return currentTime;
//   }
// });

var start_time = moment().hour(7).format("YYYY-MM-DD hh:mm:ss.SSS");
console.log(start_time);

var partStats = {
    workcenterName: "01",
    partNumber: "CCDD",
    partCycleTime: "23",
    partsPlanned: "20000",
    cavities: "4",
    tech: "LE",
    startTime: start_time
};
//
//Jobs.insert({
//    workcenterName: "01"
//});



Template.job.helpers({
    calculateTime: function () {
        //calculate the amount of time needed for the job
        var estimatedTime = (partStats.partsPlanned / partStats.cavities) * partStats.partCycleTime;
        return displayHours = moment().startOf('day').seconds(estimatedTime).format('H:mm:ss');
    },
    currentTime: function () {
        Meteor.call("getCurrentTime", {
            onResultRecieved: function (err, result) {
                console.log("RESULT: " + result);
            }
        });
    },
    incomingCycles: function () {
        //grab all cycles from today
        Meteor.subscribe('cycles-recent', partStats.startTime);
        return (Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count()) * partStats.cavities;
    },
    partsPlanned: function () {
        return partStats.partsPlanned;
    },
    partNumber: function () {
        return partStats.partNumber;
    },
    earnedHours: function () {
        var earnedHoursCalc = ((Cycles.find({PressNumber: '1'}, {sort: {CycleTimeStamp: -1}}).count()) * partStats.cavities) / partStats.partsPlanned;
        return earnedHoursCalc;
    }
});
