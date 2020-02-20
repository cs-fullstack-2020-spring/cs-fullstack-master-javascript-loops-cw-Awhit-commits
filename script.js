//Exercise 1 

// //Simple for loop to iterate from -3 to 8
// for (let index = -3; index <= 8; index++) {
//     console.log(index);
    
// }

//Exercise A
let numbers;
// numbers = -10
// while (numbers !=5){
//     numbers++
//     console.log(numbers);
// }

//Exercise 2 
// for (let index = -5; index <=5; index++) {
//     console.log(index);

// }

//Exercise B

// numbers = 10
// console.log(numbers);
// while(numbers >0){
//     numbers--;
//     if (numbers == 5) {
//         console.log("Except");
        
//     } 
//     else {
//         console.log(numbers);
        
//     }
// }

//Exercise 3

// for (let index = -50; index <= 50; index = index+2) {
//     console.log(index);
    
// }

//Exercise C

// let name_array;
// name_array = [];
// name = prompt("Enter a word. Enter 'q' to quit.");
// while (name != 'q'){
//     name_array.push(name);
//     name = prompt("Enter a word. Enter'q' to quit.");
// }

// for (let index = 0; index < name_array.length; index++) {
//     const element = name_array[index];
//     console.log(element);
    
// }

//Exercise 4

// let high_scores;
// high_scores =[2112 , 1024, 9000, 9001, 7200 , 2600, 10000]
// for (let index = 0; index < high_scores.length; index++) {
//     const element = high_scores[index];
//     if (element > 9000){
//        console.log( `${element} over 9000`)
//     }
//     else{
//         console.log(element);
//     }
// }

//Exercise 5
numbersCounter = parseInt(prompt("How many numbers do you have?"));
let numList;
numList = [];

for (let index = 0; index <= numbersCounter; index++) {
    const element = numbersCounter;
    numbers = Prompt("Enter a number");
    numList.push(numbers)
}
console.log(numList);
