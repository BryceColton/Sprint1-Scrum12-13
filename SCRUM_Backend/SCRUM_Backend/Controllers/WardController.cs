using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCRUM_Backend.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCRUM_Backend.Data;
using SCRUM_Backend.Models;

namespace SCRUM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WardController : ControllerBase
    {
        private readonly AppDbContext _context;

        public WardController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Ward
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ward>>> GetWards()
        {
            return await _context.Wards.Include(w => w.Leader).ToListAsync();
        }

        // GET: api/Ward/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ward>> GetWard(int id)
        {
            var ward = await _context.Wards
                .Include(w => w.Leader)
                .FirstOrDefaultAsync(w => w.WardId == id);

            if (ward == null)
            {
                return NotFound();
            }

            return ward;
        }

        // PUT: api/Ward/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWard(int id, Ward ward)
        {
            if (id != ward.WardId)
            {
                return BadRequest();
            }

            _context.Entry(ward).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WardExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Ward
        [HttpPost]
        public async Task<ActionResult<Ward>> PostWard(Ward ward)
        {
            _context.Wards.Add(ward);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWard", new { id = ward.WardId }, ward);
        }

        // DELETE: api/Ward/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWard(int id)
        {
            var ward = await _context.Wards.FindAsync(id);
            if (ward == null)
            {
                return NotFound();
            }

            _context.Wards.Remove(ward);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WardExists(int id)
        {
            return _context.Wards.Any(e => e.WardId == id);
        }
    }
}
