
Template.map.helpers({
//I need to install the google maps meteor package stuff here
tutors: function(){
     
      return Tutors.find({Distance:{$gte: "15"}})

    }


  
})