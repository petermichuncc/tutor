Cycles = new Mongo.Collection("PressCycles");

Meteor.methods({
  
  amountMade: function(s, num)
  {
    start=s;
      end=e;
    //so I'm returning a count from the last job until the start of the current job
    // the cavitation should be from before the end
    



  var incomingcycles=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt:end}}).count() * Parts.find({press:num},{sort: {timestamp: -1}, limit: 1}).fetch().pop().cavitation;
return incomingcycles;


  }

 
});
