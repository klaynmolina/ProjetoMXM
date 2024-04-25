import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/Models/Pessoa';
import { ViaCepService } from 'src/app/Services/via-cep.service';
import { CepModalComponent } from '../cep-modal/cep-modal.component';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})

export class FormularioCadastroComponent {  

  @Output() onSubmit = new EventEmitter<Pessoa>();
  @Input() btnFuncaoCadastrar: string = 'Cadastrar';
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
      nome: new FormControl(this.dadosPessoa ? this.dadosPessoa.nome : '', [Validators.required, Validators.minLength(3)]),
      documento: new FormControl(this.dadosPessoa ? this.dadosPessoa.documento : '', [Validators.required, Validators.minLength(11)]),
      email: new FormControl(this.dadosPessoa ? this.dadosPessoa.email : '', [Validators.required, Validators.email]),
      telefone: new FormControl(this.dadosPessoa ? this.dadosPessoa.telefone : '', [Validators.required, Validators.minLength(8)]),
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
        if(this.endereco == 'true') {
          this.CepDialog();
          return;
        }
        this.formularioDados.value.endereco = this.endereco;
      } catch (error) {
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
