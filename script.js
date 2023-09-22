// 9/22/2023

function validCapitals(word) {
  for (let i = 0; i < word.length; i++) {
    let count = 0;
    if (word[i] === word[i].toUpperCase()) {
      count++;
    }
    if (count === word.length) {
      return true;
    }
    if (word[0] === word[0].toUpperCase() && count === 1) {
      return true;
    }
    return false;
  }
}
