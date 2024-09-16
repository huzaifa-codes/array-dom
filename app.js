//Q1 and Q2 skipped because are related to JS literal and object notation

//Q3
// var arr1=["Hello","World","JavaScript"];

//Q4
// var arr1=[1,2,3,4,5,90]

//Q5
// var arr1=[true,false,true]

//Q6
// var arr1=["Strings",1,true]

//Q7
// var networks=["Jazz","Zong","Ufone"]

// //Q8
// var arr1=["SSC","HSC","BCS","BS","BCOM"]
// for(var i=0; i<arr1.length; i++){
//     console.log(i+1+" "+arr1[i]);
// }

//Q9
// var arr1=[];
// arr1.push("Avengers: Age of Ultron");
// arr1.push("Spectre");
// arr1.push("Jurassic World");
// arr1.push("Inside Out");
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log("Length of the array: "+ +arr1.length)

//Q10
// var cars=["audi","Volvo","Ford","Lamborgini"]
// console.log(cars[0],cars[1],cars[2],cars[3]);
// console.log("First index of the array: "+cars.indexOf("audi"))
// console.log("Car at the first index of the array: "+cars[0]);
// console.log("Last index of the array: "+cars.indexOf("Lamborgini"))
// console.log("Car at the last index of the array: "+cars[3]);


//Q11
// var students=["shaheer","abdullah","shehan"]
// var marks=[450,480,350]
// var totalMarks=500;
// var percentage1=marks[0]/totalMarks*100;
// var percentage2=marks[1]/totalMarks*100;
// var percentage3=marks[2]/totalMarks*100;
// console.log("Score of Shaheer is 450. Percentage: "+percentage1 );
// console.log("Score of Shaheer is 480. Percentage: "+percentage2);
// console.log("Score of Shaheer is 350. Percentage: "+percentage3);

//Q12
// skipped

// //Q13
// var scores=[320,230,480,120];
// scores.sort();
// console.log(scores);

//Q14
// var fruits=["strawberry","apple","orange","banana"];
// fruits[0]="apple";
// fruits[1]="banana";
// fruits[3]="strawberry";
// console.log("Ordered fruits list: "+fruits)


//Q15
// var city=["karachi","lahore","islamabad","quetta","peshawar"];
// console.log("Selected cities list: ");
// console.log(city[3],city[4],city[0]);

//Q16
// var arr=["This","is","my","cat"];

// // console.log(arr.join(" "));

// //Q17
// var arr=["keyboard","mouse","printer","monitor"];
// arr.splice(1);
// console.log("Out:" +arr.join())
// arr.splice(0,3,"mouse");
// console.log("Out:" +arr.join())
// arr.splice(0,3,"printer");
// console.log("Out:" +arr.join())
// arr.splice(0,3,"monitor");
// console.log("Out:" +arr.join())



//Q20 21
// Multidimensional array

//Q19 pending
// var dropDown=document.querySelector("#ddm")
// var array=["Apple","Nokia","Samsung"];
// function drop(){
    
// }



//functionss//

//Q1
// function use(){
//     console.log("hello js");
// }
// use();

//Q2
// function dateTime(date,time){
// console.log(date+" and "+time)
// }
// dateTime("14 feburary","3pm");

//Q3
// function greet(firstName,lastName){
//     console.log(firstName+" "+lastName);
// }
// greet("Shaheer","Ahmed");

// //Q4
// function sum(num1,num2){
//     return num1+num2;
// }
// var ans=sum(20,21);
// console.log(ans);

//Q5 Calculator
// function sum(num1,num2,num3){
//     return num1+num2+num3;
// }
// var ans=sum(1,8,90);
// console.log(ans)

//Q6
// function square(num){
//     return num*num;
// }
// var ans1=square(2);
// var ans2=square(10);
// var ans3=square(20);
// console.log(ans1+", "+ans2+" ,"+ans3)

//Q7
// function factorial(n) {
//     if (n < 0) {
//         return "Factorial is not defined for negative numbers.";
//     } else if (n === 0 || n === 1) {
//         return 1; // Base case: 0! = 1 and 1! = 1
//     } else {
//         return n * factorial(n - 1); // Recursive case
//     }
// }

// // Example usage:
// let number = 5;  // Change the number to test
// console.log("Factorial of " + number + " is: " + factorial(number));

//Q8
// var start,end;
// function counting(start,end){
//    for(var i=start; i<=end; i++){
//     console.log(i);
//    }
    
// }
// counting(11,20);


// //Q9
// function calculateHypotenuse(B,P){
//     function calculateSquare(B,P){
//         var H=+(B*B)+ +(P*P);
//         console.log("Hypotenuse is equal to "+H)

//     }
//     calculateSquare(2,3);
 
// }
// calculateHypotenuse(2,3);

//Q10
// function len(a){
//     var b=a.length;
//     console.log(b);
// }
// len("Strings");

//Q11
// function area(width,height){
//     var A=width*height;
//     console.log(A);
// }
// area(2,7);

//Q12 issue!
// function sorted(array){
    
//   console.log(array.sort())
// }
// var a=[1,2,5,3,2,56,3,1,21];
// sorted(a);

