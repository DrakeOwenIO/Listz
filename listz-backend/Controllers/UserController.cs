using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Listz_Backend.Models;
using Listz_Backend.Models.Requests;
using Listz_Backend.Data;
using Microsoft.EntityFrameworkCore;

namespace Listz_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ListzContext _context;
        private readonly PasswordHasher<User> _hasher;

        public UsersController(ListzContext context)
        {
            _context = context;
            _hasher = new PasswordHasher<User>();
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            if (await _context.Users.AnyAsync(u => u.Email == request.Email))
                return BadRequest("Email already in use.");

            var user = new User
            {
                Email = request.Email
            };

            user.PasswordHash = _hasher.HashPassword(user, request.Password);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User registered.");
        }
    }
}
