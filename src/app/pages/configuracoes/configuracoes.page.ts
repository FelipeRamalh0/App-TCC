import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ConfiguracoesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
