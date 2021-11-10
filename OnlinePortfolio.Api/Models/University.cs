using System;

namespace OnlinePortfolio.Api.Models
{
    public class University
    {
        public long Id { get; set; }
        public string Name { get; set; }

        public DateTime CreationDate { get; set; }
        public int CountryId { get; set; }     
        public long CityId { get; set; }

        public string Description { get; set; }     
    }
}