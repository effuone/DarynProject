using System;
using System.Collections.Generic;

namespace OnlinePortfolio.Api.Models
{
    public class Candidate 
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string SchoolName { get; set; }
        public int Grade { get; set; }
        public string EmailAddress { get; set; }
        public string CellphoneNumber { get; set; }
        public IEnumerable<Achievement> Achievements { get; set; }
        public DateTimeOffset CreatedDate { get; set;}
    }
}