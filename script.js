// Inicializa o display com 0
document.getElementById("display").value = "0";

// Função para adicionar caracteres ao display
function appendCharacter(caracter) {
    let display = document.getElementById('display');
    if (display.value === "0") {
        display.value = caracter;
    } else {
        display.value += caracter;
    }
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Função para apagar o último caractere
function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length - 1);
}

// Função para calcular o resultado
function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch {
        document.getElementById('display').value = 'Erro';
    }
}