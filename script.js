// answer for question 1 
function test() {
   let string1 = 'This is the answer for question 1';
   let ans1 = document.getElementById('ans1');
   ans1.innerText = string1;
   console.log(string1);

}
test();



// answer for question 2
function sum(num1, num2) {
   let Sum = num1 + num2;
   let string2 = `Sum of  ${num1}, ${num2} is ${Sum}`;
   let ans2 = document.getElementById('ans2');
   ans2.innerText = string2;
   console.log(string2);
}
sum(3, 4);



// answer for question 3
let add = 0;
const multi = (num1, num2) => {
   let ans3 = document.getElementById('ans3');
   add = `Multiplication of  ${num1} and ${num2} is ${num1 * num2}`
   ans3.innerText = add;
   console.log(add);
}
multi(13, 5);



// answer for question 4
var x = 21;
var girl = function () {
   let one = x;
   let ans4 = document.getElementById('ans4');
   ans4.innerText = one;
   console.log(x);
   var x = 20;
};
girl ();



// answer for question 5
var x = 21;
girl ();
let ans5 = document.getElementById('ans5');
ans5.innerText = x;
console.log(x)
function girl() {
   console.log(x);
   var x = 20;
};



// answer for question 6
var x = 21;
a();
b();
function a() {
   x = 20;
   let ans7 = document.getElementById('ans7');
   ans7.innerText = x;
   console.log(x);
};

function b() {
   x = 40;
   let ans8 = document.getElementById('ans8');
   ans8.innerText = x;
   console.log(x);
};



// answer for question 7
function factorial (n) {
   let fact = 1;
   let string3 = '';
   for(let i=1; i<=n; i++) {
      fact *= i;
   }
   string3 = `The factorial of ${n} is ${fact}`;
   let ans9 = document.getElementById('ans9');
   ans9.innerText = string3;
   console.log(string3);
}
factorial(10);



// answer for question 8
function FindSum(a, b){
   return a + b;
}
function DisplayData(data, batch){
   let string4 = `i am from ${data} and My batch is EA${batch}`
   let ans10 = document.getElementById('ans10');
   ans10.innerText = string4;
   console.log(string4);
}
DisplayData("PrepBytes", FindSum(10, 9));



// answer for question 9
Abc();
const Abc = function(){
   let value = 20;
   console.log(value);
}



// answer for question 10
var a = 10;
(function (){
   console.log(a);
   var a = 20;
})();



// answer for question 11
const greet =  function(name){
   return function(m){
      console.log(`Hi!! ${name}, ${m}`);
   }
}
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")