import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import {
  Firestore,
  collection,
  addDoc
} from '@angular/fire/firestore';


@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.page.html',
  styleUrls: ['./criar-tarefa.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})

export class CriarTarefaPage {

  titulo: string = '';

  descricao: string = '';

  dificuldade: string = '';

  tecnologias: string = '';

  constructor(
     private toastController: ToastController,
  private firestore: Firestore
  ) {}

  async criarTarefa() {

     try {

    const tarefasRef = collection(
      this.firestore,
      'tarefas'
    );

    await addDoc(tarefasRef, {

      titulo: this.titulo,

      descricao: this.descricao,

      dificuldade: this.dificuldade,

      tecnologias: this.tecnologias
        .split(',')
        .map(tech => tech.trim()),

      dataCriacao: new Date()

    });

    const toast = await this.toastController.create({

      message: 'Tarefa criada com sucesso!',

      duration: 2000,

      color: 'success'

    });

    await toast.present();

    // LIMPAR CAMPOS
    this.titulo = '';
    this.descricao = '';
    this.dificuldade = '';
    this.tecnologias = '';

  } catch (error) {

    console.log(error);

    const toast = await this.toastController.create({

      message: 'Erro ao criar tarefa',

      duration: 2000,

      color: 'danger'

    });

    await toast.present();

  }
}
}