// Función para añadir valores a la pantalla de la calculadora
function appendToDisplay(value) {
    // Obtenemos el elemento de la pantalla
    const display = document.getElementById('display');
    // Añadimos el valor al contenido actual de la pantalla
    display.value += value;
}

// Función para limpiar la pantalla de la calculadora
function clearDisplay() {
    // Obtenemos el elemento de la pantalla
    const display = document.getElementById('display');
    // Establecemos el valor de la pantalla a una cadena vacía
    display.value = '';
}

// Función para borrar el último carácter de la pantalla
function backspace() {
    // Obtenemos el elemento de la pantalla
    const display = document.getElementById('display');
    // Removemos el último carácter de la cadena
    display.value = display.value.slice(0, -1);
}

// Función para calcular el resultado de la expresión en la pantalla
function calculate() {
    // Obtenemos el elemento de la pantalla
    const display = document.getElementById('display');
    try {
        // Evaluamos la expresión en la pantalla
        display.value = eval(display.value);
    } catch (error) {
        // Si hay un error (p. ej., una expresión inválida), mostramos un mensaje de error
        display.value = 'Error';
    }
}

// Función para manejar los eventos de los botones
function handleButtonClick(event) {
    const value = event.target.dataset.value;
    if (value !== undefined) {
        appendToDisplay(value);
    } else if (event.target.id === 'clear') {
        clearDisplay();
    } else if (event.target.id === 'backspace') {
        backspace();
    } else if (event.target.id === 'equals') {
        calculate();
    }
}

// Añadimos el event listener a los botones después de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
});
