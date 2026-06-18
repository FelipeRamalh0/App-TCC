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
    path: 'home',
    loadComponent: () =>
      import('./pages/editar-tarefa/editar-tarefa.page').then(m => m.HomePage)
  },
  {
    path: 'criar-tarefa',
    loadChildren: () => import('./pages/criar-tarefa/criar-tarefa.module').then( m => m.CriarTarefaPageModule)
  },  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'criar-tarefa',
    loadChildren: () => import('./pages/criar-tarefa/criar-tarefa.module').then( m => m.CriarTarefaPageModule)
  },
  {
    path: 'editar-tarefa',
    loadChildren: () => import('./pages/editar-tarefa/editar-tarefa.module').then( m => m.EditarTarefaPageModule)
  },
  {
    path: 'detalhes-tarefa',
    loadChildren: () => import('./pages/detalhes-tarefa/detalhes-tarefa.module').then( m => m.DetalhesTarefaPageModule)
  },
  {
    path: 'entregas',
    loadChildren: () => import('./pages/entregas/entregas.module').then( m => m.EntregasPageModule)
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
