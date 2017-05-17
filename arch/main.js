function pagCargada() { // funcion para el evento onload (carga de página)
    alert("La página esta cargadita!");
}

function sobreMi(){ // funcion para el evento onmouseout (mouse sobre el elemento)
  alert("Estás sobre mí! 1313 <3 <3");
}

function fueraDeMi(){ // funcion para el evento onmouseover (mouse fuera del elemento)
  alert("No estás sobre mí T.T");
}

// Elementos de eventos con onclick y alertas xD
var boton = document.getElementById('demo');
boton.addEventListener('click', function(){
  alert("Hola Mundo!");
  alert("AJA!!! No era todito xD!");
  alert("Te tengo un REGALITO!");
  alert("Pon ATENCIÓN <3");
  alert("1.- Me he comprado unas NIKE en la tienda de deportes en el centro.");
  alert("2.- ¿Air Max?");
  alert("3.- Air muchax max.");
  alert("JAJAJJA fin ....");
  alert("muajajjaja por el poder el SQUAD 666!!");
});
