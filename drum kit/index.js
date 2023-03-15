
function makeSound(letter){
  switch (letter) {
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
      console.log(letter);
      break;
  }
}

var buttonsArr = document.getElementsByClassName('.drum');
for (i=0; i<buttonsArr.length; i++){
  buttonsArr[i].addEventListener('click', function(){
    var clickedKey = buttonsArr[i].innerHTML;
    makeSound(clickedKey);
  })
}


document.addEventListener('keydown', function(event) {
  var pressedKey = event.key;
  makeSound(pressedKey);
});
