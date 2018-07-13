function initMap() {
    var uluru = { lat: 33.885990, lng:  -117.508535 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });

    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}