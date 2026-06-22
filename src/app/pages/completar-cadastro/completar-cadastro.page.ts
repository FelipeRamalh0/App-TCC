import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonicModule,
  ToastController
} from '@ionic/angular';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';
import { Usuario } from '../../services/usuario';

@Component({
  selector: 'app-completar-cadastro',
  templateUrl: './completar-cadastro.page.html',
  styleUrls: ['./completar-cadastro.page.scss'],
  standalone: true,
  imports: [
      CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class CompletarCadastroPage  {

 tipoUsuario = 'Aprendiz';

  bio = '';

  nivelExperiencia = 'Iniciante';

  constructor(
    private authService: AuthService,
    private usuarioService: Usuario,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async finalizarCadastro() {

    try {

      const usuario =
        this.authService.usuarioAtual();

      if (!usuario) {
        return;
      }

      await this.usuarioService.criarUsuario({

        uid: usuario.uid,

        nome:
          usuario.displayName || '',

        email:
          usuario.email || '',

        tipoUsuario:
          this.tipoUsuario,

        bio:
          this.bio,

        pontuacao: 0,

        nivelExperiencia:
          this.nivelExperiencia

      });

      const toast =
        await this.toastCtrl.create({

          message:
            'Cadastro concluído',

          duration: 2000,

          color: 'success'

        });

      await toast.present();

      this.router.navigateByUrl('/home');

    } catch (erro) {

      console.log(erro);

    }

  }

}
