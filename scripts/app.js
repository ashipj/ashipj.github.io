
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
    // get location (Current location with option to select a different location)
    // get all parking lots around 1-10km of the location
    // render map with current location and parking sopt
    // show path to the closest parking spot.



    /*****************************************************************************
     *
     * Methods to update/refresh the UI
     *
     ****************************************************************************/



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
