let rockBttn = document.querySelector("#rock")
let paperBttn = document.querySelector("#paper")
let scssrBttn = document.querySelector("#scissors")
let rsltOutput = document.querySelector('.result')
let restartDiv = document.querySelector("#restartBttnDiv")

let winCountP = document.createElement('p')

function randomIntFromInterval(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
let userOption = ''
let computerOption = ''
let winCount = 0
let restartButtonAppended = false

function checkScore() {
    if (winCount == 5 && restartButtonAppended == false) {
        let restartBttn = document.createElement('button')
        restartBttn.setAttribute('id', 'restart')
        restartBttn.innerHTML = 'Restart Game'
        restartDiv.appendChild(restartBttn)
        
        restartBttn.addEventListener('click', () => {
            winCount = 0;
            userOption = ''
            computerOption = ''
            winCountP.textContent = ''
            rsltOutput.textContent = ''
            restartBttn.remove()
        })
        restartButtonAppended = true
    }}

rockBttn.addEventListener('click', () => {
    userOption = 'rock'
      const rndInt = randomIntFromInterval(1, 3)
      if (rndInt == 1) {
        computerOption = 'rock'
      } else if (rndInt == 2) {
        computerOption = 'paper'
      } else computerOption = 'scissors'
      if (userOption && computerOption == 'paper') {
        rsltOutput.textContent = `You lost, you chose ${userOption} and the machine chose ${computerOption}!`
    } else if (userOption && computerOption == 'scissors') {
        rsltOutput.textContent = `You won, you chose ${userOption} and the machine chose ${computerOption}!`
        winCount += 1;
} else rsltOutput.textContent = `It's a draw, you chose ${userOption} and the machine chose ${computerOption}!`
        winCountP.textContent = `You won a total of ${winCount} times`
        restartDiv.appendChild(winCountP)
        checkScore();
})

paperBttn.addEventListener('click', () => {
    userOption = 'paper'
      const rndInt = randomIntFromInterval(1, 3)
      if (rndInt == 1) {
        computerOption = 'rock'
      } else if (rndInt == 2) {
        computerOption = 'paper'
      } else computerOption = 'scissors'
      if (userOption && computerOption == 'scissors') {
        rsltOutput.textContent = `You lost, you chose ${userOption} and the machine chose ${computerOption}!`
    } else if (userOption && computerOption == 'rock') {
        rsltOutput.textContent = `You won, you chose ${userOption} and the machine chose ${computerOption}!`
        winCount += 1;
} else rsltOutput.textContent = `It's a draw, you chose ${userOption} and the machine chose ${computerOption}!`
        winCountP.textContent = `You won a total of ${winCount} times`
        restartDiv.appendChild(winCountP)
        checkScore();
})

scssrBttn.addEventListener('click', () => {
    userOption = 'scissors'
      const rndInt = randomIntFromInterval(1, 3)
      if (rndInt == 1) {
        computerOption = 'rock'
      } else if (rndInt == 2) {
        computerOption = 'paper'
     } else computerOption = 'scissors'
     if (userOption && computerOption == 'rock') {
        rsltOutput.textContent = `You lost, you chose ${userOption} and the machine chose ${computerOption}!`
    } else if (userOption && computerOption == 'paper') {
        rsltOutput.textContent = `You won, you chose ${userOption} and the machine chose ${computerOption}!`
        winCount += 1;
} else rsltOutput.textContent = `It's a draw, you chose ${userOption} and the machine chose ${computerOption}!`
        winCountP.textContent = `You won a total of ${winCount} times`
        restartDiv.appendChild(winCountP)
        checkScore();
    })


