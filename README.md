# CADASTRO DE PESSOA

## Resumo:
O projeto "Cadastro de Pessoa" foi desenvolvido com foco na abordagem back end first, utilizando a linguagem de programação .NET e o Swagger para testes iniciais da conexão com o banco de dados SQL Server, além de validar cada endpoint criado. Para o desenvolvimento do front end, optou-se pelo Angular na versão 16.2, aproveitando os recursos da biblioteca Angular Material para aprimorar a estilização da interface.

## Boas práticas:
- **Delegação de Responsabilidade:** O código segue o princípio de delegar funções aos serviços, evitando a criação de um "controlador inchado", o que poderia dificultar a manutenção futura.
  
## Facilidade de Manutenção:
- **Componentização Angular:** O projeto faz uso extensivo dos componentes do Angular para segmentar a criação de diferentes funcionalidades, facilitando a organização e manutenção do código.

## Funções:
- **Atualizar Cadastro**
- **Desativar Cadastro**
- **Ativar Cadastro**
- **Excluir Cadastro**

## Validações:
- **Modelo Padrão de Email:** As inserções de email seguem um padrão de validação.
- **Verificação de CEP:** Utiliza-se a API ViaCep para verificação do CEP.
- **Bloqueio de Duplicatas:** Evita-se a inserção de documentos e emails duplicados.
- **Quantidade Mínima de Caracteres:** Estabeleceu-se um mínimo de caracteres para nome, telefone e documento.
- **Bloqueio de Inserção de Letras:** Impede-se a inserção de letras em campos como documento, telefone e CEP.

# Tecnologias Utilizadas

### Frontend

- Angular

### Backend

- .NET

### Banco de dados

- SQLServer
