'use strict';

function generateOddNumber(x, y) {
   let min;
   let max;

   if (x < y) {
      min = x;
      max = y;
   } else {
      min = y;
      max = x;
   }

   let arr = [];
   let arrOdd = [];
   let tmp = max - min;

   for (let i = 0; i <= tmp; i++){
      arr[i] = min;
      min++;
   }

   for (let i = 0; i < arr.length; i++) {
      if ( arr[i] % 2 !== 0) {
         arrOdd.push(arr[i]);
      }
   }
   return arrOdd[Math.floor(Math.random() * arrOdd.length)];
}


console.log(generateOddNumber(1, 100));
console.log(generateOddNumber(0, -10));
console.log(generateOddNumber(-7, -3));
console.log(generateOddNumber(-100, 100));
console.log(generateOddNumber(1, -1));
