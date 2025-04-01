using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

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

    // Relationships
    [JsonIgnore] // 👈 Prevents circular reference
    public ICollection<BlogPost>? BlogPosts { get; set; }

    [JsonIgnore] // 👈 MOST IMPORTANT to prevent circular serialization
    public ICollection<ScheduledActivity>? ScheduledActivities { get; set; }
}
