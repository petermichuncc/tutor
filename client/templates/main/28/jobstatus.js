
 Meteor.subscribe('parts');
 var num= "28"
 Template.jobstatus28.helpers({
 
statusgreen: function(){
   
     
   var month=moment().format("MM")
      
   
     //figure out cycle time
       var start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: Parts.find({press:num, month:month}).fetch().pop().timestamp.toString()}}).fetch().pop().CycleTimeStamp
       
       var prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: Parts.find({press:num, month:month}).fetch().pop().timestamp.toString(), $lt: start}}).fetch().pop().CycleTimeStamp
         
        //I should always compare with the most recently submitted job
        
           
         
           var cycletimeH=Parts.find({press:num, month:month}).fetch().pop().cycletimeH
          
        
           var cycletimeP=Parts.find({press:num, month:month}).fetch().pop().cycletimeP
          
           var cycletimeQ=Parts.find({press:num, month:month}).fetch().pop().cycletimeQ
          
           
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
           


var startseconds=moment(start).format("ss.SSS")
// startminutes=moment(start).format("mm")

var startminutes=moment(start).format("mm")
startseconds=Number(startseconds)+ Number(startminutes)*60
var prevseconds=moment(prev).format("ss.SSS")
// prevminutes=moment(prev).format("mm")
var prevminutes=moment(prev).format("mm")

prevseconds=Number(prevseconds) + Number(prevminutes)*60
var cycletimeNow= startseconds-prevseconds
// console.log("This is the cycletime" + cycletime)
 cycletimeNow= (3600/cycletimeNow) * Parts.find({press:num, month:month}).fetch().pop().cavitation  //this is the pieces per hour




 if (cycletimeNow>=cycletime)
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
   
  
     
   var month=moment().format("MM")
   

     //figure out cycle time
       var start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: Parts.find({press:num, month:month}).fetch().pop().timestamp.toString()}}).fetch().pop().CycleTimeStamp
       
       var prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: Parts.find({press:num, month:month}).fetch().pop().timestamp.toString(), $lt: start}}).fetch().pop().CycleTimeStamp
        
        //I should always compare with the most recently submitted job
        
         
           var cycletimeH=Parts.find({press:num, month:month}).fetch().pop().cycletimeH
         
         
           var cycletimeP=Parts.find({press:num, month:month}).fetch().pop().cycletimeP
          
         
           var cycletimeQ=Parts.find({press:num, month:month}).fetch().pop().cycletimeQ
          
           
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
           


var startseconds=moment(start).format("ss.SSS")
// startminutes=moment(start).format("mm")

var startminutes=moment(start).format("mm")
var startseconds=Number(startseconds)+ Number(startminutes)*60
var prevseconds=moment(prev).format("ss.SSS")
// prevminutes=moment(prev).format("mm")
var prevminutes=moment(prev).format("mm")
prevseconds=Number(prevseconds) + Number(prevminutes)*60
var cycletimeNow= startseconds-prevseconds
// console.log("This is the cycletime" + cycletime)
 cycletimeNow= (3600/cycletimeNow) * Parts.find({press:num, month:month}).fetch().pop().cavitation  //this is the pieces per hour

 if (cycletimeNow<cycletime )
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










