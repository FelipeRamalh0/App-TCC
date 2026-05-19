import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarTarefaPageRoutingModule } from './criar-tarefa-routing.module';

import { CriarTarefaPage } from './criar-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarTarefaPageRoutingModule
  ],
})
export class CriarTarefaPageModule {}
