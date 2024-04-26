import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, firstValueFrom, map, toArray } from 'rxjs';
import { Pessoa } from 'src/app/Models/Pessoa';
import { ViaCepService } from 'src/app/Services/via-cep.service';
import { CepModalComponent } from '../cep-modal/cep-modal.component';
import { PessoaService } from 'src/app/Services/pessoa.service';
import { DuplicidadeModalComponent } from '../duplicidade-modal/duplicidade-modal.component';

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
    private pessoaService: PessoaService,
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
    const email = this.formularioDados.value.email;
    const documento = this.formularioDados.value.documento;    
    try {
      const cep = this.formularioDados.value.endereco;
      this.endereco = await this.viaCepService.buscarEndereco(cep);
      if(this.endereco == 'true') {
        this.CepDialog();
        return;
      }
      
      let testeEmail = await this.validarDuplicidadeEmail(email);
      let testeDocumento = await this.validarDuplicidadeDocumento(documento);
      
      if( testeEmail || testeDocumento) {
        this.DuplicidadeDialog();
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

  DuplicidadeDialog() {
    this.dialog.open(DuplicidadeModalComponent, {
      width: '450px',
    });
  } 

    async validarDuplicidadeEmail(email: string) {
      const cadastrosResponse = await firstValueFrom(this.pessoaService.GetPessoas());
      const resposta = cadastrosResponse.dados; 
      
      if (!resposta) {
          return false; // Retorna false se os dados forem indefinidos
      }

      const cadastros: Pessoa[] = resposta;

      // Verifica se algum dos cadastros tem o email desejado
      return cadastros.some((pessoa: Pessoa) => pessoa.email === email);
    }

    async validarDuplicidadeDocumento(documento: string) {
      const cadastrosResponse = await firstValueFrom(this.pessoaService.GetPessoas());
      const resposta = cadastrosResponse.dados;

      if (!resposta) {
          return false; // Retorna false se os dados forem indefinidos
      }

      const cadastros: Pessoa[] = resposta;

      // Verifica se algum dos cadastros tem o documento desejado
      return cadastros.some((pessoa: Pessoa) => pessoa.documento === documento);
    }

    onPaste(event: ClipboardEvent): void {
      event.preventDefault(); // Impede a ação padrão de colagem
  
      // Obtém os dados colados
      navigator.clipboard.readText().then(pastedData => {
        // Remove caracteres especiais e espaços usando uma expressão regular
        const sanitizedText = pastedData.replace(/[^\w\s]/gi, '').replace(/\s+/g, '');
  
        // Obtém a referência do campo de entrada e define o valor com os dados sanitizados
        const input = event.target as HTMLInputElement;
        input.value = sanitizedText;
  
        // Adiciona uma pequena pausa antes de remover as classes de validação
        setTimeout(() => {
          input.dispatchEvent(new Event('input')); // Dispara um evento de entrada para acionar a validação
          input.dispatchEvent(new Event('blur')); // Dispara um evento de desfoque para forçar a validação
        });
      });
    }

}
