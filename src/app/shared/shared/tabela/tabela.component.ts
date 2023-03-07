import { Component, Input } from '@angular/core';
import { Viagem } from 'src/app/models/viagem';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss']
})
export class TabelaComponent {
  
  lstViagem: Array<Viagem> = [];

  constructor() {
    this.lstViagem = [{"Id": 2}]
  }
}
