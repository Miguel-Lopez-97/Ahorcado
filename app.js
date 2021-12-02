"use strict";

let mostrarVidas = document.getElementById("vidas");
let vidas = 6;
let palabras = ["ELEFANTE", "PANTERA", "CARDIOLOGO", "PROGRAMACION", "ASESINO"];
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let lineas = document.getElementsByClassName("word")[0];
let contador = 0;
let bandera = false;
let palabraG = document.getElementById("palabraGanada");
console.log(palabra);

generarPalabra();

function generarPalabra() {
  for (let i = 0; i < palabra.length; i++) {
    console.log(palabra[i]);
    let parrafo = document.createElement("p");
    parrafo.setAttribute("id", "p" + i);
    lineas.appendChild(parrafo);
  }
}

function comprobarLetra() {
  bandera = false;
  if (vidas > 0) {
    let letra = document.getElementById("input__text").value.toUpperCase();
    document.getElementById("input__text").value = "";
    console.log("letra es " + letra);

    for (let i = 0; i < palabra.length; i++) {
      if (letra == palabra[i]) {
        bandera = true;
        if (letra == document.getElementById("p" + i).innerHTML) {
          palabraG.innerHTML = "La letra que introdujiste ya está";
        } else {
          palabraG.innerHTML = "";
          console.log("NO Repetida");
          document.getElementById("p" + i).innerHTML = letra;
          contador++;
        }

        if (contador == palabra.length) {
          palabraG.innerHTML = "GANASTE, la palabra es " + palabra;

          contador = 0;
        }
      }
    }

    if (!bandera) {
      console.log("No está");
      vidas--;
      console.log(vidas);
      document.getElementById("img" + vidas).style.display = "flex";
      document.getElementById("img" + (vidas + 1)).style.display = "none";
      mostrarVidas.innerHTML = "Cantidad de vidas: " + vidas;
    }
  }
  if (vidas == 0) {
    palabraG.innerHTML = "PERDISTE, la palabra correcta es " + palabra;
  }
}

function resetear() {
  location.reload();
}
