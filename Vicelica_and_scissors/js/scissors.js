var myArray = ['stone', 'paper', 'scissors'];
var compCount = 0;
var userCount = 0;

while (true) {
    var userElement = prompt("Enter some element");
    var randomElement = Math.floor(Math.random() * 3 + 1);
    var compElement = myArray[randomElement - 1];

    if (userElement === null) {
        alert('You exit the game');
        break;
    }

    if (userElement === compElement){
        alert("Draw")
    } else if(((userElement === 'stone') && (compElement === 'scissors')) || ((userElement === 'paper')
            && (compElement === 'stone')) || ((userElement === 'scissors') &&(compElement === 'paper'))) {
        alert('You win!');
        userCount++;
    } else if(((compElement === 'stone') && (userElement === 'scissors')) || ((compElement === 'paper')
            && (userElement === 'stone')) || ((compElement === 'scissors') &&(userElement === 'paper'))) {
        alert('Computer win!');
        compCount++;
    }

    alert('Your wins: ' + userCount + '\n'
        + 'Computer wins: ' + compCount);
}

alert('Your wins: ' + userCount + '\n'
    + 'Computer wins: ' + compCount);

if (userCount > compCount) {
    alert('You have won!');
} else if (compCount > userCount) {
    alert('Computer have won!');
} else {
    alert('Draw');
}
