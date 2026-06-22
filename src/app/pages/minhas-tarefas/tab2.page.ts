import { AuthService } from 'src/app/services/auth';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TarefaService } from 'src/app/services/tarefa';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Entrega } from 'src/app/services/entrega';
import { Usuario } from 'src/app/services/usuario';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ]
})
export class Tab2Page {

  tarefas: any[] = [];
  tipoUsuario = '';
  constructor(
    private tarefaService: TarefaService,
    private authService: AuthService,
    private entregaService: Entrega,
    private usuarioService: Usuario,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    
  const usuario = JSON.parse(
    localStorage.getItem('usuario') || '{}'
  );

  this.tipoUsuario = usuario.tipoUsuario;

  this.carregarTarefas();

  }

  //-----------------------------
  //CARREGAR TAREFAS
  //-----------------------------
  carregarTarefas() {

  const usuario = JSON.parse(
    localStorage.getItem('usuario') || '{}'
  );

  console.log('Usuário LocalStorage:', usuario);

  this.authService
    .usuarioLogado()
    .subscribe(authUser => {

      if (!authUser) return;

      console.log('UID Firebase:', authUser.uid);

      if (usuario.tipoUsuario === 'Profissional') {

        console.log('Entrou como PROFISSIONAL');

        this.tarefaService
          .listarTarefasProfissional(authUser.uid)
          .subscribe(tarefas => {

  this.tarefas = tarefas;

  tarefas.forEach((tarefa: any) => {

    this.entregaService
      .listarEntregasPorTarefa(
        tarefa.id
      )
      .subscribe(entregas => {

        tarefa.entrega =
          entregas[0];

      });

  });

});

      } else {

        console.log('Entrou como APRENDIZ');

        this.tarefaService
          .listarMinhasTarefas(authUser.uid)
          .subscribe(tarefas => {

            console.log(
              'Tarefas do aprendiz:',
              tarefas
            );

            this.tarefas = tarefas;

          });

      }

    });

}
  //-------------------------
  //EDITAR
  //-----------------------
  editarTarefa(id: string) {
    console.log(id);
    this.router.navigate([
      '/editar-tarefa',
      id
    ]);

  }

  //-----------------------
  //EXCLUIR
  //-----------------------
  async excluirTarefa(id: string) {

    try {

      await this.tarefaService.excluirTarefa(id);

      this.carregarTarefas();

    } catch (erro) {

      console.log(erro);

    }

  }

  //---------------------
  //ENTREGAR
  //---------------------
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

//----------------------
//APROVAR ENTREGA
//---------------------
async aprovarEntrega(
  tarefa: any
) {

  try {

    await this.tarefaService
      .aprovarTarefa(
        tarefa.id
      );

    if (tarefa.entrega) {

      await this.entregaService
        .aprovarEntrega(
          tarefa.entrega.id
        );

      await this.usuarioService
        .adicionarPontos(
          tarefa.entrega.aprendizId,
          100
        );

    }

  } catch (erro) {

    console.log(erro);

  }

}

//-------------------------
//REPROVAR ENTREGA
//------------------------
async reprovarEntrega(tarefa: any) {

  try {

    await this.tarefaService
      .rejeitarTarefa(
        tarefa.id
      );

    if (tarefa.entrega) {

      await this.entregaService
        .rejeitarEntrega(
          tarefa.entrega.id
        );

    }

  } catch (erro) {

    console.log(erro);

  }

}


}



