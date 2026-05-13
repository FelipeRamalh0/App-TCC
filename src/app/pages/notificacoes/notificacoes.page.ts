import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-notificacoes',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class NotificacoesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
