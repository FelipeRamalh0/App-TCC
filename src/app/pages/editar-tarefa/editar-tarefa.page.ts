import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { TarefaService } from '../../services/tarefa';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.page.html',
  styleUrls: ['./editar-tarefa.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class EditarTarefaPage implements OnInit {
  id = '';

  titulo = '';
  descricao = '';
  categoria = '';
  nivelDificuldade = 'Facil';

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {

    this.id =
      this.route.snapshot.paramMap.get('id') || '';

    this.carregarTarefa();
  }

 async carregarTarefa() {

  try {

    const tarefa =
      await this.tarefaService.buscarTarefa(
        this.id
      );

    if (tarefa) {

      this.titulo =
        tarefa['titulo'];

      this.descricao =
        tarefa['descricao'];

      this.categoria =
        tarefa['categoria'];

      this.nivelDificuldade =
        tarefa['nivelDificuldade'];

    }

  } catch (error) {

    console.error(error);

  }

}

  async salvar() {

    try {

      await this.tarefaService.editarTarefa(
        this.id,
        {
          titulo: this.titulo,
          descricao: this.descricao,
          categoria: this.categoria,
          nivelDificuldade:
            this.nivelDificuldade
        }
      );

      const toast =
        await this.toastCtrl.create({

          message:
            'Tarefa atualizada com sucesso!',

          duration: 2000,

          color: 'success'

        });

      await toast.present();

      this.router.navigateByUrl('/home');

    } catch (error) {

      console.error(error);

      const toast =
        await this.toastCtrl.create({

          message:
            'Erro ao atualizar tarefa',

          duration: 2000,

          color: 'danger'

        });

      await toast.present();

    }

  }

}