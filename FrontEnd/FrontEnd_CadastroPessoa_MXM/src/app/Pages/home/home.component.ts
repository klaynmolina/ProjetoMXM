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
          
          // Aplicação Máscara CPF/CNPJ
          if(i.documento.length <= 11) {
            i.documento = this.formatCpf(i.documento);
          } else {
            i.documento = this.formatCnpj(i.documento);
          }

          // Aplicação Máscara Telefone
          if(i.telefone.length == 8) {
            i.telefone = this.formatTelefone(i.telefone);
          } else {
            i.telefone = this.formatCelular(i.telefone);
          }

        })
        this.pessoas = info.dados;
        this.buscarPessoas = info.dados;
      }
    )
  }

  // Máscara CPF
  private formatCpf(value: string): string {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  // Máscara CNPJ
  private formatCnpj(value: string): string {
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }

  // Máscara Telefone Fixo
  private formatTelefone(value: string): string {
    return value.replace(/^(\d{4})(\d{4})$/, "$1-$2");
  }

  // Máscara Celular
  private formatCelular(value: string): string {
    return value.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  }

}
