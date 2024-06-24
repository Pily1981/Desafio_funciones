//Punto 3: Cambiar Color de cada DIV a Color Negro

const Colores= ['ColorBlue', 'ColorRed', 'ColorGreen', 'ColorYellow'];

function ColorBlack(event) {
    event.target.style.backgroundColor = 'black';
}

Colores.forEach(id => {
    const color = document.getElementById(id);
    color.addEventListener('click', ColorBlack);
});
