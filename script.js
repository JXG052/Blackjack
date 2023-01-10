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
    usersTurn = false;
    compScoreArray[0] = drawCard();
    usersTurn = true;
    userScoreArray[1] = drawCard();
    usersTurn =  false;
    compScoreArray[1] = drawCard();
    usersTurn = true;
    compScore.innerText = compScoreArray;
    userScore.innerText = userScoreArray

}
