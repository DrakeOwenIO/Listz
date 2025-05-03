using System.ComponentModel.DataAnnotations;

namespace Listz_Backend.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Email { get; set; }

        [Required]
        [MaxLength(100)]
        public string PasswordHash { get; set; } // Don't store plain passwords!

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}