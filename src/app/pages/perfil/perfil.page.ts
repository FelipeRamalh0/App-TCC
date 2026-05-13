import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  rating: number;
  date: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})

export class PerfilPage implements OnInit {

  techStack: string[] = [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'JavaScript',
    'HTML/CSS',
    'Git',
    'Tailwind CSS',
  ];

  portfolioProjects: PortfolioProject[] = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'Dashboard completo com gráficos e analytics',
      technologies: ['React', 'TypeScript', 'Recharts'],
      rating: 5.0,
      date: 'Mai 2026',
    },
    {
      id: 2,
      title: 'Sistema de Autenticação',
      description: 'Sistema de login/cadastro com validações',
      technologies: ['React', 'Firebase'],
      rating: 4.8,
      date: 'Abr 2026',
    },
    {
      id: 3,
      title: 'Landing Page Responsiva',
      description: 'Landing page moderna e responsiva',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      rating: 4.9,
      date: 'Mar 2026',
    },
  ];

  constructor() {}

  ngOnInit() {}

}
