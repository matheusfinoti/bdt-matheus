import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './shared/tabela/tabela.component';
import { TopoTabelaComponent } from './shared/topo-tabela/topo-tabela.component';
import { CorpoTabelaComponent } from './shared/corpo-tabela/corpo-tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    TopoTabelaComponent,
    CorpoTabelaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
