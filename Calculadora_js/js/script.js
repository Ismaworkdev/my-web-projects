// Obtener elementos del DOM
const visorTop = document.getElementById('visortop');
const visorBottom = document.getElementById('visorbottom');
const buttons = document.getElementsByClassName('buttons__button');

// Agregar eventos de clic a los botones
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
      // Realizar cálculo y mostrar resultado
      const expression = visorBottom.textContent;
      const result = eval(expression);
      visorBottom.textContent = result;
    } else if (clickedButtonValue === 'AC') {
      // Limpiar los visores
      visorTop.textContent = '';
      visorBottom.textContent = '';
    } else {
      // Agregar el valor del botón al visor inferior
      visorBottom.textContent += clickedButtonValue;
    }
  });
}
