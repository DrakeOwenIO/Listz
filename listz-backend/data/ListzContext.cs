using Microsoft.EntityFrameworkCore;
using Listz_Backend.Models;

namespace Listz_Backend.Data
{
    public class ListzContext : DbContext
    {
        public DbSet<List> Lists { get; set; }
        public DbSet<ListColumn> ListColumns { get; set; }
        public DbSet<ListItem> ListItems { get; set; }
        public DbSet<ListItemValue> ListItemValues { get; set; }

        public ListzContext(DbContextOptions<ListzContext> options)
            : base(options)
        {
        }
        
        public DbSet<User> Users { get; set; }
    }
}
