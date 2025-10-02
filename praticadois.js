/*Questão 01*/

/*Contagem de 1 a 50*/
function contagem(){
    for (let x = 1; x <= 50; x++){
        console.log(`\nContagem de números de 1 a 50: ${x}\n`);
    }
}

contagem();

/*Questão 02*/

/*Imprimindo números pares até 100*/

function par(){
    for(let i = 2; i <= 100; i += 2){
        console.log(i);
    }
}

par();

/*Questão 03*/

/*Multiplos de 5 de 1 a 100*/

function multiplos(){
    for(let m = 1; m <= 100; m++){
        if( m % 5 === 0){
            console.log(m);
        }
    }
}

multiplos();

/*Questão 04*/

/**
 * 
 * @param {number} numero 
 * @returns {boolean} retorna true se for primo.
 */

function primos(numero){
    // excluindo numeros negativos

    if(numero < 2){ 
        return false;
    }

    const limite = Math.sqrt(numero);

    for(let n = 2; n <= limite; n++){
        /*Se tiver algum divisor ele
        irá logo "excluir"*/

        if(numero % n === 0){
            return false;
        }
    }

    /*Aqui ele confirma que o número é primo*/
    return true;
}
    
    const LIMITE = 50;
    const primosEncontrados = [];

    console.log(`\nBuscando números primos até ${LIMITE}...\n`);

    for(let n = 1; n <= LIMITE; n++){
        if(primos(n)){
            
            primosEncontrados.push(n);
        }
    }
    console.log(`números primos: ${primosEncontrados.join(', ')}`);

