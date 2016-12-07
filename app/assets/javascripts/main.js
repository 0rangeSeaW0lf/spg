var map;

function initMap() {

    var bounds = new google.maps.LatLngBounds();

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 41.3948976,
            lng: 2.1312568
        },
        zoom: 12
    });
    var marker = new google.maps.Marker({
        position: {
            lat: 41.3816726,
            lng: 2.1027344
        },
        map: map
    });
    var markers = [
        ['UB Esports', 41.3816726, 2.1027344],
        ['IESE Business School', 41.393502, 2.1055343],
        ['Port Olímpic', 41.3860558,2.1987927],
        ['Platja Nova Icaria', 41.3876657, 2.1990288]
    ];

    for (var i = 0, len = markers.length; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
    }
}