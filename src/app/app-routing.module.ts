import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then(m => m.RegisterPage)
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage)
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage)
  },

  {
    path: 'tarefas',
    loadComponent: () =>
      import('./pages/tarefas/tarefas.page').then(m => m.TarefasPage)
  },

  {
    path: 'portfolio',
    loadComponent: () =>
      import('./pages/portfolio/portfolio.page').then(m => m.PortfolioPage)
  },

  {
    path: 'perfil',
    loadComponent: () =>
      import('./pages/perfil/perfil.page').then(m => m.PerfilPage)
  },

  {
    path: 'configuracoes',
    loadComponent: () =>
      import('./pages/configuracoes/configuracoes.page').then(m => m.ConfiguracoesPage)
  },

  {
    path: 'notificacoes',
    loadComponent: () =>
      import('./pages/notificacoes/notificacoes.page').then(m => m.NotificacoesPage)
  },

  {
    path: 'mentorias',
    loadComponent: () =>
      import('./pages/mentorias/mentorias.page').then(m => m.MentoriasPage)
  },

  {
    path: 'chats',
    loadComponent: () =>
      import('./pages/chats/chats.page').then(m => m.ChatsPage)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
