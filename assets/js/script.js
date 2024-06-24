// Ejercicio que cambia el color de fondo de un elemento de HTML al hacerle click:

const ele = document.getElementById('ele1')

function pintar(color='green') {
    ele.style.backgroundColor = color
}

ele.addEventListener('click', ()=>{
    pintar('yellow')
});