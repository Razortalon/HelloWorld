using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace HelloWorld.Repositories
{
    public class TutorialDbContext : DbContext
    {
        private IConfiguration Configuration { get; }
        public TutorialDbContext(IConfiguration configuration)
        {
            this.Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(Configuration.GetConnectionString("testdb"));
        }
    }
}
