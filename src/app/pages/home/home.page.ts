import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Task {
  id: number;
  title: string;
  professional: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  technologies: string[];
  description: string;
  duration: string;
  rating: number;
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

  activeTab: string = 'home';
  searchQuery: string = '';

  tasks: Task[] = [
    {
      id: 1,
      title: 'Criar landing page responsiva',
      professional: 'Ana Silva',
      difficulty: 'Iniciante',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      description: 'Desenvolva uma landing page moderna e responsiva para um produto digital',
      duration: '2-3 horas',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Sistema de autenticação com React',
      professional: 'Carlos Santos',
      difficulty: 'Intermediário',
      technologies: ['React', 'TypeScript', 'Firebase'],
      description: 'Implemente um sistema completo de login e cadastro com validações',
      duration: '4-5 horas',
      rating: 4.9,
    },
    {
      id: 3,
      title: 'API REST com Node.js',
      professional: 'Marina Costa',
      difficulty: 'Intermediário',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      description: 'Construa uma API RESTful para gerenciamento de tarefas',
      duration: '5-6 horas',
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Dashboard com gráficos',
      professional: 'Pedro Oliveira',
      difficulty: 'Avançado',
      technologies: ['React', 'TypeScript', 'Recharts'],
      description: 'Crie um dashboard interativo com visualização de dados em tempo real',
      duration: '6-8 horas',
      rating: 5.0,
    },
  ];

  filteredTasks: Task[] = [];

  constructor() {}

  ngOnInit() {
    this.filteredTasks = this.tasks;
  }

  filterTasks() {

    this.filteredTasks = this.tasks.filter((task) =>
      task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      task.technologies.some((tech) =>
        tech.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    );
  }

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


