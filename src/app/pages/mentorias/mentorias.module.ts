import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentoriasPageRoutingModule } from './mentorias-routing.module';

import { MentoriasPage } from './mentorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentoriasPageRoutingModule
  ],
  declarations: [MentoriasPage]
})
export class MentoriasPageModule {}
