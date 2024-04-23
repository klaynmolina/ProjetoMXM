import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/Models/Pessoa';
import { PessoaService } from 'src/app/Services/pessoa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
buscar(event: Event) {
  const target = event.target as HTMLInputElement;
  const value = target.value.toLowerCase();
  this.pessoas =  this.buscarPessoas.filter((i) => i.nome.toLowerCase().includes(value));
}

  public pessoas: Pessoa[] = [];
  public buscarPessoas: Pessoa[] = [];

  constructor (private pessoaService: PessoaService) { }
  ngOnInit(): void {
    this.pessoaService.GetPessoas().subscribe(
      (info) => {
        // console.log(info.dados);
        const dadosRecebidos = info.dados;
        dadosRecebidos.map((i) => {
          i.dataCriacao = new Date(i.dataCriacao!).toLocaleDateString('pt-BR');
          i.dataAlteracao = new Date(i.dataAlteracao!).toLocaleDateString('pt-BR');
        })
        this.pessoas = info.dados;
        this.buscarPessoas = info.dados;
      }
    )
  }

}
