import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarTarefaPage } from './criar-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: CriarTarefaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarTarefaPageRoutingModule {}
