var array = ["s", "p", "r"];

// var rockPaperScissors = function () {
//   for (let i = 0; i < array.length; i++) {
//     return console.log(Math.random() * array[i]);
//   }
// };
// rockPaperScissors();
// s > p;
// r > s;
// p > r;
// for (let i = 0; i < array.length; i++) {
//   console.log(array[Math.floor(Math.random() * array.length) + 1]);
// }

var rockPaperScissors = function (x) {
  var array2 = array[Math.floor(Math.random() * array.length) + 1];
  // Tie Condition
  if (x === array2) {
    console.log("Tie");
    //Your Win condition
  } else if (
    x === "r" &&
    array2 === "s" &&
    x === "p" &&
    array2 === "r" &&
    x === "s" &&
    array2 === "p"
  ) {
    // If above conditions are not ment you lose
  } else {
    console.log("You lose");
  }
};
rockPaperScissors("p");
