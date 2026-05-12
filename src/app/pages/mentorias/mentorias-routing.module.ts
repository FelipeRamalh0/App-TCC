import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentoriasPage } from './mentorias.page';

const routes: Routes = [
  {
    path: '',
    component: MentoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentoriasPageRoutingModule {}
