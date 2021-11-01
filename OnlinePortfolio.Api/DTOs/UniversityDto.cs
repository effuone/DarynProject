using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using OnlinePortfolio.Api.Models;

namespace OnlinePortfolio.Api.DTOs
{
    public record UniversityDto(
        long Id, 
        string Name, 
        DateTime CreationDate,
        int Country,
        long City,
        string Description
    );
    public record CreateUniversityDto(  
        [Required] string Name,
        [Required] DateTime CreationDate,
        [Required] int CountryId,
        [Required] long CityId,
        [Required] string Description
    );
     public record UpdateUniversityDto(  
        [Required] string Name,
        [Required] DateTime CreationDate,
        [Required] int CountryId,
        [Required] long CityId,
        [Required] string Description
    );
}