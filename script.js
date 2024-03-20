
//const inputText = document.querySelector("#inputText");
//const textoOriginal = inputText.value;

//const inputText = document.getElementById('inputText').value;

//const outputText = document.querySelector("#outputText");
//const textoEncriptado = outputText.value;

//const outputText = document.getElementById('outputText').value;


// Definir la matriz de encriptación
const encriptacion = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
    
];

// Definir la función de encriptación
function encriptar(inputText) {
    let resultado = inputText;
    
    for (let i = 0; i < encriptacion.length; i++) {
        //resultado = inputText.split(encriptacion[i][0]).join(encriptacion[i][1]);
        resultado = resultado.replaceAll(
            encriptacion[i][0],
            encriptacion[i][1]
        );
    }
    return resultado;    
}

// Definir la función de desencriptación
function desencriptar(inputText) {
    let resultado = inputText;

    for (let i = encriptacion.length - 1; i >= 0; i--) {
        //resultado = resultado.split(encriptacion[i][1]).join(encriptacion[i][0]);
        resultado =  resultado.replaceAll(
            encriptacion[i][1],
            encriptacion[i][0]
        );
    }
    return resultado;
}

// Definir la función para copiar el texto al portapapeles
function copiar() {
    const outputText = document.getElementById('outputText').textContent;

    navigator.clipboard.writeText(outputText)
    .then(() => alert('Texto copiado: ' + outputText))
    .catch(err => console.error('Error al copiar: ', err));
}


// Asignar las funciones a los botones correspondientes

//Botón Encriptar
document.getElementById('btnEncriptar').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    let texto = inputText.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f]/g, "");

    if(inputText == "") {
        document.querySelector('.alert-text').style.background = "#495057";
        document.querySelector('.alert-text').style.color = "#ecf0f1";
        document.querySelector('.alert-text').style.fontWeight = "800";
        document.querySelector('.alert-text').style.textContent = "El campo de texto NO debe estar vacío";
        alert("El campo de texto NO debe estar vacío");
        setTimeout(()=>{
            document.querySelector('.alert-text').removeAttribute("style");                      
        },1500);
    } 
    
    else if(inputText !== texto) {
        document.querySelector('.alert-text').style.background = "#495057";
        document.querySelector('.alert-text').style.color = "#ecf0f1";
        document.querySelector('.alert-text').style.fontWeight = "800";
        document.querySelector('.alert-text').style.textContent = "El texto NO debe tener acentos ni caracteres especiales";
        alert("El texto NO debe tener acentos ni caracteres especiales");
        setTimeout(()=>{
            document.querySelector('.alert-text').removeAttribute("style");            
        },1500);
    } 
    
    else if(inputText !== inputText.toLowerCase()) {
        document.querySelector('.alert-text').style.background = "#495057";
        document.querySelector('.alert-text').style.color = "#ecf0f1";
        document.querySelector('.alert-text').style.fontWeight = "800";
        document.querySelector('.alert-text').style.textContent = "El texto debe estar todo en minúsculas";
        alert("El texto debe estar todo en minúsculas");
        setTimeout(()=>{
            document.querySelector('.alert-text').removeAttribute("style");           
        },1500);
    }

    else {
        const resultado = encriptar(inputText);
        document.getElementById('outputText').textContent = resultado;
        document.getElementById('outputText').style.backgroundImage = "none";
        //document.getElementById("img-munieco").style.display="none";
        document.getElementById("text-p1").style.display="none";
        document.getElementById("text-p2").style.display="none";   
        //document.getElementById('btnCopiar').style.display="show";
        //document.getElementById('btnCopiar').style.display="inherit";
        document.getElementById('btnCopiar').style.visibility ="visible";
        document.getElementById('inputText').value = "";
    }
    
});

//Botón Desencriptar
document.getElementById('btnDesencriptar').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    let texto = inputText.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f]/g, "");

    if(inputText == "") {
        document.querySelector('.alert-text').style.background = "#495057";
        document.querySelector('.alert-text').style.color = "#ecf0f1";
        document.querySelector('.alert-text').style.fontWeight = "800";
        document.querySelector('.alert-text').style.textContent = "El campo de texto NO debe estar vacío";

        setTimeout(()=>{
            document.querySelector('.alert-text').removeAttribute("style");
        },1500);
    } 
    
    else if(inputText !== texto) {
        document.querySelector('.alert-text').style.background = "#495057";
        document.querySelector('.alert-text').style.color = "#ecf0f1";
        document.querySelector('.alert-text').style.fontWeight = "800";
        document.querySelector('.alert-text').style.textContent = "El texto NO debe tener acentos ni caracteres especiales";

        setTimeout(()=>{
            document.querySelector('.alert-text').removeAttribute("style");
        },1500);
    } 
    
    else if(inputText !== inputText.toLowerCase()) {
        document.querySelector('.alert-text').style.background = "#495057";
        document.querySelector('.alert-text').style.color = "#ecf0f1";
        document.querySelector('.alert-text').style.fontWeight = "800";
        document.querySelector('.alert-text').style.textContent = "El texto debe estar todo en minúsculas";

        setTimeout(()=>{
            document.querySelector('.alert-text').removeAttribute("style");
        },1500);
    }

    else {
        const resultado = desencriptar(inputText);
        document.getElementById('outputText').textContent = resultado;
        document.getElementById('outputText').style.backgroundImage = "none";
        //document.getElementById("img-munieco").style.display="none";
        document.getElementById("text-h5").style.display="none";
        document.getElementById("text-p").style.display="none";
        //document.getElementById('btnCopiar').style.display="show";
        //document.getElementById('btnCopiar').style.display="inherit";
        document.getElementById('btnCopiar').style.visibility ="visible";
        document.getElementById('inputText').value = "";
    }
    
});

//Botón Copiar
document.getElementById('btnCopiar').addEventListener('click', copiar());



//////////////////////////////////////////////////////////////////////////////


/* 
const inputText = document.querySelector("#inputTexto");
const outputText = document.querySelector("#outputText");

const matrixCode = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function btnEncriptar() {
    const texto = inputText.value;
    //console.log(texto);
    document.getElementById('btnEncriptar').addEventListener('click', () => {
    const textoEncriptado = encriptar(texto);
    document.getElementById('outputText').textContent = textoEncriptado;
    });
}

function encriptar(texto) {
    for (let i = 0; i < matrixCode.length; i++) {
        //console.log(matrixCode[i][0]);
        textoEncriptado = texto.replaceAll(
            matrixCode[i][0],
            matrixCode[i][1]
        )
    }
    return textoEncriptado;
} 

function btnDesencriptar() {
    const texto = inputText.value;
    //console.log(texto);
    document.getElementById('btnDesencriptar').addEventListener('click', () => {
    const resultado = desencriptar(texto);
    document.getElementById('outputText').textContent = resultado;
    });
}

function desencriptar(texto) {
    for (let i = 0; i < matrixCode.length; i++) {
        console.log(matrixCode[i][0]);
        resultado = texto.replaceAll(
            matrixCode[i][0],
            matrixCode[i][1]
        )
    }
    return resultado;
} 

function btnCopiar() {
    document.getElementById('btnCopiar').addEventListener('click', copiarTexto);
}

function copiarTexto() {
    //const outputText = document.getElementById('outputText').textContent;
    const texto = outputText.textContent;

    navigator.clipboard.writeText(outputText)
    .then(() => alert('Texto copiado al portapapeles: ' + outputText))
    .catch(err => console.error('Error al copiar al portapapeles:', err));
}

*/
