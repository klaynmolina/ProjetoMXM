import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { HomeComponent } from './Pages/home/home.component';
import { AlteracaoComponent } from './Pages/alteracao/alteracao.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'alteracao/:id', component: AlteracaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
