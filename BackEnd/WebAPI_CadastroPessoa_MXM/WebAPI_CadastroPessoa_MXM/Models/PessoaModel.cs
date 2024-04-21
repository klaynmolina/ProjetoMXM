using System.ComponentModel.DataAnnotations;

namespace WebAPI_CadastroPessoa_MXM.Modelos
{
    public class PessoaModel
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Documento { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public bool StatusCadastro { get; set; }
        public DateTime DataCriacao { get; set; } = DateTime.Now.ToLocalTime();
        public DateTime DataAlteracao { get; set; } = DateTime.Now.ToLocalTime();

    }
}
