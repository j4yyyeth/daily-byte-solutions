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

// 9/23/2023

function addBinary(num1, num2) {
  let result = "";
  let carryOver = 0;

  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    const sum = digit1 + digit2 + carryOver;
    if (sum === 0 || sum === 1) {
      result = sum + result;
      carryOver = 0;
    } else if (sum === 2) {
      result = "0" + result;
      carryOver = 1;
    } else {
      result = "1" + result;
      carryOver = 1;
    }
    console.log("RESULT: ", result);
    i--;
    j--;
  }
  if (carryOver === 1) {
    result = "1" + result;
  }
  return result;
}

// 9/24/2023

function longestCommonPrefix(arr) {
  let common = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let j = 0;
    while (j < arr[i].length && common[j] === arr[i][j]) {
      j++;
    }
    common = common.substring(0, j);
  }
  return common;
}

// 9/25/2023

function validPalindromeRemoval(str) {
  for (let i = 0; i < str.length; i++) {
    let newStr = str.replace(str[i], "");
    if (newStr.split("").reverse().join("") === newStr) {
      return true;
    }
  }
  return false;
}

// 9/26/2023

function twoSum(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return true;
      }
    }
  }
  return false;
}

// 9/27/2023

function jewelsAndStones(jewels, stones) {
  let total = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        total += 1;
      }
    }
  }
  return total;
}

// 9/28/2023
