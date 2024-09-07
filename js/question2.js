// QUESTION 2

function verifyLetterA(inputString) {
  const lowerString  = inputString.toLowerCase();
  
  let counter = 0;

  for (let i = 0; i < lowerString.length; i++) {
      if (lowerString[i] === 'a') {
        counter++;
      }
  }

  let result;

  if (counter > 0) {
    result = `A letra "a" aparece ${counter} vezes na string.`;
  } else {
    result = 'A letra "a" não aparece na string.';
  }

  document.getElementById("button-two").addEventListener("click", function() {
    document.getElementById("replay-two").innerText = result;
  })
}

const inputString = "Alan Pereira de Freitas";
verifyLetterA(inputString);