using System;

namespace OnlinePortfolio.Api.Models
{
    public class Achievement
    {
        public string AchievementName { get; set; }
        public int Score { get; set; }
        public DateTimeOffset AchievedDate { get; set;}
        public DateTimeOffset? ExpiringDate { get; set;}
    }
}