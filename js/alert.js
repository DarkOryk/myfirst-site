'use strict';

function chg () {

  let index = document.getElementById("caldi").options.selectedIndex;
  let val =  document.getElementById("caldi").options[index].value;

    return val;
}

function someFunc(){

  let a =  +document.getElementById("txt").value;
  let b =  +document.getElementById("tx2").value;
  let d = chg ();
  let c;
   
switch (d) {
    case '+':
      c = a + b;
        document.getElementById('result_text').textContent = c;
          break;
      case '-':
      c = a - b;
        document.getElementById('result_text').textContent = c;
          break;
    case '*':
      c = a * b;
        document.getElementById('result_text').textContent = c;
          break;
    case '/':
      c = a / b;
        document.getElementById('result_text').textContent = c;
          break;
  }
}

// document.getElementById("btn").onclick = someFunc;
// document.getElementById("btnStart").onclick = startTheGame;
// document.getElementById("btnClear").onclick = clearBoard;

// function clearBoard () {
//   document.getElementById('btn1').textContent = "[0][0]";
//   document.getElementById('btn2').textContent = "[0][1]";
//   document.getElementById('btn3').textContent = "[0][2]";
//   document.getElementById('btn4').textContent = "[1][0]";
//   document.getElementById('btn5').textContent = "[1][1]";
//   document.getElementById('btn6').textContent = "[1][2]";
//   document.getElementById('btn7').textContent = "[2][0]";
//   document.getElementById('btn8').textContent = "[2][1]";
//   document.getElementById('btn9').textContent = "[2][2]";
// };

// function startTheGame () {

//   const cell_state = {
//     EMPTY: 0,
//     CROSS: 1,
//     ZERO:  2
// }

// let GAME = [
//   [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY],
//   [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY],
//   [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY]
// ];

//   function check () {

//     /* 
//         [0][0]  [0][1]  [0][2]
//         [1][0]  [1][1]  [1][2]
//         [2][0]  [2][1]  [2][2]
//     */
   
//       return GAME[0][0] != cell_state.EMPTY && GAME[0][0] == GAME[0][1] && GAME[0][0] == GAME[0][2] ||
//       GAME[1][0] != cell_state.EMPTY && GAME[1][0] == GAME[1][1] && GAME[1][0] == GAME[1][2] ||
//       GAME[2][0] != cell_state.EMPTY && GAME[2][0] == GAME[2][1] && GAME[2][1] == GAME[2][2] ||
    
//       GAME[0][0] != cell_state.EMPTY && GAME[0][0] == GAME[1][0] && GAME[0][0] == GAME[2][0] ||
//       GAME[0][1] != cell_state.EMPTY && GAME[0][1] == GAME[1][1] && GAME[0][1] == GAME[2][1] ||
//       GAME[0][2] != cell_state.EMPTY && GAME[0][2] == GAME[1][2] && GAME[1][2] == GAME[2][2] ||
    
//       GAME[0][0] != cell_state.EMPTY && GAME[0][0] == GAME[1][1] && GAME[1][1] == GAME[2][2] ||
//       GAME[2][0] != cell_state.EMPTY && GAME[2][0] == GAME[1][1] && GAME[1][1] == GAME[0][2]
  
//     }

// let gameEnd = 0;

// oxrana: while (gameEnd <= 5) {

//   for (; ;) {

//     alert('Ходить гравець 1 (хрестики)')

//     let stepCrossX = prompt('Введіть крок [?] [ ] в форматі');
//     if (stepCrossX === null) {
//       break oxrana;
//     }

//     let stepCrossY = prompt('Введіть крок [ ] [?] в форматі');
//     if (stepCrossY === null) {
//       break oxrana;
//     }

//     if (GAME[stepCrossX][stepCrossY] == cell_state.EMPTY) {

//       GAME[stepCrossX][stepCrossY] = cell_state.CROSS;

