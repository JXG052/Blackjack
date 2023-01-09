let userCount = 0;
let compCount = 0;
let usersTurn = true;

// returns [card, countScore]
function drawCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    let card;
    switch (randomNumber) {
        case 11: 
            card = "J";
            return [card, 10];
        case 12:
            card = "Q";
            return [card, 10];
        case 13:
            card = "K";
            return [card, 10];
        case 1:
            card = "A";
            return [card, 11];
        default:
            card = randomNumber;
            return [card, randomNumber];
    }
    
}

function addScore(num){
    if (usersTurn){
        userCount += num
    }
    else {
        compCount += num
    }
}

function startGame() {
    userCount = 0;
    compCount = 0;
    usersTurn = true;
    let firstCard = drawCard()
    addScore(firstCard[1]);
    let dealerFirstCard = drawCard()
    addScore(dealerFirstCard[1])

}
startGame()
console.log(userCount)