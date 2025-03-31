using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
// Add your namespace here, e.g.:
// using SCRUM_Backend.Models;

namespace SCRUM_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogLikeController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BlogLikeController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/BlogLike
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BlogLike>>> GetBlogLikes()
        {
            return await _context.BlogLikes.ToListAsync();
        }

        // GET: api/BlogLike/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BlogLike>> GetBlogLike(int id)
        {
            var blogLike = await _context.BlogLikes.FindAsync(id);

            if (blogLike == null)
            {
                return NotFound();
            }

            return blogLike;
        }

        // GET: api/BlogLike/post/5
        [HttpGet("post/{postId}")]
        public async Task<ActionResult<IEnumerable<BlogLike>>> GetBlogLikesByPost(int postId)
        {
            var blogLikes = await _context.BlogLikes
                .Where(bl => bl.PostId == postId)
                .ToListAsync();

            return blogLikes;
        }

        // GET: api/BlogLike/user/5
        [HttpGet("user/{userId}")]
        public async Task<ActionResult<IEnumerable<BlogLike>>> GetBlogLikesByUser(int userId)
        {
            var blogLikes = await _context.BlogLikes
                .Where(bl => bl.UserId == userId)
                .ToListAsync();

            return blogLikes;
        }

        // POST: api/BlogLike
        [HttpPost]
        public async Task<ActionResult<BlogLike>> PostBlogLike(BlogLike blogLike)
        {
            // Check if the like already exists
            var existingLike = await _context.BlogLikes
                .FirstOrDefaultAsync(bl => bl.PostId == blogLike.PostId && bl.UserId == blogLike.UserId);

            if (existingLike != null)
            {
                return Conflict("User has already liked this post");
            }

            _context.BlogLikes.Add(blogLike);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBlogLike", new { id = blogLike.LikeId }, blogLike);
        }

        // DELETE: api/BlogLike/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBlogLike(int id)
        {
            var blogLike = await _context.BlogLikes.FindAsync(id);
            if (blogLike == null)
            {
                return NotFound();
            }

            _context.BlogLikes.Remove(blogLike);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/BlogLike/post/5/user/3
        [HttpDelete("post/{postId}/user/{userId}")]
        public async Task<IActionResult> DeleteBlogLikeByPostAndUser(int postId, int userId)
        {
            var blogLike = await _context.BlogLikes
                .FirstOrDefaultAsync(bl => bl.PostId == postId && bl.UserId == userId);

            if (blogLike == null)
            {
                return NotFound();
            }

            _context.BlogLikes.Remove(blogLike);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // GET: api/BlogLike/count/5
        [HttpGet("count/{postId}")]
        public async Task<ActionResult<int>> GetLikeCount(int postId)
        {
            var count = await _context.BlogLikes
                .Where(bl => bl.PostId == postId)
                .CountAsync();

            return count;
        }

        // GET: api/BlogLike/check/post/5/user/3
        [HttpGet("check/post/{postId}/user/{userId}")]
        public async Task<ActionResult<bool>> CheckUserLiked(int postId, int userId)
        {
            var exists = await _context.BlogLikes
                .AnyAsync(bl => bl.PostId == postId && bl.UserId == userId);

            return exists;
        }
    }
}