//       if ( stepCrossX === "0" && stepCrossY === "0" ) {
//         document.getElementById('btn1').textContent = "X";
//       }
//       else if ( stepCrossX === "0" && stepCrossY === "1" ) {
//         document.getElementById('btn2').textContent = "X";
//       }
//       else if ( stepCrossX === "0" && stepCrossY === "2" ) {
//         document.getElementById('btn3').textContent = "X";
//       }
//       else if ( stepCrossX === "1" && stepCrossY === "0" ) {
//         document.getElementById('btn4').textContent = "X";
//       }
//       else if ( stepCrossX === "1" && stepCrossY === "1" ) {
//         document.getElementById('btn5').textContent = "X";
//       }
//       else if ( stepCrossX === "1" && stepCrossY === "2" ) {
//         document.getElementById('btn6').textContent = "X";
//       }
//       else if ( stepCrossX === "2" && stepCrossY === "0" ) {
//         document.getElementById('btn7').textContent = "X";
//       }
//       else if ( stepCrossX === "2" && stepCrossY === "1" ) {
//         document.getElementById('btn8').textContent = "X";
//       }
//       else if ( stepCrossX === "2" && stepCrossY === "2" ) {
//         document.getElementById('btn9').textContent = "X";
//       }
//       break;
//     }

//     else if (alert('Ви вказали зайняту клітинку. Спробуйте ще.'))
//     continue;
//   }

//   if ( check() == true ) {

//     alert("Гравець 1 (хрестики) - Переміг!!!")
//     break;
//   }

//   if (gameEnd === 4) {
//     break oxrana;
//   }

//   for (; ;) {
//     alert('Ходить гравець 2 (нулики)')

//     let stepCrossX = prompt('Введіть крок [?] [ ] в форматі');
//     if (stepCrossX === null) {
//       break oxrana;
//     }
//     let stepCrossY = prompt('Введіть крок [ ] [?] в форматі');
//     if (stepCrossY === null) {
//       break oxrana;
//     }

//     if (GAME[stepCrossX][stepCrossY] == cell_state.EMPTY) {

//       GAME[stepCrossX][stepCrossY] = cell_state.ZERO;

//       if ( stepCrossX === "0" && stepCrossY === "0" ) {
//         document.getElementById('btn1').textContent = "O";
//       }
//       else if ( stepCrossX === "0" && stepCrossY === "1" ) {
//         document.getElementById('btn2').textContent = "O";
//       }
//       else if ( stepCrossX === "0" && stepCrossY === "2" ) {
//         document.getElementById('btn3').textContent = "O";
//       }
//       else if ( stepCrossX === "1" && stepCrossY === "0" ) {
//         document.getElementById('btn4').textContent = "O";
//       }
//       else if ( stepCrossX === "1" && stepCrossY === "1" ) {
//         document.getElementById('btn5').textContent = "O";
//       }
//       else if ( stepCrossX === "1" && stepCrossY === "2" ) {
//         document.getElementById('btn6').textContent = "O";
//       }
//       else if ( stepCrossX === "2" && stepCrossY === "0" ) {
//         document.getElementById('btn7').textContent = "O";
//       }
//       else if ( stepCrossX === "2" && stepCrossY === "1" ) {
//         document.getElementById('btn8').textContent = "O";
//       }
//       else if ( stepCrossX === "2" && stepCrossY === "2" ) {
//         document.getElementById('btn9').textContent = "O";
//       }
//       break;
//     }
      
//     else (alert('Ви вказали зайняту клітинку. Спробуйте ще.'))
//     continue;
//   }

//   if ( check() == true ) { 

//     alert("Гравець 2 (нулики) - Переміг!!!")
//     break;
//   }

//   gameEnd++;
// }
// }

document.getElementById("btn").onclick = someFunc;
document.getElementById("btnCross").onclick = valueChangeToCROSS;
document.getElementById("btnZero").onclick = valueChangeToZERO;
document.getElementById("btnClear").onclick = clearField;

let checkValue = "rofl";

function clearField () {

  GAME = [
    [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY],
    [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY],
    [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY]
    ];

  clearBoard ();
  checkValue = "rofl";

}

