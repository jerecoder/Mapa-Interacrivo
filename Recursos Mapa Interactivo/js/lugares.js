var circulo;
var autocompletar;

lugaresModulo = (function () {
  var servicioLugares // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

    // Completa las direcciones ingresadas por el usuario a y establece los límites
    // con un círculo cuyo radio es de 20000 metros.
  autocompletar = function () {

    var direccion = new google.maps.places.Autocomplete(document.getElementById('direccion'), {types: ['geocode', 'establishment'], strictBounds: true});
    var desde = new google.maps.places.Autocomplete(document.getElementById('desde'), {types: ['geocode', 'establishment'], strictBounds: true});
    var hasta = new google.maps.places.Autocomplete(document.getElementById('hasta'), {types: ['geocode', 'establishment'], strictBounds: true});
    var agregar = new google.maps.places.Autocomplete(document.getElementById('agregar'), {types: ['geocode', 'establishment'], strictBounds: true});

    circulo = new google.maps.Circle({
      visible: false,
      map: mapa,
      center: posicionCentral,
      radius: 1000
    });

    console.log(circulo.center);

    direccion.setBounds(circulo.getBounds());
    desde.setBounds(circulo.getBounds());
    hasta.setBounds(circulo.getBounds());
    agregar.setBounds(circulo.getBounds());
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
    var tipoDeLugar = document.getElementById('tipoDeLugar').value;
    var radio = document.getElementById('radio').value;
    servicioLugares.nearbySearch({radius: radio, name: tipoDeLugar, location: posicion}, function(results,status){
      marcadorModulo.marcarLugares(results,status);
    });
  }
  return {
    inicializar,
    buscarCerca
  }
})()
