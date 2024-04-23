import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/Models/Pessoa';
import { PessoaService } from 'src/app/Services/pessoa.service';

@Component({
  selector: 'app-alteracao',
  templateUrl: './alteracao.component.html',
  styleUrls: ['./alteracao.component.css']
})
export class AlteracaoComponent implements OnInit {
  public btnFuncao = "Atualizar Cadastro";
  public btnTitulo = "Formulário para Alteração de Cadastro";
  pessoa!: Pessoa;

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pessoaService.GetPessoaById(id).subscribe((info) => {
      this.pessoa = info.dados;     
    })
  }

  atualizarCadastro(pessoa: Pessoa) {
    this.pessoaService.UpdatePessoa(pessoa).subscribe((info) => {
      alert(info.mensagem);
      this.router.navigate(['/home']);
    })    
  }
}
