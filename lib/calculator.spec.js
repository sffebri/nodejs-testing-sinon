const { assert } = require("console");
const { 
  tambah,
  kurang,
  kali, 
  bagi, 
  pangkat, 
  modulus, 
  ERROR_ZERO_OPERAND,
  readFile,
  writeFile} = require("./calculator");
const { expect } = require("chai");
const should = require("chai").should();
const fs = require('fs');
const sinon = require("sinon");

describe("calculator", function () {
  it("seharusnya bisa pertambahan", function(){
    expect(tambah(2, 3)).to.equal(5);
    expect(tambah(2, -3)).to.equal(-1);
  });

  it("seharusnya bisa pengurangan", function(){
    expect(kurang(2, 5)).to.equal(-3);
    expect(kurang(10, 3)).to.equal(7);
    expect(kurang(10, -3)).to.equal(13);
  });

  it("seharusnya bisa perkalian", function(){
    expect(kali(6, 3)).to.equal(18);
    expect(kali(4, -3)).to.equal(-12);
  });

 
  it("seharusnya bisa pembagian", function(){
    expect(bagi(6, 3)).to.equal(2);
  });

  it("seharusnya bisa pemangkatan", function(){
    expect(pangkat(4, 2)).to.equal(16);
    expect(pangkat(4, .5)).to.equal(2);

  });

  it("seharusnya bisa modulus", function(){
    expect(modulus(10, 2)).to.equal(0);
    expect(modulus(10, 4)).to.equal(2);
  });

  describe("Pembagian", function(){
    context("kalau b nya 0", function(){
      it("harusnya nge-throw error", function(){
         function bagiByZero(){
          bagi(12, 0);
         }
         expect(bagiByZero).to.throw(ERROR_ZERO_OPERAND);
      });
    });
  });

  describe("Modulus", function(){
    context("kalau b nya 0", function(){
      it("harusnya nge-throw error", function(){
         function modByZero(){
          modulus(12, 0);
         }
         expect(modByZero).to.throw(ERROR_ZERO_OPERAND);
      });
    });
  });
  describe("baca file", function () {
    const filename = "input.txt";
    const data = "1+1";

    beforeEach(function() {
      fs.writeFileSync(filename, data); // precon
    });

    it("harusnya bisa baca file", async function () {
      const val = await readFile(filename); // reproduction step
      expect(val).to.be.eq(data); // validation
    });

    it("harusnya bisa baca file 2", function (done) {
      readFile(filename)
        .then(function (val) {
          expect(val).to.be.eq(data);
        })
        .finally(function () {
          done();
        });
    });

    context("filenya tidak bisa dibaca", function() {
      after(function() {
        sinon.restore();
      });

      it("seharusnya melempar error file tidak bisa dibaca", async function() {
        const ERROR_READ_FILE = "gagal baca file";
        sinon.stub(fs, "readFile").yields(ERROR_READ_FILE, null);
        let error;
        try {
          await readFile("hahahahaha.txt");
        } catch (err) {
          error = err;
        }
        expect(error).to.be.eq(ERROR_READ_FILE);
      })
    });
  });

  describe("Menulis file", function(){
    const filename2 = "output.txt";
    const data2 = "eheh";

    it("Barusnya Bisa write file", async function () {
      //pake fake
      //var fakeAsync = sinon.fake.yieldsAsync(null, '1+1');
      //sinon.replace(fs, 'writeFile', fakeAsync);
      const res = await writeFile(filename2, data2);
      res.should.equal('Done!');
      sinon.restore();
    });

    context("filenya tidak bisa ditulis", function() {

      it('seharusnya melempar error file tidak bisa ditulis', async function () {
        const ERROR_WRITE_FILE = "gagal nulis file";
        sinon.stub(fs, "writeFile").yields(ERROR_WRITE_FILE, null);
        let error;
        try {
          await writeFile(filename2, data2);
        } catch (err) {
          error = err;
        }
        expect(error).to.be.eq(ERROR_WRITE_FILE);
      });

    });
  });



});
