import { Tab2Page } from './pages/minhas-tarefas/tab2.page';
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
      import('./pages/home/tab1.page').then(m => m.Tab1Page)
  },
   {
    path: 'minhas-tarefas',
    loadComponent: () =>
      import('./pages/minhas-tarefas/tab2.page').then(m => m.Tab2Page)
  },
 {
  path: 'ranking',
  loadComponent: () =>
    import('./pages/ranking/tab3.page')
      .then(m => m.Tab3Page)
},
{
  path: 'criar-tarefa',
  loadComponent: () =>
    import('./pages/criar-tarefa/criar-tarefa.page')
      .then(m => m.CriarTarefaPage)
},
{
  path: 'editar-tarefa/:id',
  loadComponent: () =>
    import('./pages/editar-tarefa/editar-tarefa.page')
      .then(m => m.EditarTarefaPage)
},
{
  path: 'detalhes-tarefa',
  loadComponent: () =>
    import('./pages/detalhes-tarefa/detalhes-tarefa.page')
      .then(m => m.DetalhesTarefaPage)
},
  {
    path: 'completar-cadastro',
    loadComponent: () => import('./pages/completar-cadastro/completar-cadastro.page').then( m => m.CompletarCadastroPage)
  },

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
