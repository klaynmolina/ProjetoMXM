import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/Models/Pessoa';
import { PessoaService } from 'src/app/Services/pessoa.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  informacoes: any;
  pessoa!: Pessoa;

  constructor(
    private pessoaService: PessoaService, 
    private router: Router, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref:MatDialogRef<ExcluirComponent>
  ) { }

    ngOnInit(): void {
      this.informacoes = this.data;
      this.pessoaService.GetPessoaById(this.informacoes.id).subscribe((info) => {
      this.pessoa = info.dados;
      })
    }

    Excluir(){
      this.pessoaService.DeletePessoa(this.informacoes.id).subscribe((info) => {
        this.ref.close();
        window.location.reload();
      })
    }

    Cancelar(){
      this.ref.close();
    }
  }