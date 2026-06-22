import { AuthService } from 'src/app/services/auth';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { tarefaService } from 'src/app/services/tarefa';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class Tab2Page {

  tarefas: any[] = [];
  tipoUsuario = '';
  constructor(
    private tarefaService: tarefaService,
    private authService: AuthService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    const usuario = JSON.parse(
      localStorage.getItem('usuario') || '{}'
    );

    this.tipoUsuario = usuario.tipo_usuario;

    this.carregarTarefas();

  }
  carregarTarefas() {

    this.authService
      .usuarioLogado()
      .subscribe(usuario => {

        if (!usuario) return;

        this.tarefaService
          .listarMinhasTarefas(usuario.uid)
          .subscribe(tarefas => {

            this.tarefas = tarefas;

          });

      });

  }
  editarTarefa(id: string) {
    console.log(id);
    this.router.navigate([
      '/editar-tarefa',
      id
    ]);

  }
  async excluirTarefa(id: string) {

    try {

      await this.tarefaService.excluirTarefa(id);

      this.carregarTarefas();

    } catch (erro) {

      console.log(erro);

    }

  }
 async enviarSolucao(id: string) {

  const alert = await this.alertCtrl.create({

    header: 'Enviar Solução',

    inputs: [

      {
        name: 'github',
        type: 'text',
        placeholder: 'Link do GitHub'
      },

      {
        name: 'codigo',
        type: 'textarea',
        placeholder: 'Descreva sua solução'
      }

    ],

    buttons: [

      {
        text: 'Cancelar',
        role: 'cancel'
      },

      {
        text: 'Enviar',

        handler: async (dados) => {

          try {

            await this.tarefaService.enviarEntrega(

              id,

              dados.github,

              dados.codigo

            );

            this.carregarTarefas();

          } catch (erro) {

            console.log(erro);

          }

        }

      }

    ]

  });

  await alert.present();

}
}



