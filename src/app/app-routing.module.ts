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
  {
  path: 'tabs',
  loadChildren: () =>
    import('./pages/tabs/tabs.module')
      .then(m => m.TabsPageModule)
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
