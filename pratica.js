/*Questão 01*/

function saudacao(){
    console.log('olá, Lucas!')
}

saudacao();

/*outra forma de resolver*/

function greeting(name){
    console.log('olá, '+name+'!')
}

greeting("Lucas");

/*Questão 02*/

function dobro(numero){
    return numero * 2;
}

console.log(dobro(3));

/*outra forma de resolver*/

const dobrar = (num) => num * 2 ;
console.log(dobrar(3))

/*Questão 03*/

function media(a,b,c){
    return (a + b + c) / 3;
}

console.log(media(6,8,10));

/*Questão 04*/

function PARouIMPAR(number){
    if(number % 2 === 0){
        return "Par!";
    } else {
        return "Ímpar";
    }
}

/*Outra forma*/

const parOUimpar = (n) => {
    return n % 2 === 0? "par" : "impar";
}

console.log(parOUimpar(5))
console.log(parOUimpar(6))

/*Questão 05*/

function Maior(a,b){
    if(a > b){
        return ('É maior!')
    } else{
        return ('É menor!')
    }
}

console.log(Maior(5,7));

/*Outra forma*/

const maior = (x,y) =>{
    return x > y ? x : y;
}

console.log('É maior',(maior(2,11)));