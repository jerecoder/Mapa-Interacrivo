var mapa // Mapa que vamos a modificar
var posicionCentral

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
  navigator.geolocation.getCurrentPosition(function(p) {
    posicionCentral = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);

  // Pone el mapa en la posicion del usuario
    mapa.setCenter(posicionCentral);
    autocompletar();
  });
    var div = document.getElementById('map');
    mapa = new google.maps.Map(div,{
      center: {lat: 0, lng: 0},
      zoom:15
    });

    geocodificadorModulo.inicializar()
    marcadorModulo.inicializar()
    direccionesModulo.inicializar()
    lugaresModulo.inicializar()
    streetViewModulo.inicializar()
}
