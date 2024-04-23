import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { HomeComponent } from './Pages/home/home.component';
import { AtualizarComponent } from './Pages/atualizar/atualizar.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'atualizar/:id', component: AtualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
