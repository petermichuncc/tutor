Template.jobstatus.helpers({
//I need the logic here for the if else statement that
//decides essentially when to put the work center into green(good)
//or to put it into yellow
//so basically if I don't get cycles within x minutes put the machine into yellow
//if the machine hasn't gotten any cyles at all leave it in transparent.

//I might be able to use some of the logic for the progress bar to determine the 
//logic for the status changing

statusgreen: function(){
 num= Machines.find().fetch().pop();
     num=num.machinenumber
 count = Cycles.find({PressNumber: num,CycleTimeStamp: {$gte: moment(Parts.find().fetch().pop().timestamp.toString()).subtract(25,'seconds').format("YYYY-MM-DD HH:mm:ss.SSS")}}).count()
 


   if (count>0)
    {
    return true
}

  },
  
// },

 statusyellow: function(){

    if (count<=0)
      {
     return true;
  }},
  statuswhite: function(){

    if (count===0)
      {
     return true;
  }


}})










