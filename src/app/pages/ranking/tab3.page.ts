import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterLink
  ]
})
export class Tab3Page {

ranking: any[] = [];

  constructor( private usuarioService: Usuario) {}

 ngOnInit() {

    this.usuarioService
      .listarRanking()
      .subscribe(usuarios => {

        this.ranking = usuarios;

      });

  }

}


