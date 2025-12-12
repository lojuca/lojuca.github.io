document.addEventListener('DOMContentLoaded', function() {
const estrellas = 100; //cantidad de estrellas
const body = document.body;

for (let i = 0; i < estrellas; i++) {
    let estrella = document.createElement('div');
    estrella.className= 'estrella';

    //eje x e y
    let x = Math.random() * 100;
    let y = Math.random() * 100;

    // tamaño entre 1 y 3px
    let tamaño = Math.random() * 2 + 1;
    // velocidad entre 5 y 15s
    let duracion = Math.random() * 10 + 5;

    estrella.style.left = x + 'vw';
    estrella.style.top = y + 'vh';
    estrella.style.width = tamaño + 'px';
    estrella.style.height = tamaño + 'px';
    estrella.style.animationDuration = duracion + 's';

    //para que no salgan todas a la vez
    estrella.style.animationDelay = (Math.random() * 15) + 's';

    body.appendChild(estrella);

}

});