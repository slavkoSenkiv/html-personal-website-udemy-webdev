/* alert("hello");
alert("world"); */
/* alert(typeof("asd"));
alert(typeof(123));
alert(typeof(false));
alert(typeof(1.2));
 */
/* var my_name = prompt('what is your name?');
alert('hello ' + my_name + ' welcome ' + my_name + ' home');
 */

/* function test() {
    var a = "3";
    var b = "8";
    
    var c = a
    a = b
    b = c

    console.log("a is " + a);
    console.log("b is " + b);
} */

/* var my_name = prompt('enter your name here: ');
alert('your name has ' + my_name.length + ' characters in it!'); */

/* var tweet_limit = 10
var msg = prompt('enter your tweet here: ')
var char_left = tweet_limit - msg.length
alert('your tween is ' + msg.length + ' characters long! You have ' + char_left + ' charaters left out of ' + tweet_limit)
alert('so this is what is left of your tweet: ' + msg.slice(0, tweet_limit)) */

var msg = prompt('enter your name here: ');
var first_letter = msg.split(1, 2);
first_letter = first_letter.toUpperCase();
alert(first_letter);
var remaining_name = msg.split(2, 100);
alert(remaining_name);
var propper_name = first_letter + remaining_name;
alert(propper_name);
alert('Hello ' + propper_name);

