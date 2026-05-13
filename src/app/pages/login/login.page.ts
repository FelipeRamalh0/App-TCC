import { DashboardPage } from './../dashboard/dashboard.page';
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
    private router: Router,
    private toastController: ToastController
  ) { }

  async login() {
    try {
      await this.authService.login(this.email, this.senha);
      this.router.navigateByUrl('/DashboardPage');
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
      await this.authService.loginWithGoogle();
      this.router.navigateByUrl('/DashboardPage');
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.presentToast('Erro ao logar com Google: ' + error.message, 'danger')
      } else {
        this.presentToast('Erro desconehcido ao logar com Google', 'danger');
      }
    }
  }

  async loginGitHub() {
    try {
      await this.authService.loginWithGitHub();
      this.router.navigateByUrl('/DashboardPage');
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.presentToast('Erro ao logar com Google: ' + error.message, 'danger')
      } else {
        this.presentToast('Erro desconehcido ao logar com Google', 'danger');
      }
    }
  }
  async presentToast(mensagem: string, cor: string){
    const toast= await this.toastController.create({
      message: mensagem,
      color: cor,
      duration: 2000
    });
    toast.present();
  }

}
