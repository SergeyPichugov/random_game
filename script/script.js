'use strict';


function randomGame() {

   const isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
   };

   const testNum = function(x) {
      if (isNumber(x) || x > 100 || x < 1) {
         return true;
      } else {
         return false;
      }
   };

   const mysteryNum = Math.floor((Math.random() * 100) + 1);
   console.log(mysteryNum);

   let myNumber = prompt('Угадай число от 1 до 100 ');
   if (myNumber === null) {
      alert('Игра окончена');
      return;
   }
   

   const start = function() {

      let tmp = myNumber;

      const sortNumber = function() {
         console.log(tmp);
         
         if (!testNum(tmp)) {
            tmp = prompt('Введи число!');
            sortNumber(tmp);
            return;
         }

         if (tmp === 0) {
            console.log('вышел');
            alert('Игра окончена');
            return;
         }

         if (tmp < mysteryNum) {
            tmp = prompt('Загаданное число больше');
            sortNumber(tmp);

         } else if (tmp > mysteryNum) {
            tmp = prompt('Загаданное число меньше');
            sortNumber(tmp);
         } else {
            console.log('угадал');
            alert('Поздравляю, Вы угадали');
         }
      };

      sortNumber();


   };

   start();
   
}

randomGame();
