import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { CadastroComponent } from './Pages/cadastro/cadastro.component';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AtualizarComponent } from './Pages/atualizar/atualizar.component';
import { DetalharComponent } from './Pages/detalhar/detalhar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ExcluirComponent } from './Components/excluir/excluir.component';
import { CadastrarComponent } from './Components/cadastrar/cadastrar.component';
import { AtualizarModalComponent } from './Components/atualizar-modal/atualizar-modal.component';
import { DesativarModalComponent } from './Components/desativar-modal/desativar-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    FormularioComponent,
    AtualizarComponent,
    DetalharComponent,
    ExcluirComponent,
    CadastrarComponent,
    AtualizarModalComponent,
    DesativarModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
