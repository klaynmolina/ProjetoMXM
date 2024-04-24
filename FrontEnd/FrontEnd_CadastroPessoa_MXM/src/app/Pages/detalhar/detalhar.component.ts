import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DesativarModalComponent } from 'src/app/Components/desativar-modal/desativar-modal.component';
import { Pessoa } from 'src/app/Models/Pessoa';
import { PessoaService } from 'src/app/Services/pessoa.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.component.html',
  styleUrls: ['./detalhar.component.css']
})
export class DetalharComponent implements OnInit {

  pessoa?: Pessoa;
  id!: number;

  constructor(
    private pessoaService: PessoaService, 
    private route: ActivatedRoute, 
    private router: Router,
    public dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.pessoaService.GetPessoaById(this.id).subscribe((info) => {
      const informacoes = info.dados;
      informacoes.dataCriacao = new Date(informacoes.dataCriacao!).toLocaleDateString('pt-BR');
      informacoes.dataAlteracao = new Date(informacoes.dataAlteracao!).toLocaleDateString('pt-BR');
      this.pessoa = info.dados;     
    })
  }

  DesativarDialog() {
    this.dialog.open(DesativarModalComponent, {
      width: '450px',
    });
  }  

  desativarCadastro() {
    this.pessoaService.DisablePessoa(this.id).subscribe((info) => {
      // alert(info.mensagem);
      // this.router.navigate(['/home']);
      this.DesativarDialog();
    })}
}
