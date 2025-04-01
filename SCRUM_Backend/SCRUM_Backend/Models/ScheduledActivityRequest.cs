using System;

public class ScheduleActivityRequest
{
    public string ActivityName { get; set; } = null!;
    public int ScheduledBy { get; set; }
    public DateTime ScheduledTime { get; set; }
    public string Location { get; set; } = null!;
    public int UserId { get; set; }
}
