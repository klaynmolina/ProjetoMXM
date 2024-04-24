import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExcluirComponent } from 'src/app/Components/excluir/excluir.component';
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

ExcluirDialog(id: number) {
  this.dialog.open(ExcluirComponent, {
    width: '450px',
    // height: '450px',
    data: { id: id }
  });
}

  public pessoas: Pessoa[] = [];
  public buscarPessoas: Pessoa[] = [];
  colunas = [
    'Status',
    'Nome',
    'Documento',
    'E-mail',
    'Telefone',
    'Endereço',
    'FUNÇÕES ADMINISTRATIVAS'
  ]

  constructor (private pessoaService: PessoaService, public dialog: MatDialog) { }
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
