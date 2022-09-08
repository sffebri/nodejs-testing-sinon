const fs = require("fs");
const path = require("path");
const ERROR_ZERO_OPERAND = "b tidak boleh sama dengan 0";



function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  if (b === 0) {
    throw ERROR_ZERO_OPERAND;
  }
  return a / b;
}

function pangkat(a, b) {
  return a ** b;
}

function modulus(a, b) {
  if (b === 0) {
    throw ERROR_ZERO_OPERAND;
  }
  return a % b;
}


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

/*function writeFile(filename) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, "utf-8", (err, hasil) => {
      // if (err) {
      //   return reject(err);
      // }
      resolve(hasil);
    });
  });
}*/

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
tambah,
kurang,
kali,
bagi,
pangkat,
modulus,
ERROR_ZERO_OPERAND,
readFile,
writeFile
};
