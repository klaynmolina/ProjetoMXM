import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/Models/Pessoa';
import { PessoaService } from 'src/app/Services/pessoa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  public btnFuncao = "Cadastrar";
  public btnTitulo = "Formulário para Novo Cadastro";
  constructor(private pessoaService: PessoaService, private router: Router) { }
  cadastrarPessoa(pessoa: Pessoa) {
    this.pessoaService.CreatePessoa(pessoa).subscribe((info) => {
      alert(info.mensagem);
      this.router.navigate(['/home']);
    })    
  }
}
