import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dados-pessoais',
    loadChildren: () => import('./AbasPerfil/dados-pessoais/dados-pessoais.module').then( m => m.DadosPessoaisPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./AbasPerfil/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
