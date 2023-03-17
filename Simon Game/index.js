function userPlaySound(){
    $('div[type=button]').click(function(){
        var btnColor = $(this).attr('id');
        var sound = new Audio('sounds/' + btnColor + '.mp3');
        sound.play();
        });
};

function userClickEffect(){
    $('div[type=button]').click(function(){
        var btn = $(this);
        btn.addClass('pressed');
        setTimeout(function(){btn.removeClass('pressed');}, 100);
    });
};

function systemIndicator(color){
    var picker = 'div[id=' + color + ']'
    $(picker).click(function(){
        var btnColor = $(this).attr('id');
        var sound = new Audio('sounds/' + btnColor + '.mp3');
        sound.play();
        });

    $(picker).click(function(){
        var btn = $(this);
        btn.addClass('pressed');
        setTimeout(function(){btn.removeClass('pressed');}, 100);
    });
}

userPlaySound();
userClickEffect();


var btnArr = ['green', 'red', 'yellow', 'blue'];
var gamePattern = [];

function nextSequence(){
    var randNum = Math.floor(Math.random()*4);
    var randColor = btnArr[randNum];
    gamePattern.push(randColor);
    
}

systemIndicator('green');

