import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

import {
  Firestore,
  collection,
  collectionData
} from '@angular/fire/firestore';

interface Task {
  id?: string;

  titulo: string;

  descricao: string;

  dificuldade: 'Iniciante' | 'Intermediário' | 'Avançado';

  tecnologias: string[];

  dataCriacao?: any;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})

export class HomePage implements OnInit {

  searchQuery: string = '';

  selectedDifficulty: string = 'Todos';

  tasks: Task[] = [];

  filteredTasks: Task[] = [];

  constructor(
    private authService: AuthService,
    private router: Router,
    private firestore: Firestore
  ) {}

  ngOnInit() {

    this.carregarTarefas();

  }

  // =========================
  // LOGOUT
  // =========================

  async logout() {

    try {

      await this.authService.logout();

      this.router.navigate(['/login']);

    } catch (error) {

      console.log('Erro ao sair', error);

    }

  }

  // =========================
  // CARREGAR TAREFAS
  // =========================

  carregarTarefas() {

    const tarefasRef = collection(
      this.firestore,
      'tarefas'
    );

    collectionData(tarefasRef, {
      idField: 'id'
    }).subscribe((dados: any) => {

      this.tasks = dados;

      this.filteredTasks = dados;

    });

  }

  // =========================
  // FILTRO COMPLETO
  // =========================

  filterTasks() {

    let tarefasFiltradas = [...this.tasks];

    // BUSCA
    if (this.searchQuery.trim() !== '') {

      const query = this.searchQuery.toLowerCase();

      tarefasFiltradas = tarefasFiltradas.filter((task) =>

        task.titulo.toLowerCase().includes(query) ||

        task.tecnologias.some((tech) =>
          tech.toLowerCase().includes(query)
        )
      );

    }

    // DIFICULDADE
    if (this.selectedDifficulty !== 'Todos') {

      tarefasFiltradas = tarefasFiltradas.filter(
        task => task.dificuldade === this.selectedDifficulty
      );

    }

    this.filteredTasks = tarefasFiltradas;

  }

  // =========================
  // CLASSE DIFICULDADE
  // =========================

  getDifficultyClass(difficulty: string) {

    switch (difficulty) {

      case 'Iniciante':
        return 'iniciante';

      case 'Intermediário':
        return 'intermediario';

      case 'Avançado':
        return 'avancado';

      default:
        return '';

    }

  }

}