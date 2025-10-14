/*Questão 01*/
class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descricao(){
        return `Carro: ${this.marca}, ${this.modelo}, ${this.ano}`
    }
}

const carro1 = new Carro('Toyota', 'Corolla', 2020);
const carro2 = new Carro('Honda', 'Civic', 2015);
const carro3 = new Carro('Ford', 'Focus', 2001);

console.log(carro1.descricao());
console.log(carro2.descricao());
console.log(carro3.descricao());

/*Questão 02*/

class Conta{
    constructor(titular){
        this.titular = titular;
        this.saldo = 0 ;
    }

    depositar(valor){
        if(valor > 0 ){
            this.saldo += valor;
            console.log(`Deposito de R$${valor} foi realizado!`)
        } else {
            console.log('Déposito inválido!');
        }
    }

    sacar(valor){
        if(valor <= 0){
            console.log('Saque inválido!');
        } else if ( valor > this.saldo ){
            console.log('Saldo insuficiente!');
        } else {
            this.saldo -= valor;
            console.log(`Saque atual de ${valor} realizado!`);
        }
    }

    verSaldo(){
        console.log(`Saldo atual de sua conta bancaria, ${this.titular}: R$${this.saldo}`);
    }
}

const conta = new Conta('Lucas');

conta.verSaldo();
conta.depositar(500);
conta.verSaldo();
conta.sacar(200);
conta.verSaldo();
conta.sacar(800);


/*Questão 03*/
class Pessoa{
    constructor(Nome, Idade){
        this.Nome = Nome;
        this.Idade = Idade;
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.Nome} e tenho ${this.Idade} de idade!`);
    }
}

const pessoa1 = new Pessoa('Lucas', 26);
const pessoa2 = new Pessoa('Luana', 24);

pessoa1.apresentar();
pessoa2.apresentar();