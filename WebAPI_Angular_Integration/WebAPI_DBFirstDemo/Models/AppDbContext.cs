using Microsoft.EntityFrameworkCore;

namespace WebAPI_DBFirstDemo.Models
{
    public class AppDbContext:DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext>options):base(options) { }
        

        public DbSet<Student> Students { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Employee> Employees { get; set; }
    }
}
