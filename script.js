function encryptText() {
    let inputText = document.getElementById("input-text").value.toLowerCase();
    
    // Mapa de reemplazo
    let replacementMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
        
    };

    let encryptedText = '';
    
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        if (replacementMap[char]) {
            encryptedText += replacementMap[char];
        } else {
            encryptedText += char; // Si no está en el mapa, no se reemplaza
        }
    }

    document.getElementById("output-text").innerText = encryptedText || "Ningún mensaje fue encontrado";
    // Borrar el contenido del textarea después de encriptar
    document.getElementById("input-text").value = "";
}

function decryptText() {
    let inputText = document.getElementById("input-text").value.toLowerCase();
    
    // Mapa de reemplazo inverso
    let replacementMap = [
        { 'search': 'ufat', 'replace': 'u' },
        { 'search': 'ober', 'replace': 'o' },
        { 'search': 'ai', 'replace': 'a' },
        { 'search': 'imes', 'replace': 'i' },
        { 'search': 'enter', 'replace': 'e' }
    ];

    let decryptedText = inputText;
    
    // Reemplazar en orden inverso de longitud
    replacementMap.forEach(item => {
        decryptedText = decryptedText.split(item.search).join(item.replace);
    });

    document.getElementById("output-text").innerText = decryptedText || "Ningún mensaje fue encontrado";
    // Borrar el contenido del textarea después de desencriptar
    document.getElementById("input-text").value = "";
}

// Función para copiar el texto encriptado al portapapeles
function copyText() {
    const outputText = document.getElementById('output-text').textContent;
    if (outputText === '' || outputText === 'Ningún mensaje fue encontrado') {
        alert('No hay texto para copiar.');
        return;
    }
    navigator.clipboard.writeText(outputText)
        .then(() => {
            alert('Texto copiado al portapapeles!');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}