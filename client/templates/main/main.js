 

 /*Template.start.events({
  "submit .workcenterSelection": function(event){

  event.defaultPrevented;
   workcenter=$( "#partnumber" ).val();
 console.log("this is the workcenter" + workcenter);
  
  
  var x=workcenter;
 var workcenterchosen=Workcenters.find({CellID: x}).fetch().pop().CellNum
  num=workcenterchosen
  document.cookie=num;
   console.log("this is the cookie " + document.cookie)
if (moment().format("HH")>=15 && moment().format("HH") <23)
 {
  Router.go('shift2');
 }
 else if (moment().format("HH")>=7 && moment().format("HH") <15)
  {
   Router.go('shift1');
  }
  else  
  {
    Router.go('shift3');
  }
return false;
//  //  Session.set('workcenter', workcenterchosen);
//  // number= workcenterchosen;
  }}); */
