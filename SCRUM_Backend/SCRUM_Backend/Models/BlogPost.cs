using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace SCRUM_Backend.Models;

 [Table("blog_posts")]
public class BlogPost
{
    [Key]
    [Column("post_id")]
    public int PostId { get; set; }
    [Column("user_id")]
    public int UserId { get; set; }
    [Column("activity_id")]
    public int ActivityId { get; set; }
    [Column("title")]
    public string Title { get; set; } = null!;
    [Column("content")]
    public string Content { get; set; } = null!;
    [Column("image_url")]
    public string? ImageUrl { get; set; }
    [Column("created_at")]
    public DateTime CreatedAt { get; set; }

    public User? User { get; set; }
    public Activity? Activity { get; set; }
    public ICollection<BlogLike>? Likes { get; set; }
}