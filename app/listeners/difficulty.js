const difficulty = document.querySelectorAll('.difficulty')

difficulty.forEach((diff) => {
    diff.addEventListener('click', () => {
        difficulty.forEach((dif) => {
            dif.classList.remove('activedifficulty')
        })
        diff.classList.add('activedifficulty')
    })
})