import { Motorista } from "./motorista";

export class Viagem {
    private Id: number;
    private DataSaida: Date;
    private DataRetorno: Date;
    private HoraSaida: Date;
    private HoraRetorno: Date;
    private Destino: string;
    private Motorista: Motorista;
    private Detalhe: string;
    private KmSaida: number;
    private KmChegada: number;


    constructor(id: number, dataSaida: Date, dataRetorno: Date, horaSaida: Date, horaRetorno: Date, destino: string, motorista: Motorista, detalhe: string, kmSaida: number, kmChegada: number) {
        this.Id = id;
        this.DataSaida = dataSaida;
        this.DataRetorno = dataRetorno;
        this.HoraSaida = horaSaida;
        this.HoraRetorno = horaRetorno;
        this.Destino = destino;
        this.Motorista = motorista;
        this.Detalhe = detalhe;
        this.KmChegada = kmChegada;
        this.KmSaida = kmSaida;
    }
}
