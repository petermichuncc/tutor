

 Meteor.subscribe('parts');
 var num= "32"
 function time (){
    
    
    var nowtime=Chronos.currentTime(30000)
    nowtime=moment(nowtime).format("YYYY-MM-DD HH:mm:ss.SSS")
 

    return nowtime;
   }
  Template.jobstatus32.events({
  'click .rectangle': function(event){
  var lastEnd = Hours.find({press:num}).fetch().pop().timestamp
 var lastjob= Parts.find({press:num}).fetch().pop().timestamp
   if(moment(lastjob).isAfter(lastEnd))
   {
   try{

    var part=Parts.find({press:num}).fetch().pop().partnumber
 var begin =Parts.find({press:num}).fetch().pop().timestamp.toString()
           
       var start =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: begin}}).fetch().pop().CycleTimeStamp
       
       var  prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: begin, $lt: start}}).fetch().pop().CycleTimeStamp

       // //I should always compare with the most recently submitted job

       // var planned=1000/Number(cycletime)
             var cycletimeH=Parts.find({press:num}).fetch().pop().cycletimeH
             var cycletimeP=Parts.find({press:num}).fetch().pop().cycletimeP
             var cycletimeQ=Parts.find({press:num}).fetch().pop().cycletimeQ
              if (cycletimeH>0 )
             {
               cycletime=cycletimeH
             
           }

              else if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
             }
              else if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
             {
                cycletime=cycletimeQ
              
              }

 var cycletimeNow = moment(start).diff(prev, 'seconds', true )

   var piecesPerHour= (Number(3600)/cycletimeNow) * Parts.find({press:num}).fetch().pop().cavitation  //this is the pieces per hour
            //ReactiveMethod.call('cumulatives', start,num);
            //I need to count all the cycles before yesterday at 11 then start counting from that time
            //if the last job occured prior to yesterday at 11
            //I do this since I only subscribe data since yesterday at 11.
              var yesterday=moment().subtract(1, 'days').format("YYYY-MM-DD 23:00:00.000")
               if (moment(yesterday).isAfter(begin))
               {
                 
                 made=ReactiveMethod.call('amountMade', begin,yesterday,num);
              amountMade=Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: yesterday}}).count() * Parts.find({press:num},{sort: {timestamp: -1}, limit: 1}).fetch().pop().cavitation;
              amountMade=amountMade+made
             }
              else
              {
              amountMade=Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: begin}}).count() * Parts.find({press:num},{sort: {timestamp: -1}, limit: 1}).fetch().pop().cavitation;
           }
            
           
    
         var  hoursRemaining=(Parts.find({press:num}).fetch().pop().quantity - amountMade)/piecesPerHour
        hoursRemaining= Number(hoursRemaining)
     
    
       if (hoursRemaining <0)
      {
       hoursRemaining=0
      }
    
            var percent= Number(hoursRemaining)
            if (percent >0)
            {

            percent=Number(percent.toFixed(3))
                 }              
          if (percent<=0)
            {

            percent=0;
           }
  
   
    
  var hoursRemaining=percent
 var hours=parseInt(hoursRemaining)
 if (hours <=0)
 {
hours=0

 }
        var  minutes= hoursRemaining % 1
         minutes = minutes * 60
         minutes = parseInt(minutes)
         if (minutes <=0)
         {
          minutes=0
         }
         var text = hours.toString().concat(" hours and ",minutes," minutes left")
         
      
 BootstrapModalPrompt.prompt({
    title: "Workcenter Status",
    content: "Partnumber: "+part+", "+text
}, function(result) {
  if (result) {
    // User confirmed it, so go do something.
  }
  else {
    // User did not confirm, do nothing.
  }
});
}
catch(e)
{
  if ( e instanceof TypeError)
  {
 BootstrapModalPrompt.prompt({
    title: "Workcenter Status",
    content: "Partnumber: "+part
}, function(result) {
  if (result) {
    // User confirmed it, so go do something.
  }
  else {
    // User did not confirm, do nothing.
  }
});
}
}
}
}
});

 Template.jobstatus32.helpers({
 workcenter: function()
 {

  return Workcenters.find({CellNum: num}).fetch().pop().CellID
 },
statusgreen: function(){
   
     
   
      
     nowtime=time();
     //figure out cycle time
         var start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: Parts.find({press:num}).fetch().pop().timestamp.toString()}}).fetch().pop().CycleTimeStamp
       
       var  prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: Parts.find({press:num}).fetch().pop().timestamp, $lt: start}}).fetch().pop().CycleTimeStamp
        
        //I should always compare with the most recently submitted job
        
           // var planned=1000/Number(cycletime)
         
            var cycletimeH=Parts.find({press:num}).fetch().pop().cycletimeH
          
        
            var cycletimeP=Parts.find({press:num}).fetch().pop().cycletimeP
          
            var cycletimeQ=Parts.find({press:num}).fetch().pop().cycletimeQ
          
           
            if (cycletimeH>0 )
            {
              cycletime=cycletimeH
             
            }

            else if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            else if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
