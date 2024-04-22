export interface Pessoa {
    id?: number;
    nome: string;
    documento: string;
    email: string;
    telefone: string;
    endereco: string;
    statusCadastro: boolean;
    dataCriacao?: string;
    dataAlteracao?: string;
}