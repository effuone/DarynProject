using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace OnlinePortfolio.Web.Models {
  public class Achievement {
    public string AchievementName { get; set; }
    public int Score { get; set; }
    public DateTimeOffset AchievedDate { get; set; }
    public DateTimeOffset? ExpiringDate { get; set; }
    public override string ToString() => JsonSerializer.Serialize<Achievement>(this);
  }
}
