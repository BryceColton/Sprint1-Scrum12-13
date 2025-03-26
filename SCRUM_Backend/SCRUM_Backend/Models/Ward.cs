using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SCRUM_Backend.Models;

 [Table("wards")]
public class Ward
{
    [Key]
    [Column("ward_id")]
    public int WardId { get; set; }
    [Column("ward_name")]
    public string WardName { get; set; } = null!;
    [Column("leader_id")]
    public int LeaderId { get; set; }

    public User? Leader { get; set; }
}