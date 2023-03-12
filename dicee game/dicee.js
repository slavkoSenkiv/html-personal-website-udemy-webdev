function throwDice(diceNum){
    var diceNum = diceNum - 1;
    var randDice = Math.floor(Math.random()*6+1);
    var dicePath = 'images/dice' + randDice + '.png';
    document.getElementsByTagName('img')[diceNum].setAttribute('src', dicePath);
    return randDice
}

var dicePlayerOne = throwDice(1);
var diceplayerTwo = throwDice(2);

if (diceplayerTwo > dicePlayerOne){
    document.querySelector('h1').textContent = 'Player TWO won🚩';
}
else{
    document.querySelector('h1').textContent = '🚩Player ONE  won';

}   