import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,

    children: [

      {
        path: 'home',
        loadComponent: () =>
          import('../home/tab1.page')
            .then(m => m.Tab1Page)
      },

      {
        path: 'tarefas',
        loadComponent: () =>
          import('../minhas-tarefas/tab2.page')
            .then(m => m.Tab2Page)
      },

      {
        path: 'ranking',
        loadComponent: () =>
          import('../ranking/tab3.page')
            .then(m => m.Tab3Page)
      },

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}