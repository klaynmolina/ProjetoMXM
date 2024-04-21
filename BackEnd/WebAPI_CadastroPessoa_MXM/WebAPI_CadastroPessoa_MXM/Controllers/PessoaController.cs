using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI_CadastroPessoa_MXM.Modelos;
using WebAPI_CadastroPessoa_MXM.Service.PessoaService;

namespace WebAPI_CadastroPessoa_MXM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        private readonly IPessoaInterface _pessoaInterface;
        public PessoaController(IPessoaInterface pessoaInterface) { _pessoaInterface = pessoaInterface; }

        [HttpGet("listarTodos")]
        public async Task<ActionResult<ServiceResponse<List<PessoaModel>>>> GetPessoas()
        {
            return Ok(await _pessoaInterface.GetPessoas());
        }

        [HttpGet(("localizarCadastro"))]
        public async Task<ActionResult<ServiceResponse<PessoaModel>>> GetPessoaById(int id)
        {
            ServiceResponse<PessoaModel> serviceResponse = await _pessoaInterface.GetPessoaById(id);
            return Ok(serviceResponse);
        }

        [HttpPost("criarCadastro")]
        public async Task<ActionResult<ServiceResponse<PessoaModel>>> CreatePessoa(PessoaModel novaPessoa)
        {
            return Ok(await _pessoaInterface.CreatePessoa(novaPessoa));
        }

        [HttpPut("desativarCadastro")]
        public async Task<ActionResult<ServiceResponse<PessoaModel>>> DisablePessoa(int id)
        {
            ServiceResponse<PessoaModel> serviceResponse = await _pessoaInterface.DisablePessoa(id);
            return Ok(serviceResponse);
        }

        [HttpPut("ativarCadastro")]
        public async Task<ActionResult<ServiceResponse<PessoaModel>>> EnablePessoa(int id)
        {
            ServiceResponse<PessoaModel> serviceResponse = await _pessoaInterface.EnablePessoa(id);
            return Ok(serviceResponse);
        }

        [HttpPut("atualizarCadastro")]
        public async Task<ActionResult<ServiceResponse<PessoaModel>>> UpdatePessoa(PessoaModel atualizarPessoa)
        {
            ServiceResponse<PessoaModel> serviceResponse = await _pessoaInterface.UpdatePessoa(atualizarPessoa);
            return Ok(serviceResponse);
        }

        [HttpDelete("deletarCadastro")]
        public async Task<ActionResult<ServiceResponse<PessoaModel>>> DeletePessoa(int id)
        {
            ServiceResponse<PessoaModel> serviceResponse = await _pessoaInterface.DeletePessoa(id);
            return Ok(serviceResponse);
        }

    }
}
