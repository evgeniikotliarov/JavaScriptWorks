var arrayWords = ['tiger', 'monkey', 'elephant', 'bear', 'dragon', 'dog'];
var randomElement = Math.floor(Math.random() * arrayWords.length + 1);
var computerWord = arrayWords[randomElement - 1];
var unknownLetters = [];
var attempts = computerWord.length + 5;

for (var i = 0; i < computerWord.length; i++){
    unknownLetters.push('_');
}
var lettersInWorld = computerWord.length;

while (lettersInWorld > 0 && attempts > 0){
    alert(unknownLetters.join(' '));

    var userElement = prompt("A hidden word of " + computerWord.length + ' letters! ' + 'Enter letter:' + '\n'
        + 'You have had attempts: ' + attempts).toLowerCase();

    if (userElement === null){
        break;
    } else if (userElement.length !== 1){
        alert('Enter one letter')
    } else {
        for (var j = 0; j < computerWord.length; j++) {
            if (userElement === computerWord[j]) {
                unknownLetters[j] = userElement;
                lettersInWorld--;
            }
        }attempts--;
    }

}
alert(unknownLetters.join(' '));
if (attempts > 0){
    alert('Congratulation!!!' + '\n' + 'This is word a ' + computerWord.toUpperCase())
}else{
    alert('You lose!!! ' + '\n' + 'Try again?' )
}
