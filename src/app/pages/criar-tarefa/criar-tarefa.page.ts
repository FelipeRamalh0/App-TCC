import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.page.html',
  styleUrls: ['./criar-tarefa.page.scss'],
  standalone: true,
  imports: [
  CommonModule,
  IonicModule
]
})
export class CriarTarefaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
