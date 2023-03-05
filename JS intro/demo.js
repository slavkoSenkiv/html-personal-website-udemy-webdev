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

var tweet_limit = 180
var msg = prompt('enter your tweet here: ')
var char_left = tweet_limit - msg.length
alert('your tween is ' + msg.length + ' characters long! You have left ' + char_left + ' charaters left out of ' + tweet_limit)


