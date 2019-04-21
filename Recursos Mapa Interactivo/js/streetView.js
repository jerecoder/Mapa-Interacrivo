streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView

  function inicializar () {
    panorama =  mapa.getStreetView();
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
    panorama.setPosition(ubicacion);
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
