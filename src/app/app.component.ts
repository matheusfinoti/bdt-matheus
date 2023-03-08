import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  listaViagem = [{
    dataSaida: 102030,
    dataChegada: 102030,
    horaSaida: 102030,
    horaChegada: 102030,
    motorista: 'Motorista',
    destino: 'Santos',
    kmSaida: 1000,
    kmChegada: 1100,
    veiculo: 'Up'
  }, {
    dataSaida: 102030,
    dataChegada: 102030,
    horaSaida: 102030,
    horaChegada: 102030,
    motorista: 'Motorista',
    destino: 'Santos',
    kmSaida: 11000,
    kmChegada: 11110,
    veiculo: 'Van'
  }, {
    dataSaida: 102030,
    dataChegada: 102030,
    horaSaida: 102030,
    horaChegada: 102030,
    motorista: 'Motorista',
    destino: 'SP',
    kmSaida: 12000,
    kmChegada: 12500,
    veiculo: 'Uno'
  }, {
    dataSaida: 102030,
    dataChegada: 102030,
    horaSaida: 102030,
    horaChegada: 102030,
    motorista: 'Motorista',
    destino: 'Guarujá',
    kmSaida: 120,
    kmChegada: 130,
    veiculo: 'Palio'
  }, {
    dataSaida: 102030,
    dataChegada: 102030,
    horaSaida: 102030,
    horaChegada: 102030,
    motorista: 'Motorista',
    destino: 'Praia Grande',
    kmSaida: 8500,
    kmChegada: 9750,
    veiculo: 'Gol'
  }]

}
