if (Meteor.isClient) {
  Meteor.startup(function() {
    GoogleMaps.load();
  });
}

Template.body.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('exampleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});


Template.map.helpers({
//I need to install the google maps meteor package stuff here
exampleMapOptions: function() {
    // Make sure the maps API has loaded
    
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(-37.8136, 144.9631),
        zoom: 8
      };
    }
  }


  
})