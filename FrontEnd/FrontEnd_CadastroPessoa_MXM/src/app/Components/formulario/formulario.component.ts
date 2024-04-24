import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/Models/Pessoa';

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

  constructor() { }
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

  cadastrar() {
    console.log(this.formularioDados .value);    
    this.onSubmit.emit(this.formularioDados.value);
  }

}
