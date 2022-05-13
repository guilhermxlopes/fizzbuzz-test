function start() {
  var inputUser = window.document.querySelector("input#userInput");
  var numberUser = Number(inputUser.value);
  var para = window.document.getElementsByTagName("p")[1];

  for (let i = 1; i <= numberUser; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      para.innerHTML = "FizzBuzz";
    } else if (i % 3 === 0) {
      para.innerHTML = "Fizz";
    } else if (i % 5 === 0) {
      para.innerHTML = "Buzz";
    } else para.innerHTML = "zZZzzZZZ";
  }
}
