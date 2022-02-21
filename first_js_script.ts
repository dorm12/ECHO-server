import * as fs from 'fs';

function shalom(){
}

const m: fs.Mode = 666
fs.chmod('key1', m, shalom)

// console.log("yom ravii")
// let lastnum = 1;
// let currentnum = 1;
// let temp = 0;
// for (let i=1; i < 5; i++){
//     temp = currentnum;
//     currentnum = lastnum + currentnum;
//     lastnum = temp;
//     console.log(currentnum);
// }

