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

  formularioCadastro!: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.formularioCadastro = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl('', [Validators.required]),
      documento: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telefone: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required]),
      statusCadastro: new FormControl(true),
      dataCriacao: new FormControl(new Date()),
      dataAlteracao: new FormControl(new Date()),
    });
  }

  cadastrar() {
    console.log(this.formularioCadastro.value);    
    this.onSubmit.emit(this.formularioCadastro.value);
  }

}
