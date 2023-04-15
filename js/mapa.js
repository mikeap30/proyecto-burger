
function iniciarMap(){
    var coord = {lat:-31.3914298,lng: -64.1584926,};
    var map = new google.maps.Map(document.getElementById('mapa'),{
      zoom: 13,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
