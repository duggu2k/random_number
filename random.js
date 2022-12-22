let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let result = document.getElementById("result");
console.log(result);

let num = Math.floor(Math.random() * 100) + 1;
let i = 0;
console.log(num);
// let user = prompt("guess a number: ");
// user = Number.parseInt(user);
  btn.addEventListener("click", (e) => {
    if (input.value < num) {
      i++;
      result.innerText = "guess a greater number";
      input.value = "";
    } else if (input.value == num) {
      i++;
      result.innerText = `${num}
    you have guessed a right number
    you took ${i} guesses`;
    } else if (input.value > 100) {
      i++;
      result.innerText = "guess a number between 0 to 100";
      input.value = "";
    } else {
      i++;
      result.innerText = "guess a smaller number";
      input.value = "";
    }
  });
