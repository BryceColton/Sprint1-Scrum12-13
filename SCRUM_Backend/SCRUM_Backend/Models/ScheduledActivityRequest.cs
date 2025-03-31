namespace SCRUM_Backend.Models
{
    public class ScheduleActivityRequest
    {
        public int ActivityId { get; set; }
        public int ScheduledBy { get; set; }
        public DateTime ScheduledTime { get; set; }
        public string Location { get; set; } = null!;
        public int UserId { get; set; }
    }
}