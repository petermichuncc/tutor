//Returns the data in the Machines collection to the workcenter template
//Working on returning the last value in the machine or the selected value.
Template.workcenter.helpers({
    
    machines: function () {
    var machine = Cycles.find();
    // console.log(machine);

    return Machines.find()


  }
  
});


