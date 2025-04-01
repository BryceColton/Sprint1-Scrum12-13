using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCRUM_Backend.Models;

 [Table("activities")]
public class Activity
{
    [Key]
    [Column("activity_id")]
    public int ActivityId { get; set; }
    [Column("title")]
    public string Title { get; set; } = null!;
    [Column("description")]
    public string Description { get; set; } = null!;
    [Column("category")]
    public string Category { get; set; } = null!; // 'Spiritual', 'Social', etc.

    public ICollection<BlogPost>? BlogPosts { get; set; }
    //public ICollection<ScheduledActivity>? ScheduledActivities { get; set; }
}