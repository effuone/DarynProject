using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using OnlinePortfolio.Api.Models;

namespace OnlinePortfolio.Api.DTOs
{
    public record CandidateDto(Guid Id, string FirstName, string LastName, string SchoolName, int Grade, string EmailAddress, string CellphoneNumber, IEnumerable<Achievement> Achievements, DateTimeOffset CreatedDate);
    public record CreateCandidateDto([Required] string FirstName, [Required] string LastName, [Required] string SchoolName, [Required][Range(9,12)] int Grade, [Required] string EmailAddress, [Required] string CellphoneNumber, [Required] IEnumerable<Achievement> Achievements);
    public record UpdateCandidateDto([Required] string FirstName, [Required] string LastName, [Required] string SchoolName, [Required][Range(9,12)] int Grade, [Required] string EmailAddress, [Required] string CellphoneNumber, [Required] IEnumerable<Achievement> Achievements);
}