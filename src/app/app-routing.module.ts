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
  path: 'completar-cadastro',
  loadComponent: () =>
    import('./pages/completar-cadastro/completar-cadastro.page')
      .then(m => m.CompletarCadastroPage)
},
{
  path: 'criar-tarefa',
  loadComponent: () =>
    import('./pages/criar-tarefa/criar-tarefa.page')
      .then(m => m.CriarTarefaPage)
},

  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
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
