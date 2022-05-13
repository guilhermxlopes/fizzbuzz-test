function start() {
  var inputUser = window.document.querySelector("input#userInput");
  var numberUser = Number(inputUser.value);
  var para = window.document.getElementsByTagName("p")[1];

  if (numberUser >= 1500 || numberUser < 0 || numberUser == " ") {
    alert("Review your input!");
  } else {
    for (let i = 1; i <= numberUser; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        para.innerHTML = "<strong>FizzBuzz</strong>";
      } else if (i % 3 === 0) {
        para.innerHTML = "<strong>Fizz</strong>";
      } else if (i % 5 === 0) {
        para.innerHTML = "<strong>Buzz</strong>";
      } else para.innerHTML = "<strong>zZZzzZZZ</strong>";
    }
  }
}
