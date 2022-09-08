const fs = require("fs");
const path = require("path");
const { assert } = require("console");
const { 
  kalkulator,
  readFile,
  writeFile} = require("./calculator");

const fileinput = "./lib/input.txt"
const fileoutput = "./output.txt";

async function main() {
  const res = await readFile(fileinput);
  let pisah = res.split(/(\d+)/);
  let data = await kalkulator(pisah[2], pisah[1], pisah[3]);
  const hasil = data.toString();
  const f2 = await writeFile(fileoutput, hasil);
}


main();