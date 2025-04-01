using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SCRUM_Backend.Data;
using SCRUM_Backend.Models;


namespace SCRUM_Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ScheduledActivitiesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ScheduledActivitiesController(AppDbContext context)
        {
            _context = context;
        }

        // POST: api/scheduledActivities
        [HttpPost]
        public async Task<IActionResult> CreateScheduledActivity([FromBody] ScheduleActivityRequest request)
        {
            var activity = new ScheduledActivity
            {
                ActivityId = request.ActivityId,
                ScheduledBy = request.ScheduledBy,
                ScheduledTime = request.ScheduledTime,
                Location = request.Location,
                UserId = request.UserId
            };


            _context.ScheduledActivities.Add(activity);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Activity scheduled successfully!", activity.ScheduleId });
        }

        // GET: api/scheduledActivities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ScheduledActivity>>> GetScheduledActivities()
        {
            var scheduledActivities = await _context.ScheduledActivities
                .Include(sa => sa.Activity)
                .Include(sa => sa.User)
                .ToListAsync();

            return Ok(scheduledActivities);
        }
        [HttpGet("clean")]
        public async Task<IActionResult> GetCleanScheduledActivities()
        {
            var result = await _context.ScheduledActivities
                .Include(sa => sa.Activity)
                .Include(sa => sa.User)
                .Select(sa => new
                {
                    sa.ScheduleId,
                    sa.ScheduledTime,
                    sa.Location,
                    sa.ActivityId,
                    sa.ScheduledBy,
                    sa.UserId,
                    Activity = new
                    {
                        sa.Activity.ActivityId,
                        sa.Activity.Title,
                        sa.Activity.Description,
                        sa.Activity.Category
                    },
                    User = new
                    {
                        sa.User.UserId,
                        sa.User.Username,
                        sa.User.FirstName,
                        sa.User.LastName
                    }
                })
                .ToListAsync();

            return Ok(result);
        }



    }
}