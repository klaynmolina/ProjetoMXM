import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/Models/Pessoa';
import { ViaCepService } from 'src/app/Services/via-cep.service';
import { CepModalComponent } from '../cep-modal/cep-modal.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Pessoa>();
  @Input() btnFuncao!: string;
  @Input() btnTitulo!: string;
  @Input() dadosPessoa: Pessoa | null = null;

  formularioDados!: FormGroup;
  endereco!: string;

  constructor(
    private viaCepService: ViaCepService,
    public dialog: MatDialog,
  ) { }
  
  ngOnInit(): void {
    // console.log(this.dadosPessoa);
    this.formularioDados = new FormGroup({
      id: new FormControl(this.dadosPessoa ? this.dadosPessoa.id : 0),
      nome: new FormControl(this.dadosPessoa ? this.dadosPessoa.nome : '', [Validators.required]),
      documento: new FormControl(this.dadosPessoa ? this.dadosPessoa.documento : '', [Validators.required]),
      email: new FormControl(this.dadosPessoa ? this.dadosPessoa.email : '', [Validators.required]),
      telefone: new FormControl(this.dadosPessoa ? this.dadosPessoa.telefone : '', [Validators.required]),
      endereco: new FormControl(this.dadosPessoa ? this.dadosPessoa.endereco : '', [Validators.required]),
      statusCadastro: new FormControl(this.dadosPessoa ? this.dadosPessoa.statusCadastro : true),
      dataCriacao: new FormControl(new Date()),
      dataAlteracao: new FormControl(new Date()),
    });   
  }

  async cadastrar() {
      try {
        const cep = this.formularioDados.value.endereco;
        this.endereco = await this.viaCepService.buscarEndereco(cep);
        this.formularioDados.value.endereco = this.endereco;
      } catch (error) {
        // alert('CEP inválido.');
        this.CepDialog();
        return;
    }   
    this.onSubmit.emit(this.formularioDados.value);
    // console.log(this.formularioDados.value);  
  }  

  CepDialog() {
    this.dialog.open(CepModalComponent, {
      width: '450px',
    });
  }  

}
