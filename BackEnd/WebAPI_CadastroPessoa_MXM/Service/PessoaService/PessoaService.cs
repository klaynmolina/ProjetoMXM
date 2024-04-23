using Microsoft.EntityFrameworkCore;
using WebAPI_CadastroPessoa_MXM.DB;
using WebAPI_CadastroPessoa_MXM.Modelos;

namespace WebAPI_CadastroPessoa_MXM.Service.PessoaService
{
    public class PessoaService : IPessoaInterface
    {
        private readonly ApplicationDBContext _context;
        public PessoaService(ApplicationDBContext context) { _context = context; }

        public async Task<ServiceResponse<PessoaModel>> CreatePessoa(PessoaModel novaPessoa)
        {
            ServiceResponse<PessoaModel> serviceResponse = new ServiceResponse<PessoaModel>();
            try
            {
                if(novaPessoa == null)
                {
                    serviceResponse.Mensagem = "É necessário informar dados.";
                    serviceResponse.StatusResposta = false;
                    return serviceResponse;
                }
               _context.Add(novaPessoa);
                await _context.SaveChangesAsync();
                serviceResponse.Dados = novaPessoa;
                serviceResponse.Mensagem = novaPessoa.Nome + " cadastrado(a) com sucesso.";
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.StatusResposta = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<PessoaModel>> DeletePessoa(int id)
        {
            ServiceResponse<PessoaModel> serviceResponse = new ServiceResponse<PessoaModel>();
            try
            {
                PessoaModel pessoa = _context.Pessoas.FirstOrDefault(pessoa => pessoa.Id == id);
                if (pessoa == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Cadastro não localizado.";
                    serviceResponse.StatusResposta = false;
                }
                serviceResponse.Dados = pessoa;
                _context.Pessoas.Remove(pessoa);
                await _context.SaveChangesAsync();
                serviceResponse.Mensagem = "Cadastro deletado com sucesso.";
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.StatusResposta = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<PessoaModel>> DisablePessoa(int id)
        {
            ServiceResponse<PessoaModel> serviceResponse = new ServiceResponse<PessoaModel>();
            try
            {
                PessoaModel pessoa = _context.Pessoas.FirstOrDefault(pessoa => pessoa.Id == id);
                if(pessoa == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Cadastro não localizado.";
                    serviceResponse.StatusResposta = false;
                }
                pessoa.StatusCadastro = false;
                pessoa.DataAlteracao = DateTime.Now.ToLocalTime();
                _context.Pessoas.Update(pessoa);
                await _context.SaveChangesAsync();
                serviceResponse.Dados = pessoa;
                serviceResponse.Mensagem = "Cadastro inativado com sucesso.";
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.StatusResposta = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<PessoaModel>> EnablePessoa(int id)
        {
            ServiceResponse<PessoaModel> serviceResponse = new ServiceResponse<PessoaModel>();
            try
            {
                PessoaModel pessoa = _context.Pessoas.FirstOrDefault(pessoa => pessoa.Id == id);
                if (pessoa == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Cadastro não localizado.";
                    serviceResponse.StatusResposta = false;
                }
                pessoa.StatusCadastro = true;
                pessoa.DataAlteracao = DateTime.Now.ToLocalTime();
                _context.Pessoas.Update(pessoa);
                await _context.SaveChangesAsync();
                serviceResponse.Dados = pessoa;
                serviceResponse.Mensagem = "Cadastro ativado com sucesso.";
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.StatusResposta = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<PessoaModel>>> GetPessoas()
        {
            ServiceResponse<List<PessoaModel>> serviceResponse = new ServiceResponse<List<PessoaModel>>();
            try
            {
                serviceResponse.Dados = _context.Pessoas.ToList();
                if(serviceResponse.Dados.Count == 0)
                {
                    serviceResponse.Mensagem = "Nenhum cadastro encontrado";
                }
            } catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.StatusResposta = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<PessoaModel>> GetPessoaById(int id)
        {
            ServiceResponse<PessoaModel> serviceResponse = new ServiceResponse<PessoaModel>();
            try
            {
                PessoaModel pessoa = _context.Pessoas.FirstOrDefault(pessoa => pessoa.Id == id);
                if(pessoa == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Cadastro não localizado.";
                    serviceResponse.StatusResposta = false;
                }
                serviceResponse.Dados = pessoa;
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.StatusResposta = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<PessoaModel>> UpdatePessoa(PessoaModel atualizarPessoa)
        {
            ServiceResponse<PessoaModel> serviceResponse = new ServiceResponse<PessoaModel>();
            try
            {
                PessoaModel pessoa = _context.Pessoas.AsNoTracking().FirstOrDefault(pessoa => pessoa.Id == atualizarPessoa.Id);

                if (atualizarPessoa == null)
                {
                    serviceResponse.Dados = null;
                    serviceResponse.Mensagem = "Cadastro não localizado.";
                    serviceResponse.StatusResposta = false;
                }                         
                
                atualizarPessoa.DataAlteracao = DateTime.Now.ToLocalTime();
                _context.Pessoas.Update(atualizarPessoa);
                await _context.SaveChangesAsync();
                serviceResponse.Dados = atualizarPessoa;
                serviceResponse.Mensagem = "Cadastro atualizado com sucesso.";
            }
            catch (Exception ex)
            {
                serviceResponse.Mensagem = ex.Message;
                serviceResponse.StatusResposta = false;
            }
            return serviceResponse;
        }

    }
}
