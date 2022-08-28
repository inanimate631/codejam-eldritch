const deck = document.querySelector('.createDeck');
const showCard = document.querySelector('.deck')
import blueCards from '../assets/MythicCards/blue/index.js';
import brownCards from '../assets/MythicCards/brown/index.js';
import greenCard from '../assets/MythicCards/green/index.js';
const blueHard = [1, 2, 6, 8,]
const blueSnow = [3, 4, 5, 10]
const greenHard = [2, 3, 4, 5, 6]
const greenSnow = [1, 12, 16, 17, 18]
const brownSnow = [11, 12, 13, 14, 21]
const brownHard = [6, 7, 8, 9, 10]
const blueDefault = [7, 9, 11, 12]
const brownDefault = [1, 2, 3, 4, 5, 15, 16, 17, 18, 19, 20]
const greenDefault = [7, 8, 9, 10, 11, 13, 14, 15]
const mas = [0,]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createKit(color) {
    const difficulty = document.querySelector('.activedifficulty');
    let kit
    if (difficulty.textContent === 'Очень легкий') {
        if (color === 'green') {
            if (greenSnow.length >= 1) {
                let num = getRandomInt(greenSnow.length)
                kit = (greenSnow[num])
                greenSnow.splice(num, 1)
            } else {
                let num = getRandomInt(greenDefault.length)
                kit = (greenDefault[num])
                greenDefault.splice(num, 1)
            }
        } else if (color === 'brown') {
            if (brownSnow.length >= 1) {
                let num = getRandomInt(brownSnow.length)
                kit = (brownSnow[num])
                brownSnow.splice(num, 1)
            } else {
                let num = getRandomInt(brownDefault.length)
                kit = (brownDefault[num])
                blueDefault.splice(num, 1)
            }
        } else if (color === 'blue') {
            if (blueSnow.length >= 1) {
                let num = getRandomInt(blueSnow.length)
                kit = (blueSnow[num])
                blueSnow.splice(num, 1)
            } else {
                let num = getRandomInt(blueDefault.length)
                kit = (blueDefault[num])
                brownDefault.splice(num, 1)
            }
        }
    } else if (difficulty.textContent === 'Легкий') {
        if (color === 'green') {
            let num
            do {
                num = getRandomInt(Object.keys(greenCard).length + 1)
            } while (greenHard.includes(num) || mas.includes(num))
            kit = num
            greenHard.push(num)
        } else if (color === 'brown') {
            let num
            do {
                num = getRandomInt(Object.keys(brownCards).length + 1)
            } while (brownHard.includes(num) || mas.includes(num))
            kit = num
            brownHard.push(num)
        } else if (color === 'blue') {
            let num
            do {
                num = getRandomInt(Object.keys(blueCards).length + 1)
            } while (blueHard.includes(num) || mas.includes(num))
            kit = num
            blueHard.push(num)
        }
    } else if (difficulty.textContent === 'Средний') {
        if (color === 'green') {
            let num
            do {
                num = getRandomInt(Object.keys(greenCard).length + 1)
            } while (mas.includes(num))
            kit = num
            mas.push(num)
        } else if (color === 'brown') {
            let num
            do {
                num = getRandomInt(Object.keys(brownCards).length + 1)
            } while (mas.includes(num))
            kit = num
            mas.push(num)
        } else if (color === 'blue') {
            let num
            do {
                num = getRandomInt(Object.keys(blueCards).length + 1)
            } while (mas.includes(num))
            kit = num
            mas.push(num)
        }
    } else if (difficulty.textContent === 'Высокий') {
        if (color === 'green') {
            let num
            do {
                num = getRandomInt(Object.keys(greenCard).length + 1)
            } while (greenSnow.includes(num) || mas.includes(num))
            kit = num
            greenSnow.push(num)
        } else if (color === 'brown') {
            let num
            do {
                num = getRandomInt(Object.keys(brownCards).length + 1)
            } while (brownSnow.includes(num) || mas.includes(num))
            kit = num
            brownSnow.push(num)
        } else if (color === 'blue') {
            let num
            do {
                num = getRandomInt(Object.keys(blueCards).length + 1)
            } while (blueSnow.includes(num) || mas.includes(num))
            kit = num
            blueSnow.push(num)
        }
    } else if (difficulty.textContent === 'Очень высокий') {
        if (color === 'green') {
            if (greenHard.length >= 1) {
                let num = getRandomInt(greenHard.length)
                kit = (greenHard[num])
                greenHard.splice(num, 1)
            } else {
                let num = getRandomInt(greenDefault.length)
                kit = (greenDefault[num])
                greenDefault.splice(num, 1)
            }
        } else if (color === 'brown') {
            if (brownHard.length >= 1) {
                let num = getRandomInt(brownHard.length)
                kit = (brownHard[num])
                brownHard.splice(num, 1)
            } else {
                let num = getRandomInt(brownDefault.length)
                kit = (brownDefault[num])
                brownDefault.splice(num, 1)
            }
        } else if (color === 'blue') {
            if (blueHard.length >= 1) {
                let num = getRandomInt(blueHard.length)
                kit = (blueHard[num])
                blueHard.splice(num, 1)
            } else {
                let num = getRandomInt(blueDefault.length)
                kit = (blueDefault[num])
                blueDefault.splice(num, 1)
            }
        }
    }
    return kit
}

