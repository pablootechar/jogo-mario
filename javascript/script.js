const mario = document.querySelector('.mario');
const canoVerde = document.querySelector('.cano-verde');
const nuvem1 = document.querySelector('.nuvem1');
const nuvem2 = document.querySelector('.nuvem2');
const divStart = document.querySelector('.start');
const divGameOver = document.querySelector('.game-over');
const grama1 = document.querySelector('.grama1');
const grama2 = document.querySelector('.grama2');
const grama3 = document.querySelector('.grama3');

const jump = () => {
    mario.classList.add('jump');
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 450); 
}
const canoVerdeAnimate = () => {
    canoVerde.classList.add('canoVerdeAnimate');
}
const nuvemAnimada = () => {
    nuvem1.classList.add('nuvemAnimada');
    nuvem2.classList.add('nuvemAnimada');
}
const loop = setInterval(() => {
    const canoVerdePosition = canoVerde.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (canoVerdePosition <= 120 && canoVerdePosition > 0 && marioPosition < 80) {
// Para a animação do cano verde verde
        canoVerde.style.animation = 'none';
        canoVerde.style.left = `${canoVerdePosition}px`;
        
        canoVerde.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '65px';       
        mario.style.marginLeft = '50px';  
        divGameOver.classList.add('addDiv'); 
        mario.classList.remove('jump');     
    }
}, 10)
const removeDiv = () =>{
    divStart.classList.add('removeDiv');
}
document.addEventListener('keydown', jump); 
document.addEventListener('keydown', nuvemAnimada); 
document.addEventListener('keydown', canoVerdeAnimate); 
document.addEventListener('keydown', removeDiv);