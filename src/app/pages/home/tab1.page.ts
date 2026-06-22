import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TarefaService } from '../../services/tarefa';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class Tab1Page {

  constructor(private tarefaService: TarefaService,
    private router: Router
  ) {}
tipoUsuario = '';
tarefas: any[] = [];



ngOnInit() {
  

  const usuario = JSON.parse(
    localStorage.getItem('usuario') || '{}'
  );
  this.tipoUsuario = usuario.tipoUsuario;

  console.log('Tipo:', this.tipoUsuario);

  this.tarefaService
    .listarTarefas()
    .subscribe(dados => {

      this.tarefas = dados;

    });
}
async assumirTarefa(tarefa: any) {

  try {

    await this.tarefaService.assumirTarefa(
      tarefa.id
    );

    alert('Tarefa assumida com sucesso!');

  } catch (error) {

    console.error(error);

    alert('Erro ao assumir tarefa');

  }

}
async criarTarefa(){
  
this.router.navigateByUrl("criar-tarefa")
}

}
