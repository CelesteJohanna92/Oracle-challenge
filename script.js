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
      .replaceAll("enter", "e")
      .replaceAll("imes", "i")
      .replaceAll("ai", "a")
      .replaceAll("ober", "o")
      .replaceAll("ufat", "u");
    return textoDesencriptado;
  }
  function mostrarTextoDesencriptado(textoDesencriptado) {
    var contenedorSubtitulo = document.querySelector(".contenedor-subtitulo");
    var contenedorParrafo = document.querySelector(".contenedor-parrafo");
    var parrafo = contenedorParrafo.querySelector("p");
  
    contenedorSubtitulo.style.display = "none";
    parrafo.textContent = textoDesencriptado;
    contenedorParrafo.style.display = "block";
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
  
  function copiarTexto() {
    var parrafo = document.querySelector(".contenedor-parrafo p");
    var texto = parrafo.textContent;
  
    navigator.clipboard.writeText(texto)
      .then(function() {
        console.log("Texto copiado al portapapeles: " + texto);
      })
      .catch(function(error) {
        console.error("Error al copiar el texto: ", error);
      });
  }
  
  