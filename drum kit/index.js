/* document.querySelector('button').addEventListener('click', handleClick);
function handleClick(){
    alert('I got clicked');
} */
/* document.querySelector('button').addEventListener('click', function (){alert('I got clicked');});
 */

/* var buttonsNum = document.querySelectorAll('.drum').length;
for (i=0; i<buttonsNum; i++){
    var audio = new Audio('sounds/tom-1.mp3');
    var theButton = document.getElementsByTagName('button')[i];
    theButton.addEventListener('click', function (){
        audio.play();
        this.style.color = 'white';
    }) ;
} */

/* var buttonsNum = document.querySelectorAll('.drum').length;
for (i=0; i<buttonsNum; i++){
    var theButton = document.getElementsByTagName('button')[i];
    var buttonHtml = this.innerHTML;
    theButton.addEventListener('click', function (){
        switch  (buttonHtml){
            case 'w':
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case 'a':
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case 's':
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                break;
            case 'd':
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                break;
            case 'j':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;     
            case 'k':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            case 'l':
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                break;
            default:
                console.log(buttonHtml);
                break;

        }
    }

    ) ;
} */

const buttons = document.querySelectorAll('.drum');
const buttonsNum = buttons.length;

for (let i = 0; i < buttonsNum; i++) {
  const theButton = buttons[i];
  const buttonHtml = theButton.innerHTML;

  theButton.addEventListener('click', function() {
    switch (buttonHtml) {
      case 'w':
        const tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case 'a':
        const tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case 's':
        const tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case 'd':
        const tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case 'j':
        const snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case 'k':
        const crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case 'l':
        const kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default:
        console.log(buttonHtml);
        break;
    }
  });
}

