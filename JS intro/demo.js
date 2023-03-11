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

/* function getMilk(){
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
getMilk(); */

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
/* function main(){
   corecore();
   }
   
function core(){
   putBeeper();
   move();
   turnLeft();
   move();
   turnRight();
}

function corecore(){
   core();
   } */

/* function getMilk(money){
    alert('we are goint to get milk');
    console.log('leave the house');
    console.log('go to the store');
    console.log('enter the store');
    var milk_price = 1.5;
    var milk_bottles = Math.floor(money/milk_price);
    console.log('pick ' + milk_bottles + ' bottles of milk');
    console.log('buy milk');
    console.log('leave the store');
    console.log('come home');
    console.log('enter home');
    alert('we got milk');
}
getMilk(10); */

/* function tell_time_left (age){
   var lifetime = 90;
   var years_left = lifetime-age;
   var month_left = 12*years_left;
   var weeks_left = 52*years_left;
   var days_left = 365*years_left;
   alert('you have left ' +years_left + ' years or ' + month_left +  ' months or ' + weeks_left + ' weeks left or ' + days_left + ' days');
}
var input_age = prompt('enter your age');
tell_time_left(input_age); */

/* function getMilk(money, price){
    alert('we are goint to get milk');
    console.log('leave the house');
    console.log('go to the store');
    console.log('enter the store');
   
    console.log('pick ' + calculate_bottles(money, price) + ' bottles of milk');
    console.log('buy milk');
    console.log('leave the store');
    console.log('come home');
    console.log('enter home');
    console.log('master, your change is ' + calculate_change(money,price) + ' USD')
    alert('we got milk');
}

function calculate_bottles(money, price){
   var milk_bottles = Math.floor(money/price);
   return milk_bottles;
}

function calculate_change(money, price){
   var change = money % price;
   return change;
}
var given_money = prompt('give me money:');
getMilk(given_money, 1.5); */

/* function bmi_calculator(weight, height){
   var bmi = Math.round(weight / Math.pow(height,2));
   alert('you bmi is ' + bmi);
}
bmi_calculator(86, 1.97); */


/* function rp(){
   var lovescore = Math.floor(Math.random()*10) + 1;
   if (lovescore > 7){
      console.log(lovescore + ', its a match');
   }
   if (lovescore <= 7 && lovescore > 3){
      console.log(lovescore + ', mind you life');
   } else{
      console.log(lovescore + ', next time buddy');
   }
}

function m(){
   rp();

}
*/

/* function is_leap_year(){
   var year = prompt('enter year:');

   if (year % 4 === 0) {
      if (year % 100 === 0) {
         if (year % 400 === 0) {
            alert('leap year');
      }
      else {
         alert('leap year');
      }
      } else {
         alert('leap year');
      } 
   }  
} 

is_leap_year();
*/

/* var guests = ['a', 'b', 'c'];
var person = prompt('who are you?');
if(guests.includes(person) == true){
   alert('welcom');
} else{
   alert('next time');
} */

/* var lst = [];
function push(list){
   var lastNum = list.length + 1;
   if(lastNum % 3 == 0 && lastNum % 5 == 0){
      list.push('Fizz Buzz');
   }
   if(lastNum % 3 == 0){
      list.push('Fizz');
   }
   if(lastNum % 5 == 0){
      list.push('Buzz');
   }
   else{
      list.push(lastNum +);
   }
   console.log(list);
}

function many(){
   push(lst);

}

many();
many(); */

/* var list = [];
var lastNum = 1;
function fizbuzz(){
   if(lastNum % 3 == 0 && lastNum % 5 == 0){
      list.push('Fizz Buzz');
      lastNum++;
   }
   else if(lastNum % 3 == 0){
      list.push('Fizz');
      lastNum++;
   }
   else if(lastNum % 5 == 0){
      list.push('Buzz');
      lastNum++;
   }
   else{
      list.push(lastNum);
      lastNum++;
   }
   console.log(list);
}
fizbuzz(); */

/* var friends = ['a', 'b', 'c'];
function whoPays (lst){
   var friendID = Math.floor(Math.random() * lst.length);
   var payer = lst[friendID];
   alert(payer + ' payest for meal');
}
whoPays(friends); */
/* 
function song(num){
   var originalNum = num;
  
   while (num >= 0){

      var bottleWord = ' bottles ';

      if (num == 1) {
         bottleWord = ' bottle ';
      }
      else if (num == 0){
         bottleWord = 'No more bottles ';
      }

      console.log(num + bottleWord + ' of beer on a wall. ' + num + bottleWord + ' of beer');
      console.log('take one down and pass it around. ' + (num-1) + bottleWord + ' of beer on a wall');
      console.log(' ');
      num--;
   }
   console.log('Go to the store and buy some more ' + originalNum + bottleWord + ' of beer on a wall');

}
song(5); */

/* for (i=1; i<10; i++){
   console.log(i);
} */

function fibonachi(n){
   var lst = [];
   for (i=0; i<=n; i++){
      if (i == 0 || i == 1){
         lst.push(i);
      }
      else{
         var lastId = lst.length-1;
         var penultimateId = lst.length -2;
         var lastNum = lst[lastId];
         var penultimateNum = lst[penultimateId];
         var nextNum = lastNum + penultimateNum;
         lst.push(nextNum);
      }
   }
   console.log(lst);
}
fibonachi(10);




















