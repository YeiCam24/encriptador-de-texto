


function encriptar(){
        let entradaTexto = document.getElementById('entradaTexto').value;
       
        let salidaEncriptada =  entradaTexto.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g, 'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
        
        if (salidaEncriptada.length !=0) {
            document.getElementById('entradaTexto').value = salidaEncriptada;
            document.getElementById('img-respuesta').src = './img/img-block.png';
            cambiarElementos('#titulo-respuesta','Elemento encriptado con exito');
            cambiarElementos('#parrafo-respuesta', '');

        }else{
            alert('No se encontro ningun mensaje');
        }
        
        //return console.log(salidaEncriptada);
    
}
function desencriptar(){
    let entradaTextoEncriptado = document.getElementById('entradaTexto').value;

    let salidaDesencriptada = entradaTextoEncriptado.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    if (entradaTextoEncriptado.length !=0) {
        document.getElementById('entradaTexto').value = salidaDesencriptada;
    }else{
        alert('No se encontro ningun mensaje');
    }



}







function cambiarElementos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}