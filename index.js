const homeScoreTally = document.getElementById('home-score-tally')
const guestScoreTally = document.getElementById('guest-score-tally')

let homeCurrentScore = 0
let guestCurrentScore = 0

function winnerHighlight() {
    if(homeCurrentScore > guestCurrentScore) {
    homeScoreTally.classList.add('winning')
    guestScoreTally.classList.remove('winning')
    } else if(homeCurrentScore === guestCurrentScore){
        guestScoreTally.classList.remove('winning')
        homeScoreTally.classList.remove('winning')
    } else {
        guestScoreTally.classList.add('winning')
        homeScoreTally.classList.remove('winning')
    }
}

function updateScore() {
    homeScoreTally.innerText = homeCurrentScore
    guestScoreTally.innerText = guestCurrentScore
}

document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', () => {
        if(item.classList.contains('home')) {
            item.textContent === '+1' ? 
            homeCurrentScore++ : 
            item.textContent === '+2' ? 
            homeCurrentScore += 2 : 
            homeCurrentScore += 3     
        } else {
            if(item.classList.contains('guest')) {
                item.textContent === '+1' ? 
                guestCurrentScore++ : 
                item.textContent === '+2' ? 
                guestCurrentScore += 2 : 
                guestCurrentScore += 3
            }
        }
        updateScore()
        winnerHighlight()
    })
})

document.getElementById('reset-btn').addEventListener('click', () => {
    homeCurrentScore = 0
    guestCurrentScore = 0
    homeScoreTally.innerText = homeCurrentScore
    guestScoreTally.innerText = guestCurrentScore
    guestScoreTally.classList.remove('winning')
    homeScoreTally.classList.remove('winning')
})