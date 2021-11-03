// ===========================================

// PAIR PROGRAMMING - WRITE A FUNCTION THAT DOUBLES A NUMBER PASSED TO IT

// function multiplyTwo(firstNum) {
//   return firstNum * 2;
// }

// // console.log(multiplyTwo(3));

// // let otherNumber = multiplyTwo(11);
// // let ten = multiplyTwo(7);
// // console.log(otherNumber);

// let number = 22;
// console.log(multiplyTwo(number));

// ===========================================
// PAIR PROGRAMMING - FOR OF LOOP IN OUR DOUBLE FUNCTION

// let numbersArr = [1, 2, 3];

// function multiplyTwo(number) {
//   return number * 2;
// }

// for (let item of numbersArr) {
//   console.log(multiplyTwo(item));
// }

// ===========================================
// PAIR PROGRAMMING - Double Odd Numbers in Array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function iterate(item) {
  if (item % 2 === 1) {
    return item * 2;
  } else {
    return item;
  }
}
// console.log(numbers);
console.log(numbers.map(iterate));
