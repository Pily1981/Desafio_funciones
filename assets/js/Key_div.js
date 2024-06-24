//Ejercicio 3.2 Creacion de Variable Global

const DivKey=document.querySelector('#key')

//Funcion para agregar nuevo Cuadro DIV 
function cuadro(color){
    const new_div =document.createElement('div');
    new_div.style.width='200px';
    new_div.style.height='200px';
    new_div.style.border='1px solid';
    new_div.style.margin='2px';
    new_div.style.backgroundColor=color
    document.body.appendChild(new_div);
}

//Condicion que se cumple al presionar teclas: a, s, d, q, e.
document.addEventListener('keydown',function(event){
    if (event.key==='a'){
        DivKey.style.backgroundColor='pink';
    }else if (event.key==='s'){
        DivKey.style.backgroundColor='orange';
    }else if (event.key==='d'){
        DivKey.style.backgroundColor='lightblue';
    }else if (event.key==='q'){
        cuadro('purple');
    }else if (event.key==='w'){
        cuadro('grey');
    }else if (event.key==='e'){
        cuadro('brown');
}})

