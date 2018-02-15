"use strict";
//tiempo de la fecha del proyecto 2
var fechaFin = new Date("March 5, 2018 09:30:00").getTime();

// modifico la cuenta cada segundo
var x = setInterval(function() {

  // obtengo la fecha actual 
  var fechaHoy = new Date().getTime();

  // tiempo restante
  var restante = fechaFin - fechaHoy;

  // calculo el tiempo por dias, horas, minutos y segundos
  var dia = Math.floor(restante / (1000 * 60 * 60 * 24));
  var hora = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((restante % (1000 * 60)) / 1000);

  // actualizo el elemento id="cuenta" en el index
  document.getElementById("cuenta").innerHTML = dia + "d " + hora + "h "
  + minutos + "m " + segundos + "s ";

  // si la cuenta termina escribo 
  if (restante < 0) {
    document.getElementById("cuenta").innerHTML = "In process to push";
  }
}, 1000);