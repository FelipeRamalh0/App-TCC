import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detalhes-tarefa',
  templateUrl: './detalhes-tarefa.page.html',
  styleUrls: ['./detalhes-tarefa.page.scss'],
  standalone: true,
  imports: [
  CommonModule,
  IonicModule
]
})
export class DetalhesTarefaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
