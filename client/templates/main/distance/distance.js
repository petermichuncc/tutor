
Template.distance.helpers({

tutors: function(){
    //
    //
      return Tutors.find({Distance:{$gte: "15"}})

    }


  
})