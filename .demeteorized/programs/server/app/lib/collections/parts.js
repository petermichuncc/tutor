(function(){// Collection for the parts and other related components for our table to output
Parts = new Mongo.Collection('parts');

Meteor.methods({
  partsInsert: function(partsAttributes) {
      var post = _.extend(partsAttributes, {
      
      partnumber: partsAttributes.partnumber, 
      quantity: partsAttributes.quantity, 
      timestamp: partsAttributes.timestamp,
      initials: partsAttributes.initials,
      cavitation: partsAttributes.cavitation,
      workcenter: partsAttributes.workcenter,
       hour: partsAttributes.hour,
       minute: partsAttributes.minute,
       month: partsAttributes.month,
       day: partsAttributes.day
       
      
    });
   
    Parts.insert(partsAttributes);
    
}});

})();
