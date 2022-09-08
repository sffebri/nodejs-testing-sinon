# Nodejs Testing sinon, chai

Mengecek fungsi kalkulator, terdiri dari:
- Pertambahan
- Pengurangan
- Perkalian
- Pembagian
- Perpangkatan
- Modulus
- read file
- write file

# Cara menjalankan
"untuk menalankan kalkulator"
- node . run-kalkulator 

output
file output.txt akan terisi hasil



"untuk menalankan test sinon dan chai"
- npm test 

output
Kalkulator menggunakan read & write file
    baca file
      √ harusnya bisa baca file
      √ harusnya bisa baca file 2
      filenya tidak bisa dibaca
        √ seharusnya melempar error file tidak bisa dibaca
    Menulis file
      √ Barusnya Bisa write file
      filenya tidak bisa ditulis
        √ seharusnya melempar error file tidak bisa ditulis
    mengecek fungsi kalkulator secara umum
      √ seharusnya bisa pertambahan
      √ seharusnya bisa pengurangan
      √ seharusnya bisa perkalian
      √ seharusnya bisa pembagian
      √ seharusnya bisa pemangkatan
      √ seharusnya bisa modulus
      Pembagian
        kalau b nya 0
          √ harusnya nge-throw error
      Modulus
        kalau b nya 0
          √ harusnya nge-throw error
    mengecek fungsi kalkulator dengan cara file
      Masalah Input
        √ Throw Error String
      Pertambahan
        √ Bisa menambakan 2 bilangan
      Pengurangan
        √ Bisa mengurang 2 bilangan
      Perkalian
        √ Bisa mengalikan 2 bilangan
      Pembagian
        √ Bisa membagikan 2 bilangan
        kalau b nya 0
          √ harusnya nge-throw error
      Modulus
        √ Bisa modulus 2 bilangan
        kalau b nya 0
          √ harusnya nge-throw error
      Pemangkatan
        √ Bisa mengalikan 2 bilangan
      Operator tidak valit
        kalau operatornya tidak valid
          √ harusnya nge-throw error


  23 passing (107ms)

---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |
 calculator.js |     100 |      100 |     100 |     100 |
---------------|---------|----------|---------|---------|-------------------


