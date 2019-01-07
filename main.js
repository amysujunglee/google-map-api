function initMap() {
    // Map options
    var options = {
        zoom: 8,
        center: {
            lat: 49.2827,
            lng: -123.1207
        }
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function (event) {
        // Add marker on map
        addMarker({
            coords: event.latLng
        });
    });


    /*
    // Add market
    var marker = new google.maps.Marker({
        position: {lat: 49.2488, lng: -122.9805},
        map: map,
        // Add customer marker
        icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
            
    // Create an info window when clicking
    var infoWindow = new google.maps.InfoWindow({
        content: '<strong>Burnaby</strong>'
    });
            
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
    */

    // Creat an array for markers
    var markers = [{
            coords: {
                lat: 49.2488,
                lng: -122.9805
            },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<strong>Burnaby</strong>'
                },
        {
            coords: {
                lat: 49.2606,
                lng: -123.2460
            },
            content: '<strong>UBC</strong>'
                },
        {
            coords: {
                lat: 49.1042,
                lng: -122.6604
            },
            content: '<strong>Langley</strong>'
                }
            ];

    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    /*
    // Add Markers and different icon images for each marker
    addMarker({
        coords: {
            lat: 49.2488,
            lng: -122.9805
        },
        iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content: '<strong>Burnaby</strong>'
    });
    addMarker({
        coords: {
            lat: 49.2606,
            lng: -123.2460
        },
        content: '<strong>UBC</strong>'
    });
    addMarker({
        coords: {
            lat: 49.1042,
            lng: -122.6604
        },
        content: '<strong>Langley</strong>'
    });
    */

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //                icon: props.iconImage
        });
        // Check for custom icons so we don't have undefined icons
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content for info windows
        var infoWindow = new google.maps.InfoWindow({
            content: props.content
        });

        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });
    }
}