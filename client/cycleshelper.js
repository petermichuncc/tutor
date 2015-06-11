//Used to
Template.start.helpers({
  entry1: function() {
  	var myArray = Cycles.findOne({CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:40:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}});
  	

    return myArray.PressNumber
  },
  entry2: function() {
  	var myArray2 = Cycles.findOne({CycleTimeStamp: {$gte: moment().subtract(1, 'days').format("YYYY-MM-DD 23:58:00.000"), $lt: moment().format("YYYY-MM-DD 00:00:00.000")}});
  	

    return myArray2.PressNumber
  }
  
  
});