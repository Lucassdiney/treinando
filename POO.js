/*Questão 01
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

Questão 02

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


Questão 03
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

Questão 04

class Pessoa{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    acao(){
        console.log(`Meu nome é ${this.name} e tenho ${this.age} anos.`);
    }
}

class Aluno extends Pessoa {
    constructor(name, age, curso) {
        super(name, age);
        this.curso = curso;
    }

    estudos(){
        console.log(`${this.name} está estudando ${this.curso}!`)
    }
}

const aluno1 = new Aluno('Lucas', 26, 'Engenharia de software');
aluno1.acao();
aluno1.estudos();

Questão 05

class Produto{
    constructor(nick, price, stock){
        this.nick = nick;
        this.price = price;
        this.stock = stock;
    }

    vender(quantidade){
        if( quantidade <= 0){
            console.log('quantidade inválida para venda!');
        } else if (quantidade > this.stock){
            console.log(`Estoque insuficiente! Tempos apenas ${this.stock} unidades de ${this.nick}!`);
        } else {
            this.stock -= quantidade;
            const total = this.price * quantidade;
            console.log(`Venda de ${quantidade} ${this.nick} foi realizada! Total: R$${total} reais!`);
        }
    }

    repor(){
        if( quantidade > 0 ){
            this.stock += quantidade;
        }
    }

    mostrarEstoque(){
        console.log(`Estoque atual de ${this.nick}: ${this.stock} unidades!`);
    }
}

const produto1 = new Produto('camiseta', 50, 10);

produto1.mostrarEstoque();
produto1.vender(3);

Questão 06

class Retangulo{
    constructor(largura, altura){
        this.altura = altura;
        this.largura = largura;
    }

    calcularArea(){
        return this.largura * this.altura;
    }

    calcularPerimetro(){
        return 2 * (this.altura + this.largura);
    }
}

const retangulo1 = new Retangulo(3,7);

console.log(`Largura: ${retangulo1.largura}`);
console.log(`Altura: ${retangulo1.altura}`);
console.log(`Área: ${retangulo1.calcularArea()}`);
console.log(`Perimetro: ${retangulo1.calcularPerimetro()}`);

Questão 07

class Funcionario{
    constructor(nome,cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    aumentarSalario(porcentagem){
        if (porcentagem > 0){
            const aumento = (this.salario * porcentagem) / 100;
            this.salario += aumento;
            console.log(`Salário aumentado em ${porcentagem}%. Seu novo salário é ${this.salario.toFixed(2)}!\n`)
        }
    }

    mostrarDados(){
        console.log(`Funcionário: ${this.nome}\n`);
        console.log(`Cargo: ${this.cargo}\n`);
        console.log(`Salário: R$${this.salario.toFixed(2)}\n`);
    }
}

const funcao = new Funcionario('Lucas', 'Desenvolvedor', 5435);

funcao.mostrarDados();
funcao.aumentarSalario(10);
funcao.mostrarDados();


Questão 08

class Livro{
    constructor(titulo, autor, paginas, lido){
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }

    ler(){
        this.lido = true;
        console.log(`Você terminou de ler "${this.titulo}".\n`);
    }

    mostrarStatus(){
        if (this.lido) {
            console.log(`O livro "${this.titulo}" já foi lido!\n`);
        }   else {
            console.log(`O livro "${this.titulo}" não foi lido!\n`);
        }
    }
}

const livro1 = new Livro('Clean code', 'Robert C. Martin', 464);

livro1.mostrarStatus();

livro1.ler();

livro1.mostrarStatus();

Questão 09

class Calculadora{
        somar(a,b){
            return a + b;
        }
}

const calculo = new Calculadora();

console.log('Soma:', calculo.somar(11,4));

Questão 10

class Filme{
    constructor(titulo, diretor, ano, avaliacao){
        this.titulo = titulo;
        this.diretor = diretor;
        this.ano = ano;
        this.avaliacao = avaliacao;
    }

    avaliarNota(nota){
        if(nota <= 5 ){
            this.avaliacao = nota;
            console.log('O filme é ruim');
        } else if (nota > 7){
            console.log('O filme é excelente!\n')
        } else {
            console.log('O filme é mediano!')
        }
    }

    mostrarInfo(){
        console.log(`titulo: ${this.titulo}\n`);
        console.log(`diretor: ${this.diretor}\n`);
        console.log(`ano: ${this.ano}\n`);
    }
}

const filme = new Filme('interestelar', 'christopher nolan', 2014);

filme.mostrarInfo();
filme.avaliarNota(5);
*/