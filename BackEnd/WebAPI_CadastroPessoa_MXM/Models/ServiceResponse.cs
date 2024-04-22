namespace WebAPI_CadastroPessoa_MXM.Modelos
{
    public class ServiceResponse<T>
    {
        public T? Dados { get; set; }
        public string Mensagem { get; set; } = string.Empty;
        public bool StatusResposta { get; set; } = true;
    }
}


