 Meteor.subscribe('cycles-recent', moment().subtract(1, 'hours').format("YYYY-MM-DD HH:mm:ss.SSS"))

 Meteor.subscribe('parts');
  num= "19"
 Template.jobstatus19.helpers({
 
statusgreen: function(){
   
     
    month=moment().format("MM")
      
   
     //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: Parts.find({press:num, month:month}).fetch().pop().timestamp.toString()}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: Parts.find({press:num, month:month}).fetch().pop().timestamp.toString(), $lt: start}}).fetch().pop().CycleTimeStamp
        
        //I should always compare with the most recently submitted job
        
           
         
            cycletimeH=Parts.find({press:num, month:month}).fetch().pop().cycletimeH
          
        
            cycletimeP=Parts.find({press:num, month:month}).fetch().pop().cycletimeP
          
            cycletimeQ=Parts.find({press:num, month:month}).fetch().pop().cycletimeQ
          
           
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
           


startseconds=moment(start).format("ss.SSS")
// startminutes=moment(start).format("mm")

startminutes=moment(start).format("mm")
startseconds=Number(startseconds)+ Number(startminutes)*60
prevseconds=moment(prev).format("ss.SSS")
// prevminutes=moment(prev).format("mm")
prevminutes=moment(prev).format("mm")

prevseconds=Number(prevseconds) + Number(prevminutes)*60
cycletimeNow= startseconds-prevseconds
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
     
    month=moment().format("MM")
   

     //figure out cycle time
        start =Cycles.find({PressNumber: num, AutoStatus:'1', CycleTimeStamp: {$gte: Parts.find({press:num, month:month}).fetch().pop().timestamp.toString()}}).fetch().pop().CycleTimeStamp
       
        prev =Cycles.find({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt: Parts.find({press:num, month:month}).fetch().pop().timestamp.toString(), $lt: start}}).fetch().pop().CycleTimeStamp
        
        //I should always compare with the most recently submitted job
        
         
            cycletimeH=Parts.find({press:num, month:month}).fetch().pop().cycletimeH
         
         
            cycletimeP=Parts.find({press:num, month:month}).fetch().pop().cycletimeP
          
         
            cycletimeQ=Parts.find({press:num, month:month}).fetch().pop().cycletimeQ
          
           
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
           


startseconds=moment(start).format("ss.SSS")
// startminutes=moment(start).format("mm")

startminutes=moment(start).format("mm")
startseconds=Number(startseconds)+ Number(startminutes)*60
prevseconds=moment(prev).format("ss.SSS")
// prevminutes=moment(prev).format("mm")
prevminutes=moment(prev).format("mm")
prevseconds=Number(prevseconds) + Number(prevminutes)*60
cycletimeNow= startseconds-prevseconds
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










