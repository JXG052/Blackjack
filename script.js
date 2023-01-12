let userCount = 0;
let compCount = 0;
let userScoreArray = []
let compScoreArray = []
let usersTurn = true;
let userWins = 0
let compWins = 0

const userWinsEl = document.querySelector("#userWins");
const compWinsEl = document.querySelector("#compWins");
const userCardsEl = document.getElementById("userCardsArray");
const compCardsEl = document.getElementById("compCardsArray");
let compScore = document.getElementById("compScore");
let userScore = document.getElementById("userScore");
let whoWinsEl = document.getElementById("whoWins");
const messageBox = document.querySelector("#messageBox");
let userCardsDealt = 0
let compCardsDealt = 0


// returns random num between 1 and 13.
// 1 counts as an ace
// 11, 12, 13 are JQK and therefore 10
function drawCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    let count = 0;
    
    switch (randomNumber){
        case 11:
            count += 10;
            break;
        case 12:
            count += 10;
            break;
        case 13:
            count += 10;
            break;
        case 1:
            count += 11;
            break;
        default: 
            count = randomNumber;
            break;
    }
    if (usersTurn){
        userCount += count;
        userCardsDealt ++
    } else {
        compCount += count;
        compCardsDealt ++
    }
    
    compScore.innerText = `Dealer Total: ${compCount}`;
    userScore.innerText = `Your Total: ${userCount}`;
    //displayMessage()
    return count;
}

function startGame() {
    userCount = 0;
    compCount = 0;
    compScoreArray = []
    userScoreArray = []
    userCardsDealt = 0
    compCardsDealt = 0
    usersTurn = true;
    userScoreArray[userCardsDealt] = drawCard();
    usersTurn = false;
    compScoreArray[compCardsDealt] = drawCard();
    usersTurn = true;
    userScoreArray[userCardsDealt] = drawCard();
    userCardsEl.innerText = userScoreArray
    usersTurn =  false;
    compScoreArray[compCardsDealt] = drawCard();
    compCardsEl.innerText = compScoreArray
    usersTurn = true;
    displayMessage()
    
}

function whoWins() {
    let winnerMessage = "Woohoo you win!";
    let loserMessage = "unlucky, you lost this time 😔 ";
    if (compCount > 21) {
    messageBox.textContent = winnerMessage + " The dealer went bust!";
    userWins ++
    userWinsEl.textContent = userWins;
    }
    else if(userCount > compCount) {
    messageBox.textContent = winnerMessage + " You had a higher score than the dealer";
    userWins ++
    userWinsEl.textContent = userWins;
  }
    else if (compCount > userCount) {
    messageBox.textContent = loserMessage + "Well done for not going bust, but unfortunately neither did the dealer, and they had a higher score"
    compWins ++
    compWinsEl.textContent = compWins;
}
  else{
    messageBox.textContent = "Draw, try again";
  }
    
    
  
}
function compsTurn() {
    usersTurn = false;
    if (compCount >= 17) {
        whoWins()
    }
    else {
        drawCard();
        compsTurn()
    }
    
}
function hit(){
    userScoreArray[userCardsDealt] = drawCard();
    userCardsEl.textContent = userScoreArray
    displayMessage();
}
function displayMessage() {
    if ( userCount < 21)
    messageBox.textContent = `You have ${userCount} and the dealer has ${compCount}... What would you like to do?`;
    else if( userCount > 21) {
        messageBox.textContent = `Noooo! You went bust on ${userCount}. The dealer wins`;
        compWins --
        compWinsEl.textContent = compWins;
        
    }
    else if(userCount === 21){
        messageBox.textContent = `Woohoo, you have 21!`
    }
    
}

function stick(){
    usersTurn = false;
    if (compCount === 21) {
        messageBox.textContent = "Damn, the dealer has 21"
        whoWins()
    }
    else if (compCount >= 17 && compCount < 21) {
        messageBox.textContent = `The dealer has to stick on ${compCount}`;
        whoWins()
    }
    else if( compCount < 17){
        compScoreArray[compCardsDealt] = drawCard();
        compCardsEl.textContent = compScoreArray;
        stick()
    }
    else if(compCount > 21){ 
        whoWins()
    }
}
// starts a timer. when finished, it runs the comp choice
// function countdown() {
//     let timeLeft = 3;
//     // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     let timeInterval = setInterval(function () {
//       if (timeLeft === 0) {
//         drawCard()
//         clearInterval(timeInterval)
//       }
//       else {
//         messageBox.textContent = timeLeft;
//         timeLeft --
//       }

//     },1000);
//   }