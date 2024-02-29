//chapter 9-11
//q1

var city = prompt("Enter your city name")
if(city === "Karachi"){
   alert("Welcome to city of lights !")
}


//q2
var gender = prompt("Enter your gender:");
if( gender === "male"){
    alert("Good Morning Sir")
}
else if (gender === "female"){
    alert("Good Morning Ma'am")
}
else{
    alert("Good Morning")
}

//q3
var traffic = prompt("Enter color of road traffic signal")
if(traffic ==="red"){
    alert("Must Stop")
}
else if(traffic === "yellow"){
    alert("Ready to move")
}
else if(traffic === "green"){
    alert("Move on")
}

//q4
var remainingFuel =  +(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
}


//q5

// a.
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

// b.
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
// c.
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}
// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

// e.
if (true){
    alert("True");
}
if (false){
    alert("False");
}

// f.
if("car" < "cat"){
    alert("car is smaller than cat");
}

//q6
var eng = +prompt("Enter English numbers")
var math = +prompt("Enter Math numbers")
var urdu = +prompt("Enter Urdu numbers")
var marksObtained= eng + math + urdu
var totalMarks=300
var percentage=marksObtained/totalMarks*100

alert(percentage+"%")
document.write("<br><h1>Marks Sheet</h1>")
var percent =+prompt("Enter your percentage")



if(percent >=80 && percent<100){
    document.write("<br> Total Marks: ",totalMarks,"<br>Marks Obtained: ",marksObtained,"<br>Percentage: ",percentage )
    document.write("<br>Grade: A-one","<br> Remarks: Excellent")
}

else if(percent >=70 && percent<80){
    document.write("<br> Total Marks: ",totalMarks,"<br>Marks Obtained: ",marksObtained,"<br>Percentage: ",percentage )
    document.write("<br>Grade: A","<br>Remarks: Good")
}

else if(percent >=60 && percent<70){
    document.write("<br> Total Marks: ",totalMarks,"<br>Marks Obtained: ",marksObtained,"<br>Percentage:",percentage )
    document.write("<br>Grade: B","<br>Remarks: Need to improve")
}
else if (percent >=50 && percent<60){
    document.write("<br> Total Marks: ",totalMarks,"<br>Marks Obtained: ",marksObtained,"<br>Percentage: ",percentage )
    document.write("<br>Grade: Fail ","<br>Remarks: Sorry")
}

//q7

var secretNumber = 5
var userGuess = +(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
}
else {
    alert("Sorry, wrong guess. The secret number was " + secretNumber);
}

//q8
var num = +prompt("Enter the number")

if (num % 3 === 0) {
  alert("The number " +num +" is divisible by 3.");
} else {
  
  alert("The number "+num +" is not divisible by 3.");
}

//q9
var num1 = +prompt("Enter a number:");
if (num1 % 2 === 0){
    alert("The number "+num1+ " is even.");
} 
   
else{
    alert("The number "+num1+ " is odd.");
}

//q10
var temp = +prompt("Enter the temperature:");
if (temp > 40) {
  alert("It is too hot outside.");
} else if (temp > 30) {
  alert("The Weather today is Normal.");
} else if (temp > 20) {
  alert("Today's Weather is cool.");
} else if (temp > 10) {
  alert("OMG! Today's weather is so Cool.");
} else {
  alert("It's freezing outside.");
}

//q11
var num11 = +prompt("Enter the first number:");
var num12 = +prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");

if(operation === "+") {
document.write(num11+num12)
}
else if (operation === "-") {
    document.write( num11 - num12)
}
else if (operation === "*") {
    document.write( num11 * num12)
}
else if (operation === "/") {
    document.write( num11 / num12)
}
else if (operation === "%") {
    document.write( num11 % num12,"%")
}

//Chapter 12 and 13
//q1
var string= prompt("Enter a string or number")
var result = string.charCodeAt(0)
document.write("<br>The ASCII value of ",string," is: ",result)

//q2

var integer1=+prompt("Enter any integer number 1")
var integer2=+prompt("Enter any integer number 2")
if( integer1 > integer2 ){
    alert("The larger of " + integer1 + " and " + integer2 + " is " + integer1 + ".")
}
else if ( integer1 < integer2 ){
    alert("The larger of " + integer1 + " and " + integer2 + " is " + integer2 + ".")
}

else if(integer1 = integer2){
    alert("The values " + integer1 + " and " + integer2 + " are equal.")
}

//q3
var check=+prompt("Enter a number:")
if(check > 0){
    document.write("<br>The number is positive.")
}

else if (check < 0){
    document.write("<br>The number is negative.")
}
else{
    document.write("<br>The number is zero")
}

