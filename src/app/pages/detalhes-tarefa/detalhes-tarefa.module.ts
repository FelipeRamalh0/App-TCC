import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesTarefaPageRoutingModule } from './detalhes-tarefa-routing.module';

import { DetalhesTarefaPage } from './detalhes-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesTarefaPageRoutingModule
  ],
  declarations: [DetalhesTarefaPage]
})
export class DetalhesTarefaPageModule {}
