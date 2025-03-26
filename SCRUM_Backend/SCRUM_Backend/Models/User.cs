using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCRUM_Backend.Models;

 [Table("users")]
public class User
{
    [Key]
    [Column("user_id")]
    public int UserId { get; set; }
    [Column("username")]
    public string Username { get; set; } = null!;
    [Column("first_name")]
    public string FirstName { get; set; } = null!;
    [Column("last_name")]
    public string LastName { get; set; } = null!;
    [Column("password")]
    public string Password { get; set; } = null!;
    [Column("role")]
    public string Role { get; set; } = null!; // 'Leader', 'Youth', 'Admin'
    
    // Relationships
    public ICollection<BlogPost>? BlogPosts { get; set; }
    public ICollection<BlogLike>? BlogLikes { get; set; }
    public ICollection<ScheduledActivity>? ScheduledActivities { get; set; }
}