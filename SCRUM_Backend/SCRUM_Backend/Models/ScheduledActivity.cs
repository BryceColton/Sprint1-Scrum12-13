using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCRUM_Backend.Models;

[Table("scheduled_activities")]
public class ScheduledActivity
{
    [Key]
    [Column("schedule_id")]
    public int ScheduleId { get; set; }
    [Column("activity_id")]
    public int ActivityId { get; set; }
    [Column("scheduled_by")]
    public int ScheduledBy { get; set; }
    [Column("scheduled_time")]
    public DateTime ScheduledTime { get; set; }
    [Column("location")]
    public string Location { get; set; } = null!;

    public Activity? Activity { get; set; }
    public User? User { get; set; }
}