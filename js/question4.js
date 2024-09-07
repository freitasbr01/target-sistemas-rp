// QUESTION 4

function sequenceAnswers() {
  let sequenceA = [1, 3, 5, 7];
  let nextA = sequenceA[sequenceA.length - 1] + 2;

  let sequenceB = [2, 4, 8, 16, 32, 64];
  let nextB = sequenceB[sequenceB.length - 1] * 2;

  let sequenceC = [0, 1, 4, 9, 16, 25, 36];
  let nextC = (Math.sqrt(sequenceC[sequenceC.length - 1]) + 1) ** 2;

  let sequenceD = [4, 16, 36, 64];
  let nextD = (Math.sqrt(sequenceD[sequenceD.length - 1]) + 2) ** 2;

  let sequenceE = [1, 1, 2, 3, 5, 8];
  let nextE = sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2];

  let sequenceF = [2, 10, 12, 16, 17, 18, 19];
  let nextF = sequenceF[sequenceF.length - 1] + 1;

  return {
    a: nextA,
    b: nextB,
    c: nextC,
    d: nextD,
    e: nextE,
    f: nextF
  };
}

document.getElementById("button-four").addEventListener("click", function() {
  const answers = sequenceAnswers();
  document.getElementById("replay-four").innerHTML = `
    a) ${answers.a}<br>
    b) ${answers.b}<br>
    c) ${answers.c}<br>
    d) ${answers.d}<br>
    e) ${answers.e}<br>
    f) ${answers.f}
  `;
});
