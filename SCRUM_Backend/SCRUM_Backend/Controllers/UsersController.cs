using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCRUM_Backend.Data;
using SCRUM_Backend.Models;

namespace SCRUM_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // POST: api/users/login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest login)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == login.Username && u.Password == login.Password);

            if (user == null)
            {
                return Unauthorized(new { message = "Invalid username or password" });
            }

            // In a real app, you'd return a token instead.
            return Ok(new { message = "Login successful", userId = user.UserId });
        }

    }
}