//Q14

// function sumarr(){
    
//     var sum=arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5];
//     console.log(sum);
// }
// var arr=[1,2,3,45,5,4]
// sumarr(arr);

//Q15
// var param=function inner()
// {
//     return typeof(inner);
// }
// alert(param())

//Q16 Try to not declare variable inside function! 
// function power(a){
//     console.log(a*a*a);
// }
// power(2);

//Q18
// function arrReverse(a){
//    console.log(a.reverse());
// }
// arrReverse([3,2,2,1,4,5,6]);















//Q1
// var input=+prompt("Write a number: ");
// if(input%3==0){
//     console.log("Number is divisible by 3");
// }
// else{
//     console.log("Number is not divisible by 3");
// }

//Q2
// var input=+prompt("Give a number");
// if(input%2==0){
//     console.log("Its an even number");
// }
// else{
//     console.log("Its an odd number");
// }

//Q3
// var age=17;
// if(age>18){
//     console.log("Old Enough");
// }
// else{
//     console.log("Too Young");
// }

//Q4
// var myName=prompt("My Name");
// var userName=prompt("User's Name");
// if(myName==userName){
//     console.log("Hello User!");
// }
// else{
//     console.log("");
// }


//Q5
//Switch Cases

//Q6
// var asciiCode=+prompt("Give input")
// if (asciiCode >= 48 && asciiCode <= 57) {
//     console.log(asciiCode + " is a number.");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//     console.log(asciiCode + " is an uppercase letter.");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//     console.log(asciiCode + " is a lowercase letter.");
// } else {
//     console.log(asciiCode + " is not a number or letter.");
// }

//Q7
//Switch Case

//Q8
// var time=+prompt("Time in 4 number digits:");
// if(time<=2400){
// if(time>=0 && time<1200){console.log("Good Morning")}
// else if(time>=1200 && time<1700){
//     console.log("Good Afternoon")
// }
// else if(time>=1700 && time<2100){
//     console.log("Good Evening")
// }
// else{
//     console.log("Good Night!");
// }}
// else{
//     console.log("Irrelevant input!")
// }

//Q9
// var calenderYear=+prompt("Year in 4 digit:");
// if((calenderYear%4==0 && calenderYear%100!=0)||(calenderYear%400==0)){
//     console.log("Its a Leap Year");
// }
// else {
// console.log("Its not a Leap Year")
// }

// //Q10
// var correctPassword="abc123";
// var userPassword=prompt("Enter Password");
// if(userPassword==correctPassword){
//     console.log("Correct!");
// }
// else if(userPassword==""){
//     console.log("Please enter password");
// }
// else if(userPassword!=correctPassword){
//     console.log("Incorrect Password!")
// }


//Q11
// var firstName="Ali";
// if(firstName=="Fahad"){
//     console.log("Hello Fahad!")
// }
// else{
//     console.log("You are not fahad");
// }

//Q12 correction making
// var hour=13;
// if(hour<18){
//     console.log("Good day")
// }
// else{
//     console.log("Good Evening");
// }


//Q13
// var int1=12;
// var int2=13;
// if(int1==int2){
//     console.log("Both are equal")
// }
// else if(int1>int2){
//     console.log(int1);
// }
// else{
//     console.log(int2);
// }

//Q14
// var input=+prompt("Give a number");
// if(input==0){
//     console.log("Number is zero")
// }
// else if(input>0){
//     console.log("Number is positive")
// }
// else{
//     console.log("Number is negative")
// }

// //Q15
// var time=+prompt("Write to digit time from 00 to 24");
// if(time>=6 && time<=9){
//     console.log("Breakfast is served")
// }
// else if(time>=11 && time<=13){
//     console.log("Time for Lunch")
// }
// else if(time>=17 && time<=20){
//     console.log("Its dinner")
// }
// else{
//     console.log("You have to wait, or go get some snacks");

// }

//Q16
// var value="Hello";
// var value1=12;
// var value2=true;
// var value3;
// console.log(typeof(value));
// console.log(typeof(value1));
// console.log(typeof(value2));
// console.log(typeof(value3));

//Q17
// var char="e";
// if(char=="a"|| char=="e"||char=="i"||char=="o"||char=="u" || char=="A"||char=="E"||char=="I"||char=="O"||char=="U"){
//    console.log("True")
// }
// else{
//     console.log("False")
// }

//Q18
// if(10!=8){
//     console.log("True")
// }

//Q19
// Switch Cases

//Q20
//Same as Q3!






// Q1
// for(i=0; i<5; i++){
//     console.log("Hello world");
// }

//Q2
// for(var i=1; i<11; i++){
//     console.log(i);
    
// }

//Q3
// var num=2;
// for(var i=1; i<=10; i++){
// console.log(`${num} * ${i} = ${num*i}`)
// }

//Q4
// var arr=["nokia","samsung","apple"]
// for(i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


//Q5
var fruits=["apple","banana","peach"];
for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
   
}
for(var i=0; i<fruits.length; i++){
    console.log(`Element at index ${i} is ${fruits[i]}`)
}