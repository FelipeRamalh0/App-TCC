// notifications.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface Notification {
  id: number;
  type: 'feedback' | 'message' | 'task' | 'progress';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  author?: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notificacoes.page.html',
  styleUrls: ['./notificacoes.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class NotificacoensPage implements OnInit {

  notifications: Notification[] = [
    {
      id: 1,
      type: 'feedback',
      title: 'Novo Feedback Recebido',
      message: 'Ana Silva avaliou sua Landing Page Responsiva com 4.8 estrelas',
      timestamp: 'Há 5 minutos',
      read: false,
      author: 'Ana Silva',
    },
    {
      id: 2,
      type: 'task',
      title: 'Nova Tarefa Disponível',
      message: 'Chat em Tempo Real foi publicado por Roberto Lima',
      timestamp: 'Há 1 hora',
      read: false,
      author: 'Roberto Lima',
    },
    {
      id: 3,
      type: 'message',
      title: 'Nova Mensagem',
      message: 'Carlos Santos respondeu seu comentário no desafio',
      timestamp: 'Há 2 horas',
      read: false,
      author: 'Carlos Santos',
    },
    {
      id: 4,
      type: 'progress',
      title: 'Você subiu de nível!',
      message: 'Parabéns! Você alcançou o Nível 5 e ganhou 50 pontos XP',
      timestamp: 'Há 3 horas',
      read: true,
    },
    {
      id: 5,
      type: 'feedback',
      title: 'Feedback Atualizado',
      message: 'Pedro Oliveira adicionou comentários ao seu Dashboard',
      timestamp: 'Há 5 horas',
      read: true,
      author: 'Pedro Oliveira',
    },
  ];

  unreadCount = 0;

  constructor() { }

  ngOnInit() {
    this.calculateUnread();
  }

  calculateUnread() {
    this.unreadCount = this.notifications.filter(
      notification => !notification.read
    ).length;
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part[0])
      .join('');
  }

}
