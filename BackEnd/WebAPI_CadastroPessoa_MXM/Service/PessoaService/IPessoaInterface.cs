using WebAPI_CadastroPessoa_MXM.Modelos;

namespace WebAPI_CadastroPessoa_MXM.Service.PessoaService
{
    public interface IPessoaInterface
    {
        Task<ServiceResponse<List<PessoaModel>>> GetPessoas();
        Task<ServiceResponse<PessoaModel>> CreatePessoa(PessoaModel novaPessoa);
        Task<ServiceResponse<PessoaModel>> GetPessoaById(int id);
        Task<ServiceResponse<PessoaModel>> UpdatePessoa(PessoaModel atualizarPessoa);
        Task<ServiceResponse<PessoaModel>> DeletePessoa(int id);
        Task<ServiceResponse<PessoaModel>> DisablePessoa(int id);
        Task<ServiceResponse<PessoaModel>> EnablePessoa(int id);

    }
}
