using Microsoft.EntityFrameworkCore;
using Listz_Backend.Models;

namespace Listz_Backend.Data
{
    public class ListzContext : DbContext
    {
        public ListzContext(DbContextOptions<ListzContext> options)
            : base(options)
        {
        }
        
        public DbSet<Item> Items { get; set; }
    }
}