function createDeck(objMass) {
    const deck = {}
    const first = []
    const second = []
    const santo = []
    for (let i = 0; i < objMass.first.length; i++) {
        for (let a = 0; a < objMass.first[i]; a++) {
            if (i === 0) {
                first.push(createKit('green'))
            } else if (i === 1) {
                first.push(createKit('brown'))
            } else if (i === 2) {
                first.push(createKit('blue'))
            }
        }
    }
    for (let i = 0; i < objMass.second.length; i++) {
        for (let a = 0; a < objMass.second[i]; a++) {
            if (i === 0) {
                second.push(createKit('green'))
            } else if (i === 1) {
                second.push(createKit('brown'))
            } else if (i === 2) {
                second.push(createKit('blue'))
            }
        }
    }
    for (let i = 0; i < objMass.three.length; i++) {
        for (let a = 0; a < objMass.three[i]; a++) {
            if (i === 0) {
                santo.push(createKit('green'))
            } else if (i === 1) {
                santo.push(createKit('brown'))
            } else if (i === 2) {
                santo.push(createKit('blue'))
            }
        }
    }
    deck['first'] = first
    deck['second'] = second
    deck['santo'] = santo
    return deck
}

function sortDeck(massCard, dots) {
    const green = []
    const brown = []
    const blue = []
    const sortMas = []
    for (let i = 0; i < 9; i++) {
        for (let a = 0; a < dots[i].textContent; a++) {
            if (i === 0) {
                green.push(...massCard.first.splice(0, 1))
            } else if (i === 1) {
                brown.push(...massCard.first.splice(0, 1))
            } else if (i === 2) {
                blue.push(...massCard.first.splice(0, 1))
            } else if (i === 3) {
                green.push(...massCard.second.splice(0, 1))
            } else if (i === 4) {
                brown.push(...massCard.second.splice(0, 1))
            } else if (i === 5) {
                blue.push(...massCard.second.splice(0, 1))
            } else if (i === 6) {
                green.push(...massCard.santo.splice(0, 1))
            } else if (i === 7) {
                brown.push(...massCard.santo.splice(0, 1))
            } else if (i === 8) {
                blue.push(...massCard.santo.splice(0, 1))
            }
        }
    }
    sortMas.push(green)
    sortMas.push(brown)
    sortMas.push(blue)
    return sortMas
}

function showCards(color, sortMas) {
    const place = document.querySelector('.last-card')
    console.log(sortMas)
    const blue = `blue${sortMas[2][0]}`
    const green = `green${sortMas[0][0]}`
    const brown = `brown${sortMas[1][0]}`
    if (color === 'green') {
        place.style.backgroundImage = `url(${greenCard[green]})`
        sortMas[0].splice(0, 1)
    } else if (color === 'brown') {
        place.style.backgroundImage = `url(${brownCards[brown]})`
        sortMas[1].splice(0, 1)
    } else if (color === 'blue') {
        place.style.backgroundImage = `url(${blueCards[blue]})`
        sortMas[2].splice(0, 1)
    }
}

