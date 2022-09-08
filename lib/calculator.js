const fs = require("fs");
const path = require("path");
const ERROR_ZERO_OPERAND = "b tidak boleh sama dengan 0";
const ERROR_INPUT_STRING = "Input merupakan String";
const ERROR_OPERATOR = "Operator aritmatika tidak valit";



function tambah(a, b) {
  return (parseFloat(a) + parseFloat(b));
}

function kurang(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function kali(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function bagi(a, b) {
  if (b === 0) {
    throw ERROR_ZERO_OPERAND;
  }
  return parseFloat(a) / parseFloat(b);
}

function pangkat(a, b) {
  return parseFloat(a) ** parseFloat(b);
}

function modulus(a, b) {
  if (b === 0) {
    throw ERROR_ZERO_OPERAND;
  }
  return parseFloat(a) % parseFloat(b);
}

const kalkulator = (operator, bil1, bil2) => {
  let result = "";
  if (bil1 === ''  || bil2 === '') {
    throw ERROR_INPUT_STRING;
  }
  switch (operator) {
    case "+":
      result = tambah(bil1, bil2);
      break;

    case "-":
      result = kurang(bil1, bil2);
      break;

    case "/":
      result = bagi(bil1, bil2);
      break;
    case "*":
      result = kali(bil1, bil2);
      break;
    case "**":
      result = pangkat(bil1, bil2);
      break;
    case "%":
      result = modulus(bil1, bil2);
      break;
    default:
    throw ERROR_OPERATOR;
  }
  return result;
};


function readFile(filename){
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}


function writeFile(filename, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.resolve(__dirname, filename), data, "utf-8", (err) => {
      if (err) {
        return reject(err);
      }
      return resolve("Done!");
    });
  });
}


module.exports = { 
kalkulator,
tambah,
kurang,
kali,
bagi,
pangkat,
modulus,
ERROR_ZERO_OPERAND,
ERROR_INPUT_STRING,
ERROR_OPERATOR,
readFile,
writeFile
};
