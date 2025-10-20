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

class Veiculo{
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

veiculos.forEach(v => v.mover());
