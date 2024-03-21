function RollTheDice() {
    // player 1 score
    var player1Score = Math.random();
    player1Score = player1Score * 6;
    player1Score = Math.ceil(player1Score);

    // player 2 score
    var player2Score = Math.random();
    player2Score = player2Score * 6;
    player2Score = Math.ceil(player2Score);

    // player 1 score img
    var img1 = document.querySelector('.img1');

    if (player1Score === 1) {
        img1.src = './images/dice1.png'
    } else if (player1Score === 2) {
        img1.src = './images/dice2.png'
    } else if (player1Score === 3) {
        img1.src = './images/dice3.png'
    } else if (player1Score === 4) {
        img1.src = './images/dice4.png'
    } else if (player1Score === 5) {
        img1.src = './images/dice5.png'
    } else if (player1Score === 6) {
        img1.src = './images/dice6.png'
    }

    // player 2 score img
    var img2 = document.querySelector('.img2');

    if (player2Score === 1) {
        img2.src = './images/dice1.png'
    } else if (player2Score === 2) {
        img2.src = './images/dice2.png'
    } else if (player2Score === 3) {
        img2.src = './images/dice3.png'
    } else if (player2Score === 4) {
        img2.src = './images/dice4.png'
    } else if (player2Score === 5) {
        img2.src = './images/dice5.png'
    } else if (player2Score === 6) {
        img2.src = './images/dice6.png'
    }

    // compare players score
    var result = document.querySelector('.result');

    if (player1Score > player2Score) {
        result.textContent = 'Player 1 wins.'
    } else if (player1Score < player2Score) {
        result.textContent = 'Player 2 wins.'
    } else if (player1Score === player2Score) {
        result.textContent = 'Draws'
    }
}

RollTheDice()