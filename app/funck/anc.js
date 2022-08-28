import ancients from '../assets/Ancients/index.js';
const ancient = document.querySelector('.ancients-container')
const size = Object.keys(ancients).length;
const keyy = []
for (let key in ancients){
    keyy.push(key)
}

for(let i = 0; i < size; i++){
    newElement(i)
} 

function newElement(i) {
    const div = document.createElement('div');
    div.classList.add('ancient-card')
    div.style.backgroundImage = `url(${ancients[keyy[i]]})`
    ancient.prepend(div)
}