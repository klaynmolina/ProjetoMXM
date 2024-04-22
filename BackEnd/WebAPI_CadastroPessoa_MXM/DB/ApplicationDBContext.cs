using Microsoft.EntityFrameworkCore;
using WebAPI_CadastroPessoa_MXM.Modelos;

namespace WebAPI_CadastroPessoa_MXM.DB
{
    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {            
        }

        public DbSet<PessoaModel> Pessoas { get; set;}
    }
}
