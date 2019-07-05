// console.log("print all numbers between -10 and 19.");
// var number = -10;
// while (number <= 19) {
//     console.log(number);
//     number++;
// }

console.log("print all numbers between -10 and 19.");
for(i = -10; i <= 19; i++){
    console.log(i);
}

// console.log("print all even numbers between 10 and 40.");
// var number = 10;
// while (number <= 40) {
//     console.log(number);
//     number += 2;
// }

console.log("print all even numbers between 10 and 40.");
for(i = 10; i <= 40; i+=2){
    console.log(i);
}

// console.log("BETTER WAY to print all even numbers between 10 and 40.");
// var number = 10;
// while (number <= 40) {
//     if (number % 2 === 0) {
//         console.log(number);
//     }
//     number += 1;
// }

console.log("BETTER WAY to print all even numbers between 10 and 40.");
for(i = 10; i <= 40; i += 1){
    if(i % 2 === 0){
      console.log(i);
  }
}

// console.log("print all odd numbers between 300 and 333.");
// var number = 300;
// while (number <= 333) {
//     if (number % 2 !== 0) {
//         console.log(number);
//     }
//     number += 1;
// }

console.log("print all odd numbers between 300 and 333.");
for(i = 300; i <= 333; i++){
    if(1 % 2 != 0){
        console.log(i);
    }
}

// console.log("print all numbers divisible by 5 AND 3 between 5 and 50.");
// var number = 5;
// while (number <= 50) {
//     if (number % 5 === 0 && number % 3 === 0) {
//         console.log(number);
//     }
//     number += 1;
// }

console.log("print all numbers divisible by 5 AND 3 between 5 and 50.");
for(i = 5; i <= 50; i++){
    if(i % 5 === 0 && i % 3 === 0){
       console.log(i); 
    }
}
