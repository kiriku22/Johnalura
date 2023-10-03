function encriptar (){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi, "biggi").replace(/i/gi, "2pac").replace(/a/gi, "can").replace(/o/gi, "emine").replace(/u/gi, "dmx");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
  
    
    }

const texto2 = document.getElementById("input-texto");
const difuminado = document.getElementsByClassName("mensaje");
texto2.addEventListener("input", function () {
    // Verifica si el campo de entrada tiene texto
    if (texto2.value.trim() !== "") {
        // Si tiene texto, oculta todos los elementos con clase "mensaje"
        for (let i = 0; i < difuminado.length; i++) {
            difuminado[i].style.display = "none";
        }
    } else {
        // Si no tiene texto, muestra todos los elementos con clase "mensaje"
        for (let i = 0; i < difuminado.length; i++) {
            difuminado[i].style.display = "block";
        }
    }
} );
var boton1 = document.querySelector("#btn-encriptar");
 boton1.onclick = encriptar;
 

function desencriptar (){ var texto = document.querySelector("#input-texto").value; 
var textoCifrado = texto.replace(/biggi/gi, "e").replace(/2pac/gi, "i").replace(/can/gi, "a").replace(/emine/gi, "o").replace(/dmx/gi, "u");
 document.querySelector(".text-input-salida").value = textoCifrado;
 document.querySelector("#input-texto").value;

}

var boton2 = document.querySelector("#btn-desencriptar");
 boton2.onclick = desencriptar;
