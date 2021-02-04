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
   

   let attempts = 1;

   const counter = function () {
      attempts--;
      console.log(attempts);
      if (attempts === 0) {
         let message = confirm('Попытки закончились, хотите сыграть еще ?');
         if (message === true) {
            attempts = 1;
            return start();
         } else {
            alert('Игра окончена');
         }
      } else {
         sortNumber(tmp);;

      }
   };


   const start = function() {
            
      const mysteryNum = Math.floor((Math.random() * 100) + 1);
      console.log(mysteryNum);
   
      let myNumber = prompt('Угадай число от 1 до 100 ');
      if (myNumber === null) {
         alert('Игра окончена');
         return;
      }
      

      let tmp = myNumber;

      const sortNumber = function() {
         console.log(tmp);
         
         if (!testNum(tmp) || tmp === '' ) {
            console.log(tmp);
            tmp = prompt('Введи число!');
            sortNumber(tmp);
            return;
         }

         if (tmp === null) {
            console.log('вышел');
            alert('Игра окончена');
            return;
         }

         if (tmp < mysteryNum) {
            tmp = prompt('Загаданное число больше, осталось попыток  ' + attempts);
            counter();

         } else if (tmp > mysteryNum) {
            tmp = prompt('Загаданное число меньше, осталось попыток  ' + attempts);
            counter();
         } else {
            console.log('угадал');
            let message = confirm('Поздравляю, Вы угадали! Хотели бы сыграть еще?');
            if (message === true) {
               attempts = 3;
               return start();
            }
         }




         
      };

      sortNumber();


   };

   start();


   


}

randomGame();
