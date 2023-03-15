var buttonsNum = document.querySelectorAll('.drum').length;
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
}