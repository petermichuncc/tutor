Cumulatives = new Mongo.Collection('cumulatives');

Meteor.methods({
  cumulatives: function(s,e, num)
  {
		start=s;
    	end=e;
    //so I'm returning a count from the last job until the start of the current job
    // the cavitation should be from before the end
    



  var incomingcycles=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt:end}}).count() * Parts.find({press:num,timestamp:{$lt: end}},{sort: {timestamp: -1}, limit: 1}).fetch().pop().cavitation;
return incomingcycles;


  },
  amountMade: function(start,end, num)
  {
   
    //so I'm returning a count from the last job until the start of the current job
    // the cavitation should be from before the end
    


  var incomingcycles=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start, $lt:end}}).count() * Parts.find({press:num},{sort: {timestamp: -1}, limit: 1}).fetch().pop().cavitation;
return incomingcycles;


  },
start: function (num)
{
  var begin =Parts.find({press:num}).fetch().pop().timestamp.toString()
 var start =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: begin}}).fetch().pop().CycleTimeStamp
       return start

},
  
  num: function()
  {

    num=n;
    return "2";
  },
  cumulativescb: function(s, num)
  {
		start=s;
    	
    
    



  var incomingcycles=  Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: start}}).count() * Parts.find({press:num},{sort: {timestamp: -1}, limit: 1}).fetch().pop().cavitation;

return incomingcycles;


  },
 cumulativesInsert: function(cumulativesAttributes) {
      var post = _.extend(cumulativesAttributes, {
      
      cumulatives: cumulativesAttributes.cumulatives, 
      timestamp: cumulativesAttributes.timestamp,
      ic: cumulativesAttributes.ic,
      press: cumulativesAttributes.press,
      wc: cumulativesAttributes.wc
       
      });
   
    Cumulatives.insert(cumulativesAttributes);
    
}
});
