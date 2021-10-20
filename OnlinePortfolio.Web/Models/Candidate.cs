using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace OnlinePortfolio.Web.Models
{
    public class Candidate {
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string SchoolName { get; set; }
    public int Grade { get; set; }
    public string EmailAddress { get; set; }
    public string CellphoneNumber { get; set; }
    public IEnumerable<Achievement> Achievements { get; set; }
    public DateTimeOffset CreatedDate { get; set; }
    public override string ToString() => JsonSerializer.Serialize<Candidate>(this);
  }
}