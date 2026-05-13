import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonicModule,
  ToastController,
  LoadingController
} from '@ionic/angular';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})

export class RegisterPage {

  nome = '';
  email = '';
  senha = '';
  tipo_usuario = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  async cadastrar() {

    const loading = await this.loadingCtrl.create({
      message: 'Cadastrando...'
    });

    await loading.present();

    try {

      await this.authService.register(
        this.email,
        this.senha
      );

      await loading.dismiss();

      this.presentToast(
        'Cadastro realizado com sucesso!',
        'success'
      );

      this.router.navigateByUrl('/login');

    } catch (error: any) {

      await loading.dismiss();

      this.presentToast(
        'Erro ao cadastrar: ' + error.message,
        'danger'
      );

    }

  }

  async presentToast(
    message: string,
    color: string = 'primary'
  ) {

    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color
    });

    await toast.present();

  }

  voltar() {
    this.router.navigateByUrl('/login');
  }

}