function valueChangeToCROSS () {

   checkValue = "CROSS";
}

function valueChangeToZERO () {

  checkValue = "ZERO";
}

function valueChangeToEMPTY () {

  checkValue = "rofl";
}

const cell_state = {
  EMPTY: 0,
  CROSS: 1,
  ZERO:  2
}

let GAME = [
[cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY],
[cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY],
[cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY]
];

document.getElementById('btn1G').onclick = function(){btnG(0, 0, checkValue);};
document.getElementById('btn2G').onclick = function(){btnG(0, 1, checkValue);};
document.getElementById('btn3G').onclick = function(){btnG(0, 2, checkValue);};
document.getElementById('btn4G').onclick = function(){btnG(1, 0, checkValue);};
document.getElementById('btn5G').onclick = function(){btnG(1, 1, checkValue);};
document.getElementById('btn6G').onclick = function(){btnG(1, 2, checkValue);};
document.getElementById('btn7G').onclick = function(){btnG(2, 0, checkValue);};
document.getElementById('btn8G').onclick = function(){btnG(2, 1, checkValue);};
document.getElementById('btn9G').onclick = function(){btnG(2, 2, checkValue);};

function btnG (a, b, value) {

if (value === "CROSS") {

  if (GAME[a][b] == cell_state.EMPTY) {
    GAME[a][b] = cell_state.CROSS; 

  if (a === 0 && b === 0) {
    document.getElementById('btn1G').textContent = "X";
      value ="";
  }
  if (a === 0 && b === 1) {
    document.getElementById('btn2G').textContent = "X";
  }
  if (a === 0 && b === 2) {
    document.getElementById('btn3G').textContent = "X";
  }
  if (a === 1 && b === 0) {
    document.getElementById('btn4G').textContent = "X";
  }
  if (a === 1 && b === 1) {
    document.getElementById('btn5G').textContent = "X";
  }
  if (a === 1 && b === 2) {
    document.getElementById('btn6G').textContent = "X";
  }
  if (a === 2 && b === 0) {
    document.getElementById('btn7G').textContent = "X";
  }
  if (a === 2 && b === 1) {
    document.getElementById('btn8G').textContent = "X";
  }
  if (a === 2 && b === 2) {
    document.getElementById('btn9G').textContent = "X";
  } 
  checkValue = "rofl";
}

}
if ( check() == true ) {

    if (confirm("Перемогли хрестики ^_^. Ви бажаєте очистити поле, і зіграти ще раз?")) {
    GAME = [
      [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY],
      [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY],
      [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY]
      ];
      clearBoard();
    }
}

if (value == "ZERO") {

  if (GAME[a][b] == cell_state.EMPTY) {
  GAME[a][b] = cell_state.ZERO;

  if (a === 0 && b === 0) {
    document.getElementById('btn1G').textContent = "O";
  }
  if (a === 0 && b === 1) {
    document.getElementById('btn2G').textContent = "O";
  }
  if (a === 0 && b === 2) {
    document.getElementById('btn3G').textContent = "O";
  }
  if (a === 1 && b === 0) {
    document.getElementById('btn4G').textContent = "O";
  }
  if (a === 1 && b === 1) {
    document.getElementById('btn5G').textContent = "O";
  }
  if (a === 1 && b === 2) {
    document.getElementById('btn6G').textContent = "O";
  }
  if (a === 2 && b === 0) {
    document.getElementById('btn7G').textContent = "O";
  }
  if (a === 2 && b === 1) {
    document.getElementById('btn8G').textContent = "O";
  }
  if (a === 2 && b === 2) {
    document.getElementById('btn9G').textContent = "O";
  } 
  checkValue = "rofl";
}

  if ( check() == true ) {

    if (confirm("Перемогли нулики ^_^. Ви бажаєте очистити поле, і зіграти ще раз?")) {
      GAME = [
        [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY],
        [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY],
        [cell_state.EMPTY, cell_state.EMPTY, cell_state.EMPTY]
        ];
        clearBoard();
      }
  }
}
}

