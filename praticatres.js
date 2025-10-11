const prompt = require('prompt-sync')();

console.log("***Calculadora***");

let x = prompt('Digite um número: ');

if(x === ''){
    console.log('Você não digitou nada!')
} else {
    console.log(x * 1);
    console.log(x * 2);
    console.log(x * 3);
    console.log(x * 4);
    console.log(x * 5);
    console.log(x * 6);
    console.log(x * 7);
    console.log(x * 8);
    console.log(x * 9);
    console.log(x * 10);
}

/*Feito com for*/

for( let i = 1; i <= 10; i++){
    console.log(`${x} x ${i} = ${x * i}`);
}