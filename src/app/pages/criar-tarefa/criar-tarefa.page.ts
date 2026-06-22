import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { tarefaService } from 'src/app/services/tarefa';
import { Router } from '@angular/router';
@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.page.html',
  styleUrls: ['./criar-tarefa.page.scss'],
  standalone: true,
  imports: [
  CommonModule,
  IonicModule,
  FormsModule
]
})
export class CriarTarefaPage implements OnInit {

  constructor(private tarefaService: tarefaService,
    private router: Router
  ) { }
ngOnInit() {}

    titulo = '';
descricao = '';
categoria = '';
nivelDificuldade = '';

async criarTarefa() {

  try {

    await this.tarefaService.criarTarefa({

      titulo: this.titulo,
      descricao: this.descricao,
      categoria: this.categoria,
      nivelDificuldade: this.nivelDificuldade,

      status: 'aberta',

      profissionalNome: 'Profissional',

      profissionalId: '123'

    });

    alert('Tarefa criada com sucesso!');

this.router.navigateByUrl("/home")

  } catch (error: any) {

    console.error(error);

    alert(
      'Erro ao criar tarefa:\n\n' 
    );

  }

}
async voltar(){
  this.router.navigateByUrl("/home")
}
}