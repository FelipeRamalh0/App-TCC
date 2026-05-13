import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class TarefasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
