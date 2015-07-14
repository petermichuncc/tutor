
Meteor.subscribe('cycles-recent', moment().subtract(1, 'hours').format("YYYY-MM-DD HH:mm:ss.SSS"))
   Meteor.subscribe('parts');
Meteor.subscribe('machines');

Template.countdownbar.helpers({

 percent: function(){
     num= Machines.find().fetch().pop().cellnum;
     
        //change percent to be how many hours out of 24 hours
         
    month=moment().format("MM")
   
      timestamp= moment().format("YYYY-MM-DD 08:59:00.000")
   num= Machines.find().fetch().pop().cellnum;
  estimatedTime = (Number(Parts.find({press:num,month:month}).fetch().pop().quantity)) / Number(Parts.find().fetch().pop().cavitation);
         
         // //basically take the quantity divided by cavitation and multiply this by 
        start =moment(Parts.find({press:num,month:month}).fetch().pop().timestamp.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")
        next =Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt:  start}}).CycleTimeStamp
        startseconds=moment(start).format("ss.SSS")
        startminutes=moment(start).format("mm")
        startseconds=Number(startseconds)+ Number(startminutes)*60
        nextseconds=moment(next).format("ss.SSS")
        nextminutes=moment(next).format("mm")
        nextseconds=Number(nextseconds) + Number(nextminutes)*60
        cycletime= nextseconds-startseconds
   estimatedTime=estimatedTime * cycletime

         estimatedminutes=parseInt(estimatedTime/60);
         if (estimatedminutes <=0)
         {
          totaltime=0;
         }
             
        estimatedhours = estimatedminutes/60;
        estimatedhours = parseInt(estimatedhours)//this is the total time
        //I need to subtract the actual cycles coming from the total hours
        //Therefore I need to take a count of the actual cycles and multiply this by the cycle time
        //Then i need to subtract this count from the total
        //Then i need to divide by the cavitation

        cycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({press:num,month:month}).fetch().pop().timestamp.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({press:num,month:month}).fetch().pop().cavitation;
        cycles = Number(cycles)
        cycles = cycles/60
        cycles = cycles/60

        
        total= (estimatedhours - cycles)/ Parts.find({press:num,month:month}).fetch().pop().cavitation
       
         if (total <=0)
         {
          total=0;
         }
         if (total >24)
         {
          total=24
         }

         
          percent=(total/24) * 100
         
         if (percent<=0)
          {

           percent=0;
          }
          return percent;
   },
hour: function(){
    num= Machines.find().fetch().pop().cellnum;
      month=moment().format("MM")
         // estimatedTime = (Number(Parts.find().fetch().pop().quantity) - Number(count))  / Number(Parts.find().fetch().pop().cavitation);
          estimatedTime = (Number(Parts.find({press:num,month:month}).fetch().pop().quantity)) / Number(Parts.find({press:num,month:month}).fetch().pop().cavitation);
          
         // //basically take the quantity divided by cavitation and multiply this by 
        start =moment(Parts.find({press:num,month:month}).fetch().pop().timestamp.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")
        next = Cycles.findOne({PressNumber: num, AutoStatus:'1',CycleTimeStamp: {$gt:  start}}).CycleTimeStamp
        startseconds=moment(start).format("ss.SSS")
        startminutes=moment(start).format("mm")
        startseconds=Number(startseconds)+ Number(startminutes)*60
        nextseconds=moment(next).format("ss.SSS")
        nextminutes=moment(next).format("mm")
        nextseconds=Number(nextseconds) + Number(nextminutes)*60
        cycletime= nextseconds-startseconds
   estimatedTime=estimatedTime * cycletime

         estimatedminutes=parseInt(estimatedTime/60);
         
           
        estimatedhours = estimatedminutes/60;
        estimatedhours = parseInt(estimatedhours)


         if (estimatedhours <=0)
         {
          estimatedhours=0;
         }
         estimatedhours
          cycles= Cycles.find({PressNumber: num,AutoStatus: "1",CycleTimeStamp: {$gte: moment(Parts.find({press:num,month:month}).fetch().pop().timestamp.toString()).format("YYYY-MM-DD HH:mm:ss.SSS")}}).count() * Parts.find({press:num,month:month}).fetch().pop().cavitation;
        
        cycles = Number(cycles)
        cycles = cycles/60
        cycles = cycles/60
        
        total= (estimatedhours - cycles)/ Parts.find({press:num,month:month}).fetch().pop().cavitation
       total = parseInt(total)
         if (total <=0)
         {
          total=0;
         }
         if (total >24)
         {
          total=24
         }

        
        //change percent to be how many hours out of 24 hours
        return total;
   }


  })



