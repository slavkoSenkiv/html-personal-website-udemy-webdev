$('button').click(function(e){
    var btnColor = e.attr('id')
    var sound = new Audio('sounds/' + btnColor + '.mp3');
    sound.play();
})