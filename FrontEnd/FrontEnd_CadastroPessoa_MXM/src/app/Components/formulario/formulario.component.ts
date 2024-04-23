import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from 'src/app/Models/Pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Pessoa>();

  formularioCadastro!: FormGroup;

  constructor() { }
  ngOnInit(): void {
    this.formularioCadastro = new FormGroup({
      id: new FormControl(0),
      nome: new FormControl(''),
      documento: new FormControl(''),
      email: new FormControl(''),
      telefone: new FormControl(''),
      endereco: new FormControl(''),
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
