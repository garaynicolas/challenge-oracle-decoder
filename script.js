const inputArea = document.querySelector('#texto-ingresado');
const outputArea = document.querySelector('#texto-egresado');

//Encriptado

function btnEncriptar() {
    const textoEntrada = inputArea.value;
  // Verificar si el texto contiene letras con acentos o mayúsculas
  if (/[A-Z]/.test(textoEntrada)) {
    alert("El texto no puede contener letras mayusculas.");
    return;
  } else if (/[áéíóúüÁÉÍÓÚÜ]/.test(textoEntrada)) {
    alert("El texto no puede contener letras con acentos.");
    return;
  }

    const encriptado = encriptar(inputArea.value);
    console.log(encriptado);
    outputArea.value = encriptado;
    inputArea.value = "";
    mostrarBtnCopiar();
}

//Desencriptado

function btnDesencriptar() {
    const encriptado = desencriptar(inputArea.value);
    console.log(encriptado);
    outputArea.value = encriptado;
    inputArea.value = "";
    mostrarBtnCopiar();
}

// Boton Copiar

function mostrarBtnCopiar() { // Funcion que muestra el boton Copiar y oculta el contenido informativo
    const btnCopiar = document.getElementById('btn-copiar');
    btnCopiar.classList.add('visible');
    const info = document.getElementById('info-salida');
    info.classList.add('oculto');
    const text = document.getElementById('texto-egresado');
    text.classList.add('oculto');
    const img = document.getElementById('imagen-salida');
    img.classList.add('oculto');
  }

  function btnCopiar() {
    let textcopy = outputArea.select();
    document.execCommand('copy');
    outputArea.value = "";
  }

  // Boton Pegar

document.addEventListener('copy', function (event) {
    const textoCopiado = window.getSelection().toString().trim();
    const botonCopiado = document.getElementById('btn-pegar');
  
    if (textoCopiado) {
      botonCopiado.style.display = 'inline-block';
    } else {
      botonCopiado.style.display = 'none';
    }
  });

  function btnPegar() {
    // Obtener el contenido del portapapeles
    navigator.clipboard.readText().then(function (textoCopiado) {
      // Asignar el texto al textarea
      inputArea.value = textoCopiado;
      // Ocultar el boton
      const btnPaste = document.getElementById('btn-pegar');
      btnPaste.style.display = 'none';
  
    }).catch(function (err) {
      console.log('No se pudo leer el portapapeles, ' + err);
    });
  }


// Funciones para encriptar y desencriptar

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0;i<matrizCodigo.length;i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0;i<matrizCodigo.length;i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}
