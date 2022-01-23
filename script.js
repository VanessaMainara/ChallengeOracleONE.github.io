
/*********  tratamento de Criptografia **********/
function criptografaTexto() {

    let textoCapturado = document.querySelector('input').value;
    //console.log(textoCapturado);
    //console.log(textoCapturado.split(''));
    let arrayTexto = textoCapturado.split('');
    let textoCriptografado;

    for (var i = 0; i < arrayTexto.length; i++) {

        if (arrayTexto[i] == 'a') {
            arrayTexto[i] = 'ai'
        }
        if (arrayTexto[i] == 'e') {
            arrayTexto[i] = 'enter'
        }
        if (arrayTexto[i] == 'i') {
            arrayTexto[i] = 'imes'
        }
        if (arrayTexto[i] == 'o') {
            arrayTexto[i] = 'ober'
        }
        if (arrayTexto[i] == 'u') {
            arrayTexto[i] = 'ufat'
        }
    }

    textoCriptografado = arrayTexto.join('');
    //console.log(textoCriptografado);

    let exibeCripto = document.getElementById('msg');
    //console.log(exibeCripto)
    exibeCripto.value = textoCriptografado;
}

/* evento de click do botão criptografar */
var btnCripto = document.querySelector('button');

btnCripto.addEventListener('click', function (e) {
    e.preventDefault();

    criptografaTexto();
})

/******** Tratamendo de Descriptografia *********/
function converteTexto(textoCapturado){
    
    return textoCapturado.replaceAll('ai','a').replaceAll('enter','e').replaceAll('ims','i').replaceAll('ober','o').replaceAll('ufat','u');
/*
   return textoCapturado.replace(/ai/g,'a').replace(/enter/g,'e').replace(/ims/g,'i').replace(/ober/g,'o').replace(/ufat/g,'u');*/  
    
}

/* evento de click do botão descriptografar */
var btnDescripografar = document.getElementById('btn-descripto');

btnDescripografar.addEventListener('click', function(e){
    e.preventDefault();

    let textoCapturado = document.getElementById('input-texto').value;
    
    let exibeDesCripto = document.getElementById('msg');
    //console.log(exibeDesCripto)
    exibeDesCripto.value = converteTexto(textoCapturado);
})

/*****  função copiar ******/
var btnCopy = document.getElementById('copiar');

btnCopy.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('msg').select();
    document.execCommand('copy');
})