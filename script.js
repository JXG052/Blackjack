let userCount = 0;
let compCount = 0;
let usersTurn = true;
let userCard1El = document.getElementById("userCard1");
let compCard1El = document.getElementById("compCard1"); 
let userCard2El = document.getElementById("userCard2");
let compCard2El = document.getElementById("compCard2"); 


// returns [card, countScore]
function drawCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    let card;
    switch (randomNumber) {
        case 11: 
            return card = "J";
            // return [card, 10];
        case 12:
            return card = "Q";
            // return [card, 10];
        case 13:
            return card = "K";
            // return [card, 10];
        case 1:
            return card = "A";
            // return [card, 11];
        default:
            return card = randomNumber;
            // return [card, randomNumber];
    }
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
    userCard1El.innerText = drawCard();
    compCard1El.innerText = drawCard();
    userCard2El.innerText = drawCard();
    compCard2El.innerText = drawCard();
}
