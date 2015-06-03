
// Console.log ("This is outside the is100 function");
Template.progresscontroller.helpers({
percent: function (){

 now = Number(mo.now.get().format("H"));
         now = now*60;
       now = now + Number((mo.now.get().format("m")));
       console.log("This is the minutes now" + now);
estimatedTime = Number((Parts.findOne().quantity / Parts.findOne().cavitation) *"23");
      estimatedTimeMinutes = estimatedTime/60;//This is the additional estimated time in minutes
      estimatedTimeSeconds= estimatedTime%60;//This is the additional estimated time in seconds
       //displayHours needs to be still, so it has time stamp from the collection
  //displayHours has the estimatedTime added to it      
 displayHours = Number(moment(Parts.findOne().timestamp.toString()).format("H"));
  displayHours = displayHours*60; //This converts the hours to minutes
//This code will add minutes from the time stamp to the calculated minutes from the hours component
 displayHours = displayHours + Number(moment(Parts.findOne().timestamp.toString()).format("m"))
//This code will add the estimated time to complete to the minutes
 displayHours = displayHours + estimatedTimeMinutes //This adds minutes from estimated time
           //Remove the minutes in the time stamp from both the numerator and denominator for the percent

  past= Number(moment(Parts.findOne().timestamp.toString()).format("H"));
  past = past*60;
  past = past + Number(moment(Parts.findOne().timestamp.toString()).format("m"))
  
  numerator=now-past;
  denominator=displayHours-past;
  
 percent = numerator/denominator
 percent = percent*100;
 if (percent >=100)
 {
  percent = 100
 }
  
  
return percent;


}
,
is100: function(){
     
      
     
    
    if (percent>=90)
    {
    return true;
}

},


  is90: function(){

   if (percent>=80)
    {
    return true;
}
  
},
is80: function(){
    if (percent>=70)
    {
    return true;
}
 
},
  is70: function(){
    if (percent>=60)
    {
    return true;
}
  
},
  is60: function(){
    if (percent>=50)
    {
    return true;
}
 
},
  is50: function(){
    if (percent>=40)
    {
    return true;
}
 
},
  is40: function(){
    if (percent>=30)
    {
    return true;
}
 
},
  is30: function(){
    if (percent>=20)
    {
    return true;
}
 
},
  is20: function(){
    if (percent>=10)
    {
    return true;
}
 
},
  is10: function(){
    if (percent>0)
    {
    return true;
}
 
},
  is0: function(){
    if (percent<=0)
    {
    return true;
}
 
}

 
})








