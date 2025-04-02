using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCRUM_Backend.Models;

[Table("scheduled_activities")]
public class ScheduledActivity
{
    [Key]
    [Column("schedule_id")]
    public int ScheduleId { get; set; }
    [Column("activity_name")]
    public string ActivityName { get; set; } = null!;
    [Column("scheduled_by")]
    public int ScheduledBy { get; set; }
    [Column("scheduled_time")]
    public DateTime ScheduledTime { get; set; }
    [Column("location")]
    public string Location { get; set; } = null!;

    [Column("user_id")]
    public int UserId { get; set; }

    public User? User { get; set; }
    //[NotMapped]
    //public object Activity { get; internal set; }
}