//q4
var vowels=prompt("Enter a single character")
if(vowels=="a" || vowels=="e" || vowels=="i" || vowels=="o" || vowels=="u"){
    alert(true)
}
else{
    alert(false)
}

//q5
var correctPassword = "Java Script";
var userPassword = prompt("Please enter your password:");
if (!userPassword) {
   //correct pass:Java Script
    alert("Please enter your password.");
} 
else if (userPassword === correctPassword) {
   
    alert("Correct! The password you entered matches the original password.");
} 
else {
    alert("Incorrect password.");
}

//q6
var greeting;
var hour = 13;
if (hour < 18) {
  ( greeting = "Good day")
} 
else {
  ( greeting = "Good evening")
}

//q7
var time = +prompt("Enter the time in 24hr format")
if(time > 0 && time < 12){
    alert("Good Morning !")
}
else if(time > 12 && time < 17 ){
    alert("Good Afternoon !")
}
else if(time > 17 && time < 21 ){
    alert("Good Evening !")
}
else if(time > 21 && time < 23.59 ){
    alert("Good Night !")
}


//Questions PDF 10 - 14  
document.write("<br><h1>Questions PDF 10 - 14</h1>")
//ch 10 
//q1
var city = "Karachi";
if (city === "Karachi") {
    console.log("The City of Lights");
}

//q2
var x = 5, y = 5;
var z;

if (x === y) {
  z = prompt("Enter the value of z:");
  alert("The value of z is: " + z);
}

//q3
var zip=+prompt("Enter the zip code of karachi")
if(zip=== 10010){
    alert("Karachi")
}
else("Please write correct city")

//q4
var x1 = 1;

if (x1 === 1) {
  x1 = 10;
}

alert(x1); 

//ch 11
//q1
var x2 = 5;
var y = 10;

if (x2 !== y) {
  
}

//q2
var x3 = 10;
var y = 5;

if (x3 >= y) {
  
}

//q3
var x4 = 5;

if (x4 !== 10) {
  x4 = 10;
}

alert(x4); 

//q4
var num10 = 5;
var num20 = 10;

if (num10 !== num20) {
  alert("Congratulations! You got it right.");
}

//q5
var firstName = prompt("What is your first name?");
var nameCheck = "John";

if (firstName !== nameCheck) {
  alert("No match");
}

//ch 12
//q1
var num15 = 10;
var num25 = 5;

if (num15 >= num25) {
  alert("num1 is greater than or equal to num2");
} 
else {
  alert("num1 is less than num2");
}

//q2
var marks = prompt("Enter your marks:");
var percentage1 = (marks / 100) * 100;

if (percentage1 >= 90) {
  alert("Your grade is A");
} 
else if (percentage1 >= 75) {
  alert("Your grade is B");
} 
else if (percentage1 >= 60) {
  alert("Your grade is C");
} 
else if (percentage1 >= 50) {
  alert("Your grade is D");
} 
else {
  alert("Your grade is F");
}

//q3
 var a =+prompt("guess the value of a")
if(a=== 10){
    alert("a is 10")
}
else{
    alert("The correct value of a is 10")
}

//q4
var city1 = prompt("Enter a city:");

if (city1 === "karachi") {
  alert("You entered Karachi!");
} else if (city1 === "lahore") {
  alert("You entered Lahore!");
} else {
  alert("That's not a city we're looking for.");
}

//ch 13
//q1
if (a === b && c === d) {
    
}

//q2
if (a === b || c !== d) {
    
}

//q3
if (name11 === "Hamza" || name12 === "Arsalan" && age < 60) {
    
}

//q4
var a23 = 10;
var b23 = 20;

if (a23 < b23 || a23 > b23) {
  alert(a23, "is either less than" ,b23, "or greater than",b23);
}

//q5
var firstName = "John";
var lastName = "Doe";

var userFirstName = prompt("Enter your first name:");
var userLastName = prompt("Enter your last name:");

if (userFirstName === firstName && userLastName === lastName) {
  alert("Your name matches the stored name!");
}

//ch 14
//q1
var password1 = prompt("Enter your password:");

if (password1) { 
  if (password1.length <= 5) { 
    alert("Password must be greater than 5");
  } 
else {
    alert("OK");
}
} 
else {
  alert("Please enter your password");
}

//q2
var a13 = 1;
var c13 = "Max";

if (a13 === 1) {
  if (c13 === "Max") {
    alert("OK");
  }
}

//q3
var a20 = 1;
var c20 = "Max";

if (a20 === 1 && c20 === "Max") {
  alert("OK");
}

//q4
var a45 = 5;
var b45 = 5;

if (a45 === b45) {
  if (a45 <= b45) {
    alert("The variables have the same value and a is less than or equal to b");
  }
}
