const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function encriptar(stringEncriptada){
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } 
    return stringDesencriptada;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.background = "none";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensaje.value); // Corregido: mensaje.value en lugar de textArea.value
    textArea.value = textoDesencriptado;
    mensaje.value = "";
}

function copiarMensaje() {
    mensaje.select();
    document.execCommand("copy");
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiarMensaje);
