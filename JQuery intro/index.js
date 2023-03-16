/* document.querySelector('h1').style.fontSize = '50px';
 */
/* $(document).ready(function(){
    $('h1').css('color', 'green');
})
 */

/* $('h1').css('color', 'green');
 */

$('h1').addClass('big-title margin-around ');

/* $('button').text('hey'); */
$('button').html('<em> bye <em>');
$('a').attr('href', 'https://www.yahoo.com');

/* var buttnonNum = document.querySelectorAll('button').length;
for (i=0; i<buttnonNum; i++){
    document.getElementsByTagName('button')[i].addEventListener('click', function(){
        document.querySelector('h1').style.color = 'green';
    });
} */

$('button').click(function(){$('h1').css('color','green')});
$('body').keydown(function(e){$('h1').html(e.key)});
$('h1').before('<button>before</button>');
$('h1').after('<button>after</button>');
$('h1').prepend('<button>prepend</button>');
$('h1').append('<button>append</button>');
//$('button').click(function(){$('h1').hide()});
//$('button').click(function(){$('h1').toggle()});
//$('button').click(function(){$('h1').fadeToggle()});
//$('button').click(function(){$('h1').slideToggle()});
$('button').click(function(){$('h1').animate({fontSize: 30})});