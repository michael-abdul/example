//  Module package CORE => node.js ni ichiga install qilib berilgan packagelar modeullar
// setTimeout(function(){
//  console.log("ishga tushdi");
// },5000); // 2ta parametr oladi: 1-function, 2-Time ni oladi
// let number = 0;
// setInterval(() => {
//     console.log("hisob" , number);
//     number++;
// }, 0);
const fs = require('fs');  //core packagelarini call qilishimiz kerak (require) fs objetni bir qator methodlari , documention buyicha 2ta parametr pass qilinadi 1:"start": "node index.js",2: utf protokoli qullanildi
const data = fs.readFileSync('./input.txt','utf8');  

console.log(data);
console.log("***************");




fs.writeFileSync("./input.txt",`${data} \n\t\t by Michael`);
const new_data = fs.readFileSync("./input.txt","utf8");  

console.log(new_data);



//  Module package EXTERNAL
// Module package FILE