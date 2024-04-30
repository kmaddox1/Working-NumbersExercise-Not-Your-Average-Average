// How to take the average of three numbers in JS, whenever you have three numbers, you can just add them up and divide by three.//
// sum / count //
// For example, 2 + 4 / 2// 

// tempNum number is the number that the user enters. Number prompt is the function that asks the user for a number.// 
// Next step is to update the sum and count to represent the new number that has been entered. write the code below. on the right wer're taking the current sum and adding the new number that was entered by te user, tempNum. Then we are taking that addition result and storeing it in the sum variable which is assignment. you can use this code as well"sum += tempNum; or sum = sum +tempNum; ""//
// count++ is a short cut for count = count + 1; this saying that we are adding 1 to the current value of count.//

// Average is the sum divided by the count. code let avrg = sum / count; //

let sum = 0;
let count = 0;
let tempNum = 0;



tempNum = Number(prompt("Please enter your first number"));
sum += tempNum;
count++;
console.log(sum);

tempNum = Number(prompt("Please enter your second number"));
sum += tempNum;
count++;
console.log(sum);

tempNum = Number(prompt("Please enter your third number"));
sum += tempNum;
count++;
console.log(sum);

let average = sum / count;
console.log("The average is: " + average);