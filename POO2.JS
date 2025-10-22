/*class Carro{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    ligar(){
        console.log(`O carro ${this.marca} do modelo ${this.modelo} está ligado!\n`);
    }

    desligado(){
        console.log(`O carro ${this.marca} do modelo ${this.modelo} está desligado!\n`);
    }

    MostrarInfo(){
        console.log('*** Informações do Carro ***');
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log('****************************\n');
    }
}

const carro1 = new Carro('toyota', 'corolla', 2022);
const carro2 = new Carro('honda', 'civic', 2018);

carro1.MostrarInfo();
carro1.ligar();

carro2.MostrarInfo();
carro2.desligado();*/

/*class Veiculo{
    constructor(nome){
        this.nome = nome;
    }

    mover(){
        console.log(`O veiculo ${this.nome} está se movendo!`);
    }
}

class Carro extends Veiculo{
    mover(){
        console.log(`O carro ${this.nome} está se movendo na estrada!`)
    }
}

class Aviao extends Veiculo{
    mover(){
        console.log(`O avião ${this.nome} está sobrevoando!`)
    }
}

class Barco extends Veiculo{
    mover(){
        console.log(`O barco ${this.nome} está navegando pelo mar!`)
    }
}

const veiculos = [
    new Carro('astra'),
    new Aviao('Boeing'),
    new Barco('Iate'),
];

veiculos.forEach(v => v.mover());*/

class Pessoa{
    #nome;
    #idade;

    constructor(nome,idade){
        this.#nome = nome;
        this.#idade = idade;
    }

    get nome(){
        return this.#nome;
    }

    set nome(novoNome){
        if(novoNome.length > 1){
            this.#nome = novoNome;
        } else {
            console.log('Nome inválido!');
        }
    }

    get idade(){
        return this.#idade;
    }

    set idade(novaIdade){
        if(novaIdade >= 0){
            this.#idade = novaIdade;
        } else {
            console.log('Idade invalida!');
        }
    }

    apresentar(){
        console.log(`Olá, meu nome é ${this.#nome} e tenho ${this.idade} anos.`)
    }
}

const pessoa1 = new Pessoa('Lucas', 26);

pessoa1.apresentar();

pessoa1.nome = 'sidney';
pessoa1.idade = 27;

pessoa1.apresentar();
