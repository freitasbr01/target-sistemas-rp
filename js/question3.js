// QUESTION 3

function valueVariableSum() {
  let INDEX = 12;
  let SUM = 0;
  let K = 1;

  while (K < INDEX) {
    K = K + 1;
    SUM = SUM + K;
  }

  return SUM;
}

document.getElementById("button-three").addEventListener("click", function() {
  document.getElementById("replay-three").innerText = "O valor da variável SOMA é " + valueVariableSum()
})
