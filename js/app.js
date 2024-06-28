
let imagenRespuesta = document.getElementById('img-respuesta');
let tituloRespuesta = document.getElementById('titulo-respuesta');
let parrafoRespuesta = document.getElementById('parrafo-respuesta')
// FUNCION PARA ENCRIPTAR 
function encriptar(){
   
    let entradaTexto = document.getElementById('entradaTexto').value;
    
    let salidaEncriptada =  entradaTexto.replace(/e/img,'enter').replace(/i/img,'imes').replace(/a/img, 'ai').replace(/o/img,'ober').replace(/u/img,'ufat');
    
    if (entradaTexto.length !=0) {
        document.getElementById('entradaTexto').value = '';
        
        
        cambiarElementos('#respuesta', salidaEncriptada);
        // ELEMENTOS QUE APRECEN Y DESAPARECEN 
        imagenRespuesta.remove();
        tituloRespuesta.remove();
        parrafoRespuesta.remove();
        
        document.getElementById('btn-copiar').classList.remove('copiar');

    }else{
        alert('No se encontro ningun mensaje');
    }
}

// FUNCION PARA DESENCRIPTAR 
function desencriptar(){
    let entradaTextoEncriptado = document.getElementById('entradaTexto').value.toLowerCase();

    let salidaDesencriptada = entradaTextoEncriptado.replace(/enter/img,'e').replace(/imes/img,'i').replace(/ai/img,'a').replace(/ober/img,'o').replace(/ufat/img,'u');
    if (entradaTextoEncriptado.length !=0) {
        
        
        cambiarElementos('#respuesta', salidaDesencriptada);
        
        imagenRespuesta.remove();
        tituloRespuesta.remove();
        parrafoRespuesta.remove();

        document.getElementById('btn-copiar').classList.remove('copiar');
        document.getElementById('entradaTexto').value = '';
        
    }else{
        alert('No se encontro ningun mensaje');
    }
    
}

// FUNCION PARA COPEAR EL TEXTO 
function copiar(){
    let btnCopiar = document.getElementById('btn-copiar');
    let texto = document.querySelector('#respuesta');
    navigator.clipboard.writeText(texto.textContent);
    btnCopiar.textContent = 'Copeado';
}


function cambiarElementos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}