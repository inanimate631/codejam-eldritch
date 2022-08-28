import ancients from "../assets/Ancients"; '../assets/Ancients/index.js';
const ancCard = document.querySelectorAll('.ancient-card');

ancCard.forEach((elem) => {
    elem.addEventListener('click', () => {
        ancCard.forEach((elemm) => {
            elemm.classList.remove('active')
        })
        elem.classList.add('active')
        getNameAncients()
    })
})

function getNameAncients() {
    const activ = document.querySelector('.active')
    const a = activ.style.backgroundImage.split('"')
    const nameAncients = getKeyByValue(ancients, a[1])
    filling(nameAncients)
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key =>
        object[key] === value);
}

function filling(nameAncients) {
    const dots = document.querySelectorAll('.dot')
    if (nameAncients === 'azathoth'){
        const mass = ['1', '2', '1', '2', '3', '1', '2', '4', '0']
        for (let i = 0; i < dots.length; i++){
            dots[i].textContent = mass[i]
        }
    }else if(nameAncients === 'cthulhu'){
        const mass = ['0', '2', '2', '1', '3', '0', '3', '4', '0']
        for (let i = 0; i < dots.length; i++){
            dots[i].textContent = mass[i]
        }
    }else if(nameAncients === 'shubNiggurath'){
        const mass = ['1', '2', '1', '3', '2', '1', '2', '4', '0']
        for (let i = 0; i < dots.length; i++){
            dots[i].textContent = mass[i]
        }
    }else if(nameAncients === 'iogSothoth'){
        const mass = ['0', '2', '1', '2', '3', '1', '3', '4', '0']
        for (let i = 0; i < dots.length; i++){
            dots[i].textContent = mass[i]
        }
    }  
}



