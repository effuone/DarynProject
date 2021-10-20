using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using OnlinePortfolio.Api.Models;

namespace OnlinePortfolio.Api.DTOs
{
    public record CandidateDto(
        Guid Id, 
        string FirstName, 
        string LastName, 
        DateTime Birthday,
        string Country,
        string City,
        string SchoolName, 
        int Grade, 
        int GraduationYear,
        string EmailAddress, 
        string CellphoneNumber,
        IEnumerable<Achievement> Achievements, 
        DateTimeOffset CreatedDate
    );
    public record CreateCandidateDto(  
        [Required] string FirstName,
        [Required] string LastName,
        [Required] DateTime Birthday,
        [Required] string Country,
        [Required] string City,
        [Required] string SchoolName, 
        [Required][Range(9,12)] int Grade, 
        [Required] int GraduationYear,
        [Required] string EmailAddress, 
        [Required] string CellphoneNumber, 
        [Required] IEnumerable<Achievement> Achievements
    );
    public record UpdateCandidateDto(  
        [Required] string FirstName,
        [Required] string LastName,
        [Required] DateTime Birthday,
        [Required] string Country,
        [Required] string City,
        [Required] string SchoolName, 
        [Required][Range(9,12)] int Grade, 
        [Required] int GraduationYear,
        [Required] string EmailAddress, 
        [Required] string CellphoneNumber, 
        [Required] IEnumerable<Achievement> Achievements);
}