//this is not the cycletime it is the pc/hr           
cycletime=Number(1000)/cycletime
//I need to convert this to the actual cycle time in seconds
//
cycletimeEstimated=Number(3600)/(cycletime/Number(Parts.find({press:num}).fetch().pop().cavitation))

 var cycletimeNow = moment(start).diff(prev, 'seconds', true )

// console.log("This is the cycletime" + cycletime)

 cycletimeNow= (3600/cycletimeNow) * Parts.find({press:num}).fetch().pop().cavitation  //this is the pieces per hour



 var lag = moment(nowtime).diff(start, 'seconds', true );

 if (cycletimeNow>=cycletime && lag <cycletimeEstimated*2)
     {
     return true
   }
   else
   {
    return false
   }

// // }, 1000);
   
 },


 statusyellow: function(){
     
   
   nowtime=time();

     //figure out cycle time
        var start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: Parts.find({press:num}).fetch().pop().timestamp.toString()}}).fetch().pop().CycleTimeStamp
       
        var prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: Parts.find({press:num}).fetch().pop().timestamp.toString(), $lt: start}}).fetch().pop().CycleTimeStamp
        
        //I should always compare with the most recently submitted job
        
         
            var cycletimeH=Parts.find({press:num}).fetch().pop().cycletimeH
         
         
            var cycletimeP=Parts.find({press:num}).fetch().pop().cycletimeP
          
         
            var cycletimeQ=Parts.find({press:num}).fetch().pop().cycletimeQ
          
           
            if (cycletimeH>0 )
            {
              cycletime=cycletimeH
             
            }

            else if ((cycletimeH<=0 || cycletimeH=="") && cycletimeP> 0)
            {
              cycletime=cycletimeP
              
            }
            else if ((cycletimeH<=0 || cycletimeH=="") && (cycletimeP<=0 || cycletimeP=="") && cycletimeQ!=0)
            {
              cycletime=cycletimeQ
              
            }
           
cycletime=Number(1000)/cycletime
 var cycletimeNow = moment(start).diff(prev, 'seconds', true )
 cycletimeEstimated=Number(3600)/(cycletime/Number(Parts.find({press:num}).fetch().pop().cavitation))

// console.log("This is the cycletime" + cycletime)
 cycletimeNow= (3600/cycletimeNow) * Parts.find({press:num}).fetch().pop().cavitation  //this is the pieces per hour
 //lag should look at the most recent cycle
 var lag = moment(nowtime).diff(start, 'seconds', true );

//fix lag (minutes)to compare to cycle time (seconds)
 if (cycletimeNow<cycletime && lag <cycletimeEstimated*2)
     {
     return true
   }
   else
   {
    return false
   }
   
 }
   



 })