
 Meteor.subscribe('parts');
 var num= "28"
 function time (){
    
    
    var nowtime=Chronos.currentTime(30000)
    nowtime=moment(nowtime).format("YYYY-MM-DD HH:mm:ss.SSS")
 

    return nowtime;
   }
  
 Template.jobstatus28.helpers({
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
           
cycletime=Number(1000)/cycletime

 var cycletimeNow = moment(start).diff(prev, 'seconds', true )

// console.log("This is the cycletime" + cycletime)

 cycletimeNow= (3600/cycletimeNow) * Parts.find({press:num}).fetch().pop().cavitation  //this is the pieces per hour



 var lag = moment(nowtime).diff(start, 'minutes', true );
 if (cycletimeNow>=cycletime && lag <cycletime*2)
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
// console.log("This is the cycletime" + cycletime)
 cycletimeNow= (3600/cycletimeNow) * Parts.find({press:num}).fetch().pop().cavitation  //this is the pieces per hour
 
 var lag = moment(nowtime).diff(start, 'minutes', true );
 
 if (cycletimeNow<cycletime && lag <cycletime*2)
     {
     return true
   }
   else
   {
    return false
   }
   // }, 1000);
 }
   
//   // }, 1000);


 })