function clearBoard () {
  document.getElementById('btn1G').textContent = "?";
  document.getElementById('btn2G').textContent = "?";
  document.getElementById('btn3G').textContent = "?";
  document.getElementById('btn4G').textContent = "?";
  document.getElementById('btn5G').textContent = "?";
  document.getElementById('btn6G').textContent = "?";
  document.getElementById('btn7G').textContent = "?";
  document.getElementById('btn8G').textContent = "?";
  document.getElementById('btn9G').textContent = "?";
};

  function check () {

    /* 
        [0][0]  [0][1]  [0][2]
        [1][0]  [1][1]  [1][2]
        [2][0]  [2][1]  [2][2]
    */
   
      return GAME[0][0] != cell_state.EMPTY && GAME[0][0] == GAME[0][1] && GAME[0][0] == GAME[0][2] ||
      GAME[1][0] != cell_state.EMPTY && GAME[1][0] == GAME[1][1] && GAME[1][0] == GAME[1][2] ||
      GAME[2][0] != cell_state.EMPTY && GAME[2][0] == GAME[2][1] && GAME[2][1] == GAME[2][2] ||
    
      GAME[0][0] != cell_state.EMPTY && GAME[0][0] == GAME[1][0] && GAME[0][0] == GAME[2][0] ||
      GAME[0][1] != cell_state.EMPTY && GAME[0][1] == GAME[1][1] && GAME[0][1] == GAME[2][1] ||
      GAME[0][2] != cell_state.EMPTY && GAME[0][2] == GAME[1][2] && GAME[1][2] == GAME[2][2] ||
    
      GAME[0][0] != cell_state.EMPTY && GAME[0][0] == GAME[1][1] && GAME[1][1] == GAME[2][2] ||
      GAME[2][0] != cell_state.EMPTY && GAME[2][0] == GAME[1][1] && GAME[1][1] == GAME[0][2]
  
    }


// function newUser(name, age, permit) {
  
//   return {
//     name,
//     age,
//     permit
//   };
// }

//    let user = newUser (prompt("Введіть ваше ім'я", ""),prompt("Введіть ваше ім'я", ""),prompt("Введіть ваше ім'я", ""));
//   newUser(user.name,user.permit,name.age)
//   return user.name
// }

// alert (neafsza())

// if (user.permit == "Адміністратор") {
//   alert("Ти довго блукав серед зоряного простору, на хвилях світла і хмар пилу, і тепер повертаєшся додому.")
// }
// else { 
//   alert("В подальшому доступі відмовлено.")
// }

// function User(name, age, height) {

//   this.name = name;
//   this.age = age;
//   this.height = height;

//   this.maxStepDistanse = function() {

//     let maxStep;

//     maxStep = this.height - 55; 
//       return maxStep;
//   };
// }

// function firstUser () {

//   let user1 = new User( prompt('Як вас звати',''), +prompt('Ваш вік','' ), +prompt( 'Ваш зріст (см)','') );

//   alert (`Ваші параметри: ${user1.name}, ${user1.age} років, ${user1.height} сантиметрів. Максимальна довжина кроку = ${ user1.maxStepDistanse()} см.`);
// }

// firstUser();

// function GeneratorMemsNames() {
//   let firstNameGenerator = ["Олег", "Василь", "Юра", "Любомир", "Степан", "Роман", "Євген"];
//   let secondNameGenerator = ["Сверхразум", "Асемблер", "QA", "Дизайнер", "Осуман", "Річ", "Янкі Го Хоум"];

//   {
//     let tmp_2nd_name = secondNameGenerator.slice();
//     for (let i = 0; i < Math.min(firstNameGenerator.length, secondNameGenerator.length); ++i) {
//       let rand_i = Math.floor(Math.random() * tmp_2nd_name.length);

//       console.log(firstNameGenerator[i] + " " + tmp_2nd_name[rand_i]);
//       tmp_2nd_name.splice(rand_i, 1);
//     }
//   }


// }

// GeneratorMemsNames();