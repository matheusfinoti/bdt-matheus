export class Veículo {
    private Id: number;
    private Marca: string;
    private Modelo: string;
    private Cor: string;
    private Ano: number;
    private Placa: string;

    constructor(id: number, marca: string, modelo: string, cor: string, ano: number, placa: string) {
        this.Id = id;
        this.Marca = marca;
        this.Modelo = modelo;
        this.Cor = cor;
        this.Ano = ano;
        this.Placa = placa;
    }
}




