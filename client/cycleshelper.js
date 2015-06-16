//Used to
Template.start.helpers({
  
  entry1: function() {
  	Meteor.subscribe('cycles-recent', moment().format("YYYY-MM-DD 23:00:00.000"))
  	now=moment().format("HH")
  	var myArray = Cycles.find({CycleTimeStamp: {$gte: moment().subtract(60, 'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().PressNumber;
  	

    return myArray
  },
  entry2: function() {
  	now=moment().format("HH")
  	var myArray2 = Cycles.find({},{sort: {PressNumber: -1},limit: 2, CycleTimeStamp: {$gte: moment().subtract(83, 'seconds').format("YYYY-MM-DD HH:mm:ss.SSS"), $lt: moment().format("YYYY-MM-DD HH:mm:ss.SSS")}}).fetch().pop().PressNumber;
  	

    return myArray2
  }
  
  
});
//({sort: {PressNumber: 1}, limit: 2}).fetch().pop() second to last 
//({hour:now}, {sort: {minute: -1}, limit: 2}).fetch().pop() second to last 
//({hour: now}).fetch().pop().timestamp) latest
//{CycleTimeStamp: {$gte: moment().format("YYYY-MM-13 09:00:00.000"), $lt: moment().format("YYYY-MM-13 10:00:00.000")}}