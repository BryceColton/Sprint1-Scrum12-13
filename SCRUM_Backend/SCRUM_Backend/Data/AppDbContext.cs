using Microsoft.EntityFrameworkCore;
using SCRUM_Backend.Models;
namespace SCRUM_Backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    // Add DbSets for each model/table
    public DbSet<User> Users { get; set; }
    public DbSet<BlogPost> BlogPosts { get; set; }
    public DbSet<BlogLike> BlogLikes { get; set; }
    public DbSet<Activity> Activities { get; set; }
    public DbSet<ScheduledActivity> ScheduledActivities { get; set; }
    public DbSet<Ward> Wards { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Can add custom config here later if needed
    }
}