import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.page.html',
  styleUrls: ['./editar-tarefa.page.scss'],
  standalone: true,
  imports: [
  CommonModule,
  IonicModule
]
})
export class EditarTarefaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
