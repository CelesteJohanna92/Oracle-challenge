function btnEncriptar() {
    var textarea = document.querySelector(".textarea");
    var texto = textarea.value;
    var textoEncriptado = encriptarTexto(texto);
    mostrarTextoEncriptado(textoEncriptado);
    limpiarTextarea();
  }
  
  function btnDesencriptar() {
    var textarea = document.querySelector(".textarea");
    var textoEncriptado = textarea.value;
    var textoDesencriptado = desencriptarTexto(textoEncriptado);
    mostrarTextoDesencriptado(textoDesencriptado);
    limpiarTextarea();
  }
  
  function encriptarTexto(texto) {
    var textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");
    return textoEncriptado;
  }
  
  function desencriptarTexto(textoEncriptado) {
    var textoDesencriptado = textoEncriptado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return textoDesencriptado;
  }
  
  function mostrarTextoEncriptado(textoEncriptado) {
    var contenedorSubtitulo = document.querySelector(".contenedor-subtitulo");
    var contenedorParrafo = document.querySelector(".contenedor-parrafo");
    var parrafo = contenedorParrafo.querySelector("p");
  
    contenedorSubtitulo.style.display = "none";
    parrafo.textContent = textoEncriptado;
    contenedorParrafo.style.display = "block";
  }
  
  function mostrarTextoDesencriptado(textoDesencriptado) {
    var contenedorSubtitulo = document.querySelector(".contenedor-subtitulo");
    var contenedorParrafo = document.querySelector(".contenedor-parrafo");
    var parrafo = contenedorParrafo.querySelector("p");
  
    contenedorSubtitulo.style.display = "none";
    parrafo.textContent = textoDesencriptado;
    contenedorParrafo.style.display = "block";
  }
  
  function limpiarTextarea() {
    var textarea = document.querySelector(".textarea");
    textarea.value = "";
  }
  