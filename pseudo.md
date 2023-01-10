# BlackJack Game

## User Story:

* Click Start Game
* User gets random num between 1 and 11
* Dealer gets random num that we can't see
* User gets randum num that we can see, adds to userCount
* Dealer gets number that we can see
* User gets option. 



## Pseudo for section 1:
// returns a random number between 2 and 11
function drawCard() {
    let num = Math.floor(Math.random()*13)
}

function addScore() {
    
}

function startGame() {
    runs on click of button
    sets userCount to 0
    sets CompCount to 0
    drawCard() for user
    drawCard() for comp
    drawCard() for user
}

function for userDecision 
    do they want to draw card or stick?
    if they draw card, update current score
    if bust - they lose
    if save on valid score
    switch to userTurn False
    call CompsTurn function

function for Comp {
    if dealersScore is less than 17 drawCard
    if 17 or higher stick
    who wins function()
}
function whoWins {
    if compScore=== userScore - draw
    if compScore > userScore - comp wins
    else user wins 
}


