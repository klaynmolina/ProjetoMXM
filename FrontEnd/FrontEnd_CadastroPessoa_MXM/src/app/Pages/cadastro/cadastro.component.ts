import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CadastrarComponent } from 'src/app/Components/cadastrar/cadastrar.component';
import { Pessoa } from 'src/app/Models/Pessoa';
import { PessoaService } from 'src/app/Services/pessoa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  public btnFuncao = "Cadastrar";
  public btnTitulo = "Novo Cadastro";

  constructor(
    private pessoaService: PessoaService, 
    // private router: Router,
    public dialog: MatDialog
  ) { }

  CadastrarDialog() {
    this.dialog.open(CadastrarComponent, {
      width: '450px',
    });
  }  
  cadastrarPessoa(pessoa: Pessoa) {
    this.pessoaService.CreatePessoa(pessoa).subscribe((info) => {
      // alert(info.mensagem);
      // this.router.navigate(['/home']);
      this.CadastrarDialog();
    })    
  }
}
