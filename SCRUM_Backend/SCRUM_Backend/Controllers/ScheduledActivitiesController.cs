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
                ActivityName = request.ActivityName,
                ScheduledBy = request.ScheduledBy,
                ScheduledTime = request.ScheduledTime,
                Location = request.Location,
                UserId = request.UserId
            };

            _context.ScheduledActivities.Add(activity);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Activity scheduled successfully!", activity.ScheduleId });
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ScheduledActivity>>> GetScheduledActivities()
        {
            var scheduledActivities = await _context.ScheduledActivities.ToListAsync();
            return Ok(scheduledActivities);
        }


    }
}
