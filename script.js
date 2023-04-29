let result = document.getElementById("result");

function insertNumber(number) {
  result.value += number;
}

function insertSymbol(symbol) {
  result.value += symbol;
}

function clearResult() {
  result.value = "";
}

function deleteNumber() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  result.value = eval(result.value);
}
