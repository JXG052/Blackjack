let userCount = 0;
let compCount = 0;
let userScoreArray = []
let compScoreArray = []
let usersTurn = true;
let userCard1El = document.getElementById("userCard1");
let compCard1El = document.getElementById("compCard1"); 
let userCard2El = document.getElementById("userCard2");
let compCard2El = document.getElementById("compCard2");
let compScore = document.getElementById("compScore");
let userScore = document.getElementById("userScore");
let whoWinsEl = document.getElementById("whoWins");


// returns [card, countScore]
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
    } else {
        compCount += count;
    }
    
    compScore.innerText = `Dealer Total: ${compCount}`;
    userScore.innerText = `Your Total: ${userCount}`;
    if (userCount > 21){
        whoWins()
    }
    if (compCount > 21){
        whoWins()
    }
    return count;
}

// function addScore(num){
//     if (usersTurn){
//         userCount += num
//     }
//     else {
//         compCount += num
//     }
// }

function startGame() {
    userCount = 0;
    compCount = 0;
    usersTurn = true;
    userScoreArray[0] = drawCard();
    userCard1El.innerText = userScoreArray[0]
    usersTurn = false;
    compScoreArray[0] = drawCard();
    compCard1El.innerText = compScoreArray[0]
    usersTurn = true;
    userScoreArray[1] = drawCard();
    userCard2El.innerText = userScoreArray[1]
    usersTurn =  false;
    compScoreArray[1] = drawCard();
    compCard2El.innerText = compScoreArray[1]
    usersTurn = true;

    
}

function whoWins() {
    let winnerMessage = "Woohoo you win!";
    let loserMessage = "unlucky, you lost this time";
  if (userCount > 21) {
    whoWinsEl.innerText = loserMessage;
  }
  else if (compCount > 21) {
    whoWinsEl.innerText = winnerMessage;
  }
  else if(userCount > compCount) {
    whoWinsEl = winnerMessage;
  }
  else if (compCount < userCount) {
    whoWinsEl = "You drew this time"
  }
  
}