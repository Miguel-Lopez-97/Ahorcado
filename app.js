'use strict'

let aux = [];
let vidas = 6;
let palabras = ["ELEFANTE", "PANTERA", "CARDIOLOGO","PROGRAMACION","ASESINO"];
let palabra = palabras[Math.floor(Math.random() * palabras.length)];
let lineas = document.getElementsByClassName("word")[0];
let contador = 0;
let palabraG = document.getElementById("palabraGanada");
console.log(palabra);

generarPalabra();

function generarPalabra() {
    for (let i = 0; i < palabra.length; i++){
        console.log(palabra[i]);        
        let parrafo = document.createElement('p');
        parrafo.setAttribute('id', 'p' + i);
        lineas.appendChild(parrafo);
    }
}



function comprobarLetra() {
    

    
    aux.length = 0;
    if (vidas > 1) {
        let letra = document.getElementById("input__text").value.toUpperCase();
        document.getElementById("input__text").value = "";
    console.log("letra es " + letra);
    
    for (let i = 0; i < palabra.length; i++){
        if (letra == palabra[i]) {
            aux[i] = palabra[i];
            document.getElementById('p' + i).innerHTML = letra;
            console.log("Si está "+contador);
            contador++;   
            
            if (contador == palabra.length) { 
                
                palabraG.innerHTML = "GANASTE, la palabra es "+palabra;
                
                contador = 0;
            }
            
        } 
        
        }
        if (aux.length == 0) {
            console.log("No está"); 
            vidas--;
        }
        
       
 

    } else if(vidas==1){
        palabraG.innerHTML = "PERDISTE, la palabra correcta es "+palabra;
    }
}

function resetear() {
    
    location.reload();


}

