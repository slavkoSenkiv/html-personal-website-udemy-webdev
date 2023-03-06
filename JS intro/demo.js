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

/* var msg = prompt('enter your name here: ');
var lower_case_msg = msg.toLowerCase();
var first_letter = lower_case_msg.slice(0, 1);
var big_first_letter = first_letter.toUpperCase();
var remaining_name = lower_case_msg.slice(1, msg.length);
var propper_name = big_first_letter + remaining_name;
alert('Hello ' + propper_name); */

/* var dogAge = prompt('enter dog age: ');
var humanAge = (dogAge - 2) * 4 + 21;
alert(dogAge + ' dog years is ' + humanAge + ' human years'); */

function getMilk(){
    alert('we are goint to get milk');
    console.log('leave the house');
    console.log('go to the store');
    console.log('enter the store');
    console.log('pick milk');
    console.log('buy milk');
    console.log('leave the store');
    console.log('come home');
    console.log('enter home');
    alert('we got milk');
}

getMilk();
console.log('another day');
getMilk();



