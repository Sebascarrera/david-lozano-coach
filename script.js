document.addEventListener("DOMContentLoaded", comenzarMoverFrase);
let frases = [];
let index = 0;


function mostrarSiguienteFrase() {
  frases[index].classList.add('hidden');
  index = (index + 1) % frases.length;  
  frases[index].classList.remove('hidden');
  frases[index].classList.add('fade');
}
function comenzarMoverFrase(){
  frases = document.querySelectorAll('.frase');
  setInterval(mostrarSiguienteFrase, 3000);
}


