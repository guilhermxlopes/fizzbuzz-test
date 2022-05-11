function start() {
  var inputUser = window.document.querySelector("input#input");
  var numberUser = Number(inputUser.value);
  var para = window.document.getElementsByTagName("p")[0];

  for (let i = 1; i <= numberUser; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      para.innerHTML = "FizzBuzz";
    }
  }
}
