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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    FormularioComponent,
    AtualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
