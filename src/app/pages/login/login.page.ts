import { Usuario } from './../../services/usuario';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonicModule
  ]
})
export class LoginPage {

  email = '';
  senha = '';
  constructor(
    private authService: AuthService,
    private usuarioService: Usuario,
    private router: Router,
    private toastController: ToastController
  ) { }

  async login() {

    try {

      const credencial =
        await this.authService.login(
          this.email,
          this.senha
        );

      const usuario =
        await this.usuarioService.buscarUsuario(
          credencial.user.uid
        );

      localStorage.setItem(
        'usuario',
        JSON.stringify(usuario)
      );

this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.presentToast('Erro ao logar: ' + error.message, 'danger')
      } else {
        this.presentToast('Erro desconehcido ao logar', 'danger');
      }
    }
  }

  async loginGoogle() {

  try {

    const credencial =
      await this.authService.loginWithGoogle();

    const usuario =
      await this.usuarioService.buscarUsuario(
        credencial.user.uid
      );

    if (usuario) {

      localStorage.setItem(
        'usuario',
        JSON.stringify(usuario)
      );

this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
      return;

    }

    this.router.navigateByUrl(
      '/completar-cadastro'
    );

  } catch (error: unknown) {

    if (error instanceof Error) {

      this.presentToast(
        'Erro ao logar com Google: ' +
        error.message,
        'danger'
      );

    } else {

      this.presentToast(
        'Erro desconhecido ao logar com Google',
        'danger'
      );

    }

  }

}

  async loginGitHub() {
      try {
        const credencial = await this.authService.loginWithGitHub();
        const usuario =
          await this.usuarioService.buscarUsuario(
            credencial.user.uid
          );

        if (usuario) {

          localStorage.setItem(
            'usuario',
            JSON.stringify(usuario)
          );

this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
          return;
        }

        this.router.navigateByUrl(
          '/completar-cadastro'
        );



      } catch (error: unknown) {
        if (error instanceof Error) {
          this.presentToast('Erro ao logar com Google: ' + error.message, 'danger')
        } else {
          this.presentToast('Erro desconehcido ao logar com Google', 'danger');
        }
      }
    }
  
  async presentToast(mensagem: string, cor: string) {
      const toast = await this.toastController.create({
        message: mensagem,
        color: cor,
        duration: 2000
      });
      toast.present();

    }
  }

