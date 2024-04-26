import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, firstValueFrom } from 'rxjs';
import { Pessoa } from 'src/app/Models/Pessoa';
import { ViaCepService } from 'src/app/Services/via-cep.service';
import { CepModalComponent } from '../cep-modal/cep-modal.component';
import { PessoaService } from 'src/app/Services/pessoa.service';
import { DuplicidadeModalComponent } from '../duplicidade-modal/duplicidade-modal.component';

@Component({
  selector: 'app-formulario-atualizar',
  templateUrl: './formulario-atualizar.component.html',
  styleUrls: ['./formulario-atualizar.component.css'],
})
export class FormularioAtualizarComponent {
  @Output() onSubmit = new EventEmitter<Pessoa>();
  @Input() btnFuncaoAtualizar: string = 'Atualizar Cadastro';
  @Input() dadosPessoa: Pessoa | null = null;

  formularioDados!: FormGroup;
  endereco!: string;

  constructor(
    private viaCepService: ViaCepService,
    private pessoaService: PessoaService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.formularioDados = new FormGroup({
      id: new FormControl(this.dadosPessoa ? this.dadosPessoa.id : 0),
      nome: new FormControl(this.dadosPessoa ? this.dadosPessoa.nome : '', [
        Validators.required,
        Validators.minLength(3),
      ]),
      documento: new FormControl(
        this.dadosPessoa
          ? this.dadosPessoa.documento.length <= 11
            ? this.formatCpf(this.dadosPessoa.documento)
            : this.formatCnpj(this.dadosPessoa.documento)
          : '',
        [Validators.required, Validators.minLength(11)]
      ),
      email: new FormControl(this.dadosPessoa ? this.dadosPessoa.email : '', [
        Validators.required,
        Validators.email,
      ]),
      telefone: new FormControl(
        this.dadosPessoa
          ? this.dadosPessoa.telefone.length == 8
            ? this.formatTelefone(this.dadosPessoa.telefone)
            : this.formatCelular(this.dadosPessoa.telefone)
          : '',
        [Validators.required, Validators.minLength(8)]
      ),
      endereco: new FormControl(
        this.dadosPessoa ? this.dadosPessoa.endereco : '',
        [Validators.required]
      ),
      statusCadastro: new FormControl(
        this.dadosPessoa ? this.dadosPessoa.statusCadastro : true
      ),
      dataCriacao: new FormControl(new Date()),
      dataAlteracao: new FormControl(new Date()),
    });
  }

  async atualizar() {
    const enderecoCompleto = this.formularioDados.value.endereco;
    const somenteCEP = enderecoCompleto.slice(-9).replace(/-/g, '');

    const email = this.formularioDados.value.email;
    const documento = this.formularioDados.value.documento;

    let testeEmail = await this.validarDuplicidadeEmail(email);
    let testeDocumento = await this.validarDuplicidadeDocumento(documento);

    if (testeEmail || testeDocumento) {
      console.log(123);

      this.DuplicidadeDialog();
      return;
    }

    const cep = this.formularioDados.value.endereco;
    if (cep != null) {
      try {
        const cep = somenteCEP;
        this.endereco = await this.viaCepService.buscarEndereco(cep);
        if (this.endereco == 'true') {
          this.CepDialog();
          return;
        }
        this.formularioDados.value.endereco = this.endereco;
      } catch (error) {
        this.CepDialog();
        return;
      }
    }

    this.onSubmit.emit(this.formularioDados.value);
    // console.log(this.formularioDados.value);
  }

  DuplicidadeDialog() {
    this.dialog.open(DuplicidadeModalComponent, {
      width: '450px',
    });
  }

  CepDialog() {
    this.dialog.open(CepModalComponent, {
      width: '450px',
    });
  }

  async validarDuplicidadeEmail(email: string) {
    const cadastrosResponse = await firstValueFrom(
      this.pessoaService.GetPessoas()
    );
    const resposta = cadastrosResponse.dados;

    if (!resposta) {
      return false; // Retorna false se os dados forem indefinidos
    }

    const cadastros: Pessoa[] = resposta;

    // Verifica se algum dos cadastros tem o email desejado
    return cadastros.some(
      (pessoa: Pessoa) =>
        pessoa.email === email && pessoa.id != this.formularioDados.value.id
    );
  }

  async validarDuplicidadeDocumento(documento: string) {
    const cadastrosResponse = await firstValueFrom(
      this.pessoaService.GetPessoas()
    );
    const resposta = cadastrosResponse.dados;

    if (!resposta) {
      return false; // Retorna false se os dados forem indefinidos
    }

    const cadastros: Pessoa[] = resposta;

    // Verifica se algum dos cadastros tem o documento desejado
    return cadastros.some(
      (pessoa: Pessoa) =>
        pessoa.documento === documento &&
        pessoa.id != this.formularioDados.value.id
    );
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault(); // Impede a ação padrão de colagem

    // Obtém os dados colados
    navigator.clipboard.readText().then((pastedData) => {
      // Remove caracteres especiais usando uma expressão regular
      const sanitizedText = pastedData.replace(/[^\w\s]/gi, '');

      // Obtém a referência do campo de entrada e define o valor com os dados sanitizados
      const input = event.target as HTMLInputElement;
      input.value = sanitizedText;
      this.formularioDados.value.documento = sanitizedText;
    });
  }

  // Máscara CPF
  private formatCpf(value: string): string {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  // Máscara CNPJ
  private formatCnpj(value: string): string {
    return value.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      '$1.$2.$3/$4-$5'
    );
  }

  // Máscara Telefone Fixo
  private formatTelefone(value: string): string {
    return value.replace(/^(\d{4})(\d{4})$/, '$1-$2');
  }

  // Máscara Celular
  private formatCelular(value: string): string {
    return value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
  }
}
