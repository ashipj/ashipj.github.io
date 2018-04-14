
(function() {
    'use strict';
    var app = {
        isLoading: true,
        spinner: document.querySelector('.loader')
    };

    document.addEventListener('DOMContentLoaded', function() {
        app.spinner.setAttribute('hidden', true);
    });



    /*****************************************************************************
     *
     * Event listeners for UI elements
     *
     ****************************************************************************/
    document.getElementById('mapAPILoaded').addEventListener('change', function() {
        console.log("Loaded google maps api.");
        app.loadMap();
    });
    // get location (Current location with option to select a different location)
    // get all parking lots around 1-10km of the location
    // render map with current location and parking sopt
    // show path to the closest parking spot.



    /*****************************************************************************
     *
     * Methods to update/refresh the UI
     *
     ****************************************************************************/
     app.loadMap = function(location) {
        var infoWindow = new google.maps.InfoWindow,
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 15
            });
         if(location) {
             // user has entered some location. use this to get geo cordinates.
         } else if ( navigator.geolocation) {
             console.log("Getting user-location from this modern browser.");
             navigator.geolocation.getCurrentPosition(function(position) {
                 var pos = {
                     lat: position.coords.latitude,
                     lng: position.coords.longitude
                 };

                 infoWindow.setPosition(pos);
                 infoWindow.setContent('Location found.');
                 infoWindow.open(map);
                 map.setCenter(pos);
             }, function() {
                 app.handleLocationError(true, infoWindow, map.getCenter());
             });
         } {
             // Force user for entering a location and the reload this function.
             return false;
         }

         app.getParkingLot();

         // render map with user-location as center and
         // show parking spaces as markers
     };

     app.handleLocationError = function(browserHasGeolocation, infoWindow, pos) {
         infoWindow.setPosition(pos);
         infoWindow.setContent(browserHasGeolocation ?
             'Error: The Geolocation service failed.' :
             'Error: Your browser doesn\'t support geolocation.');
         infoWindow.open(map);
     };

     app.getParkingLot = function() {
        console.log("Getting parking lots from server.");
     };


    /*****************************************************************************
     *
     * Methods for dealing with the model
     *
     ****************************************************************************/


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(function() {
                console.log('Service Worker Registered');
            });
    }

})();
