using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace SCRUM_Backend.Models;


public class LoginRequest
{
    public string Username { get; set; }
    public string Password { get; set; }
}
