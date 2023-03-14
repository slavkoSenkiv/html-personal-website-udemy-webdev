/* document.querySelector('button').addEventListener('click', handleClick);
function handleClick(){
    alert('I got clicked');
} */
/* document.querySelector('button').addEventListener('click', function (){alert('I got clicked');});
 */

var buttonsNum = document.querySelectorAll('.drum').length;
for (i=0; i<buttonsNum; i++){
    var audio = new Audio('sounds/tom-1.mp3');
    var theButton = document.getElementsByTagName('button')[i];
    theButton.addEventListener('click', function (){
        audio.play();
        this.style.color = 'white';
    }) ;
}