function startGame() {
    deck.style.display = 'none';
    showCard.style.display = 'block';
    const dots = document.querySelectorAll('.dot')
    const objMass = {}
    const first = []
    const second = []
    const three = []
    for (let index = 0; index < dots.length; index++) {
        if (index < 3) {
            first.push(+dots[index].textContent)
        } else if (index >= 3 && index < 6) {
            second.push(+dots[index].textContent)
        } else {
            three.push(+dots[index].textContent)
        }
    }
    objMass['first'] = first
    objMass['second'] = second
    objMass['three'] = three
    const setDeck = createDeck(objMass)
    const sortMas = sortDeck(setDeck, dots)
    showCard.addEventListener('click', () => {
        if (objMass.first[0] !== 0 || objMass.first[1] !== 0 || objMass.first[2] !== 0) {
            let num
            let amount = 0
            const check = []
            for (let i = 0; i < objMass.first.length; i++) {
                if (objMass.first[i] !== 0) {
                    amount++
                } else {
                    check.push(i)
                }
            }
            if (amount > 1) {
                do {
                    num = getRandomInt(amount + 1)
                } while (check.includes(num))
            } else if (amount === 1) {
                do {
                    num = getRandomInt(3)
                } while (check.includes(num))
            }
            if (objMass.first[num] !== 0) {
                if (num === 0) {
                    showCards('green', sortMas)
                } else if (num === 1) {
                    showCards('brown', sortMas)
                } else if (num === 2) {
                    showCards('blue', sortMas)
                }
                objMass.first[num]--
            }
        } else {
            if (objMass.second[0] !== 0 || objMass.second[1] !== 0 || objMass.second[2] !== 0) {
                let num
                let amount = 0
                const check = []
                for (let i = 0; i < objMass.second.length; i++) {
                    if (objMass.second[i] !== 0) {
                        amount++
                    } else {
                        check.push(i)
                    }
                }
                if (amount > 1) {
                    do {
                        num = getRandomInt(amount + 1)
                    } while (check.includes(num))
                } else if (amount === 1) {
                    do {
                        num = getRandomInt(3)
                    } while (check.includes(num))
                }
                if (objMass.second[num] !== 0) {
                    if (num === 0) {
                        showCards('green', sortMas)
                    } else if (num === 1) {
                        showCards('brown', sortMas)
                    } else if (num === 2) {
                        showCards('blue', sortMas)
                    }
                    objMass.second[num]--
                }
            }else if(objMass.three[0] !== 0 || objMass.three[1] !== 0 || objMass.three[2] !== 0){
                let num
                let amount = 0
                const check = []
                for (let i = 0; i < objMass.three.length; i++) {
                    if (objMass.three[i] !== 0) {
                        amount++
                    } else {
                        check.push(i)
                    }
                }
                if (amount > 1) {
                    do {
                        num = getRandomInt(amount + 1)
                    } while (check.includes(num))
                } else if (amount === 1) {
                    do {
                        num = getRandomInt(3)
                    } while (check.includes(num))
                }
                if (objMass.three[num] !== 0) {
                    if (num === 0) {
                        showCards('green', sortMas)
                    } else if (num === 1) {
                        showCards('brown', sortMas)
                    } else if (num === 2) {
                        showCards('blue', sortMas)
                    }
                    objMass.three[num]--
                }
            }
        }
        dots.forEach((dot, index) => {
            if (index < 3) {
                dots[index].textContent = objMass.first[index]
            }else if(index >= 3 && index < 6){
                dots[index].textContent = objMass.second[index - 3]
            }else if(index >= 6 && index < 9){
                dots[index].textContent = objMass.three[index - 6]
            }
        })
        console.log(sortMas)
        console.log(objMass)
    })
}

deck.addEventListener('click', startGame)